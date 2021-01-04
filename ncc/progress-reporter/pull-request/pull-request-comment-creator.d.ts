import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';
import { Logger } from '../../logger/logger';
import { AxeMarkdownConvertor } from '../../mark-down/axe-markdown-convertor';
import { ProgressReporter } from '../progress-reporter';
import { CombinedReportParameters } from 'accessibility-insights-report';
export declare class PullRequestCommentCreator implements ProgressReporter {
    private readonly axeMarkdownConvertor;
    private readonly octokit;
    private readonly githubObj;
    private readonly logger;
    constructor(axeMarkdownConvertor: AxeMarkdownConvertor, octokit: Octokit, githubObj: typeof github, logger: Logger);
    start(): Promise<void>;
    completeRun(combinedReportParameters: CombinedReportParameters): Promise<void>;
    failRun(message: string): Promise<void>;
    private isSupported;
    private findComment;
    private logMessage;
}
