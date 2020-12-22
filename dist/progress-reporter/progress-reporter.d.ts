import { AxeScanResults } from 'accessibility-insights-scan-local';
export interface ProgressReporter {
    start(): Promise<void>;
    completeRun(axeScanResults: AxeScanResults): Promise<void>;
    failRun(message: string): Promise<void>;
}
