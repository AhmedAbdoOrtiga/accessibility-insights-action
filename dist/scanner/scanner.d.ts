/// <reference types="node" />
import { LocalFileServer } from '../local-file-server';
import { Logger } from '../logger/logger';
import { AllProgressReporter } from '../progress-reporter/all-progress-reporter';
import { ReportGenerator } from '../report/report-generator';
import { TaskConfig } from '../task-config';
import { PromiseUtils } from '../utils/promise-utils';
import { AICrawler } from 'accessibility-insights-scan-local';
export declare class Scanner {
    private readonly logger;
    private readonly reportGenerator;
    private readonly taskConfig;
    private readonly allProgressReporter;
    private readonly fileServer;
    private readonly promiseUtils;
    protected readonly currentProcess: typeof process;
    private readonly crawler;
    constructor(logger: Logger, reportGenerator: ReportGenerator, taskConfig: TaskConfig, allProgressReporter: AllProgressReporter, fileServer: LocalFileServer, promiseUtils: PromiseUtils, currentProcess: typeof process, crawler: AICrawler);
    scan(): Promise<void>;
}