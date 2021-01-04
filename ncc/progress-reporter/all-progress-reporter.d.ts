import { CheckRunCreator } from './check-run/check-run-creator';
import { ProgressReporter } from './progress-reporter';
import { PullRequestCommentCreator } from './pull-request/pull-request-comment-creator';
import { CombinedReportParameters } from 'accessibility-insights-report';
export declare class AllProgressReporter implements ProgressReporter {
    private readonly progressReporters;
    constructor(pullRequestCommentCreator: PullRequestCommentCreator, checkRunCreator: CheckRunCreator);
    start(): Promise<void>;
    completeRun(combinedReportParameters: CombinedReportParameters): Promise<void>;
    failRun(message: string): Promise<void>;
    private execute;
}
