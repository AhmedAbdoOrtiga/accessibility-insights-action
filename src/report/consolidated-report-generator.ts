// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { AxeInfo } from '../axe/axe-info';
import { Logger } from '../logger/logger';
import { ReporterFactory } from 'accessibility-insights-report';
import { ScanResultData, CombinedScanResult, AICombinedReportDataConverter } from 'accessibility-insights-scan-local';
import * as fs from 'fs';
import { inject, injectable } from 'inversify';
import { iocTypes } from '../ioc/ioc-types';
import { TaskConfig } from '../task-config';


@injectable()
export class ConsolidatedReportGenerator {
    constructor(
        @inject(AICombinedReportDataConverter) private readonly combinedReportDataConverter: AICombinedReportDataConverter,
        @inject(AxeInfo) private readonly axeInfo: AxeInfo,
        @inject(TaskConfig) private readonly taskConfig: TaskConfig,
        @inject(iocTypes.ReportFactory)
        private readonly reporterFactoryFunc: ReporterFactory,
        @inject(Logger) private readonly logger: Logger,
        private readonly fileSystemObj: typeof fs = fs,
    ) {}

    public async generateReport(combinedScanResult: CombinedScanResult, scanStarted: Date, scanEnded: Date): Promise<string> {
        const scanResultData: ScanResultData = {
            baseUrl: combinedScanResult.scanMetadata.baseUrl ?? 'n/a',
            basePageTitle: combinedScanResult.scanMetadata.basePageTitle,
            scanEngineName: 'AIAction',
            axeCoreVersion: this.axeInfo.version,
            browserUserAgent: combinedScanResult.scanMetadata.userAgent,
            urlCount: combinedScanResult.urlCount,
            scanStarted,
            scanEnded,
        };
        const combinedReportData = this.combinedReportDataConverter.convertCrawlingResults(combinedScanResult.combinedAxeResults, scanResultData);
        const reporter = this.reporterFactoryFunc();

        const htmlReportContent = reporter.fromCombinedResults(combinedReportData).asHTML();

        const outDirectory = this.taskConfig.getReportOutDir();
        const reportFileName = `${outDirectory}/index.html`;


        this.saveHtmlReport(reportFileName, htmlReportContent);

        return reportFileName;
    }

    private saveHtmlReport(fileName: string, content: string): void {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        this.fileSystemObj.writeFileSync(fileName, content);
        this.logger.logInfo(`scan report saved successfully ${fileName}`);
    }
}
