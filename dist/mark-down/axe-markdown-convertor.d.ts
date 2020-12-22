import { AxeScanResults } from 'accessibility-insights-scan-local';
import { CheckResultMarkdownBuilder } from './check-result-markdown-builder';
export declare class AxeMarkdownConvertor {
    private readonly checkResultMarkdownBuilder;
    constructor(checkResultMarkdownBuilder: CheckResultMarkdownBuilder);
    convert(axeScanResults: AxeScanResults): string;
    getErrorMarkdown(): string;
}
