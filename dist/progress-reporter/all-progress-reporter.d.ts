import { AxeScanResults } from 'accessibility-insights-scan-local';
import { ProgressReporter } from './progress-reporter';
import { PullRequestCommentCreator } from './pull-request/pull-request-comment-creator';
export declare class AllProgressReporter implements ProgressReporter {
    private readonly progressReporters;
    constructor(pullRequestCommentCreator: PullRequestCommentCreator);
    start(): Promise<void>;
    completeRun(axeScanResults: AxeScanResults): Promise<void>;
    failRun(message: string): Promise<void>;
    private execute;
}
