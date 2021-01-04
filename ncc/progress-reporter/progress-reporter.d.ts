import { CombinedReportParameters } from 'accessibility-insights-report';
export interface ProgressReporter {
    start(): Promise<void>;
    completeRun(combinedReportParameters: CombinedReportParameters): Promise<void>;
    failRun(message: string): Promise<void>;
}
