import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';
import { AxeScanResults } from 'accessibility-insights-scan';
import { Logger } from '../../logger/logger';
import { AxeMarkdownConvertor } from '../../mark-down/axe-markdown-convertor';
import { ProgressReporter } from '../progress-reporter';
export declare class CheckRunCreator implements ProgressReporter {
    private readonly axeMarkdownConvertor;
    private readonly octokit;
    private readonly githubObj;
    private readonly logger;
    private a11yCheck;
    constructor(axeMarkdownConvertor: AxeMarkdownConvertor, octokit: Octokit, githubObj: typeof github, logger: Logger);
    start(): Promise<void>;
    completeRun(axeScanResults: AxeScanResults): Promise<void>;
    failRun(): Promise<void>;
    private logMessage;
    private getScanOutput;
}
