/// <reference types="node" />
import { LocalFileServer } from '../local-file-server';
import { Logger } from '../logger/logger';
import { AllProgressReporter } from '../progress-reporter/all-progress-reporter';
import { TaskConfig } from '../task-config';
import { PromiseUtils } from '../utils/promise-utils';
import { AICrawler, AICombinedReportDataConverter } from 'accessibility-insights-scan-local';
import { ConsolidatedReportGenerator } from '../report/consolidated-report-generator';
import { AxeInfo } from '../axe/axe-info';
export declare class Scanner {
    private readonly logger;
    private readonly reportGenerator;
    private readonly taskConfig;
    private readonly allProgressReporter;
    private readonly fileServer;
    private readonly promiseUtils;
    protected readonly currentProcess: typeof process;
    private readonly crawler;
    private readonly combinedReportDataConverter;
    private readonly axeInfo;
    constructor(logger: Logger, reportGenerator: ConsolidatedReportGenerator, taskConfig: TaskConfig, allProgressReporter: AllProgressReporter, fileServer: LocalFileServer, promiseUtils: PromiseUtils, currentProcess: typeof process, crawler: AICrawler, combinedReportDataConverter: AICombinedReportDataConverter, axeInfo: AxeInfo);
    scan(): Promise<void>;
    private getConvertedData;
}
