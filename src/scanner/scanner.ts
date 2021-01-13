// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { inject, injectable } from 'inversify';
import * as path from 'path';
import * as url from 'url';
import * as util from 'util';

import { iocTypes } from '../ioc/ioc-types';
import { LocalFileServer } from '../local-file-server';
import { Logger } from '../logger/logger';
import { AllProgressReporter } from '../progress-reporter/all-progress-reporter';
import { ReportGenerator } from '../report/report-generator';
import { TaskConfig } from '../task-config';
import { PromiseUtils } from '../utils/promise-utils';
import { AICrawler, CombinedScanResult, AICombinedReportDataConverter, ScanResultData } from 'accessibility-insights-scan-local';
import { ConsolidatedReportGenerator } from '../report/consolidated-report-generator';
import { AxeInfo } from '../axe/axe-info';
import { CombinedReportParameters } from 'accessibility-insights-report';
import { toolName } from '../content/strings';

@injectable()
export class Scanner {
    constructor(
        @inject(Logger) private readonly logger: Logger,
        @inject(ConsolidatedReportGenerator) private readonly reportGenerator: ConsolidatedReportGenerator,
        @inject(TaskConfig) private readonly taskConfig: TaskConfig,
        @inject(AllProgressReporter) private readonly allProgressReporter: AllProgressReporter,
        @inject(LocalFileServer) private readonly fileServer: LocalFileServer,
        @inject(PromiseUtils) private readonly promiseUtils: PromiseUtils,
        @inject(iocTypes.Process) protected readonly currentProcess: typeof process,
        @inject(AICrawler) private readonly crawler: AICrawler,
        @inject(AICombinedReportDataConverter) private readonly combinedReportDataConverter: AICombinedReportDataConverter,
        @inject(AxeInfo) private readonly axeInfo: AxeInfo,
    ) {}

    public async scan(): Promise<void> {
        let scanUrl: string;
        // let fail = false;

        try {
            await this.allProgressReporter.start();
            const baseUrl = await this.fileServer.start();
            scanUrl = url.resolve(baseUrl, this.taskConfig.getScanUrlRelativePath());

            this.logger.logInfo(`Starting accessibility scanning of URL ${scanUrl}.`);

            const chromePath = this.taskConfig.getChromePath();
            const axeCoreSourcePath = path.resolve(__dirname, 'axe.js');

            const scanStarted = new Date();
            const combinedScanResult: CombinedScanResult = await this.crawler.crawl({
                baseUrl: scanUrl,
                crawl: true,
                restartCrawl: true,
                chromePath: chromePath,
                axeSourcePath: axeCoreSourcePath,
                localOutputDir: this.taskConfig.getReportOutDir(),
            });
            const scanEnded = new Date();

            const convertedData = this.getConvertedData(combinedScanResult, scanStarted, scanEnded);
            this.reportGenerator.generateReport(convertedData);

            await this.allProgressReporter.completeRun(convertedData);

            // if (convertedData.results.urlResults.failedUrls > 0) {
            //     fail = true;
            // }
        } catch (error) {
            this.logger.trackExceptionAny(error, `An error occurred while scanning website page ${scanUrl}.`);
            await this.allProgressReporter.failRun(util.inspect(error));
        } finally {
            this.fileServer.stop();
            this.logger.logInfo(`Accessibility scanning of URL ${scanUrl} completed.`);
        }

        // if (fail) {
        //     this.logger.logInfo('Fix your accessibility issues!');
        //     process.exit(1);
        // }
    }

    private getConvertedData(combinedScanResult: CombinedScanResult, scanStarted: Date, scanEnded: Date): CombinedReportParameters {
        const scanResultData: ScanResultData = {
            baseUrl: combinedScanResult.scanMetadata.baseUrl ?? 'n/a',
            basePageTitle: combinedScanResult.scanMetadata.basePageTitle,
            scanEngineName: toolName,
            axeCoreVersion: this.axeInfo.version,
            browserUserAgent: combinedScanResult.scanMetadata.userAgent,
            urlCount: combinedScanResult.urlCount,
            scanStarted,
            scanEnded,
        };
        return this.combinedReportDataConverter.convertCrawlingResults(combinedScanResult.combinedAxeResults, scanResultData);
    }
}
