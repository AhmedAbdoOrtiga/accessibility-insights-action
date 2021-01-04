/// <reference types="node" />
import { AxeInfo } from '../axe/axe-info';
import { Logger } from '../logger/logger';
import { ReporterFactory, CombinedReportParameters } from 'accessibility-insights-report';
import { AICombinedReportDataConverter } from 'accessibility-insights-scan-local';
import * as fs from 'fs';
import { TaskConfig } from '../task-config';
export declare class ConsolidatedReportGenerator {
    private readonly combinedReportDataConverter;
    private readonly axeInfo;
    private readonly taskConfig;
    private readonly reporterFactoryFunc;
    private readonly logger;
    private readonly fileSystemObj;
    constructor(combinedReportDataConverter: AICombinedReportDataConverter, axeInfo: AxeInfo, taskConfig: TaskConfig, reporterFactoryFunc: ReporterFactory, logger: Logger, fileSystemObj?: typeof fs);
    generateReport(combinedReportData: CombinedReportParameters): Promise<string>;
    private saveHtmlReport;
}
