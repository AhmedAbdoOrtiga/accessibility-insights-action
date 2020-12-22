import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';
import { AxeScanResults } from 'accessibility-insights-scan-local';
import { Logger } from '../../logger/logger';
import { AxeMarkdownConvertor } from '../../mark-down/axe-markdown-convertor';
import { ProgressReporter } from '../progress-reporter';
export declare class PullRequestCommentCreator implements ProgressReporter {
    private readonly axeMarkdownConvertor;
    private readonly octokit;
    private readonly githubObj;
    private readonly logger;
    constructor(axeMarkdownConvertor: AxeMarkdownConvertor, octokit: Octokit, githubObj: typeof github, logger: Logger);
    start(): Promise<void>;
    completeRun(axeScanResults: AxeScanResults): Promise<void>;
    failRun(message: string): Promise<void>;
    private isSupported;
    private findComment;
    private logMessage;
}
