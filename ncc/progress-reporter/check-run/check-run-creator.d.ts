import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';
import { Logger } from '../../logger/logger';
import { AxeMarkdownConvertor } from '../../mark-down/axe-markdown-convertor';
import { ProgressReporter } from '../progress-reporter';
import { CombinedReportParameters } from 'accessibility-insights-report';
export declare class CheckRunCreator implements ProgressReporter {
    private readonly axeMarkdownConvertor;
    private readonly octokit;
    private readonly githubObj;
    private readonly logger;
    private a11yCheck;
    constructor(axeMarkdownConvertor: AxeMarkdownConvertor, octokit: Octokit, githubObj: typeof github, logger: Logger);
    start(): Promise<void>;
    completeRun(combinedReportParameters: CombinedReportParameters): Promise<void>;
    failRun(): Promise<void>;
    private logMessage;
    private getScanOutput;
}
