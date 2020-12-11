/// <reference types="node" />
/// <reference types="graceful-fs" />
import { ReporterFactory } from 'accessibility-insights-report';
import { AxeScanResults } from 'accessibility-insights-scan';
import * as filenamifyUrl from 'filenamify-url';
import * as fs from 'fs';
import { Logger } from '../logger/logger';
import { TaskConfig } from '../task-config';
export declare class ReportGenerator {
    private readonly taskConfig;
    private readonly reporterFactoryFunc;
    private readonly logger;
    private readonly fileSystemObj;
    private readonly filenamify;
    constructor(taskConfig: TaskConfig, reporterFactoryFunc: ReporterFactory, logger: Logger, fileSystemObj?: typeof fs, filenamify?: typeof filenamifyUrl);
    generateReport(axeResults: AxeScanResults): string;
    private saveHtmlReport;
}
