import { CheckResultMarkdownBuilder } from './check-result-markdown-builder';
import { CombinedReportParameters } from 'accessibility-insights-report';
export declare class AxeMarkdownConvertor {
    private readonly checkResultMarkdownBuilder;
    constructor(checkResultMarkdownBuilder: CheckResultMarkdownBuilder);
    convert(combinedReportParameters: CombinedReportParameters): string;
    getErrorMarkdown(): string;
}
