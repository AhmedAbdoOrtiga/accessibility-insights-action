/// <reference types="node" />
import { AIScanner } from 'accessibility-insights-scan';
import { AIScanner as AIScannerLocal } from 'accessibility-insights-scan-local';
import { LocalFileServer } from '../local-file-server';
import { Logger } from '../logger/logger';
import { AllProgressReporter } from '../progress-reporter/all-progress-reporter';
import { ReportGenerator } from '../report/report-generator';
import { TaskConfig } from '../task-config';
import { PromiseUtils } from '../utils/promise-utils';
export declare class Scanner {
    private readonly logger;
    private readonly scanner;
    private readonly reportGenerator;
    private readonly taskConfig;
    private readonly allProgressReporter;
    private readonly fileServer;
    private readonly promiseUtils;
    protected readonly currentProcess: typeof process;
    private readonly scannerLocal;
    constructor(logger: Logger, scanner: AIScanner, reportGenerator: ReportGenerator, taskConfig: TaskConfig, allProgressReporter: AllProgressReporter, fileServer: LocalFileServer, promiseUtils: PromiseUtils, currentProcess: typeof process, scannerLocal: AIScannerLocal);
    scan(): Promise<void>;
    private invokeScan;
}
