import { AxeScanResults } from 'accessibility-insights-scan';
export declare class CheckResultMarkdownBuilder {
    failureDetails: (axeScanResults: AxeScanResults) => string;
    errorContent: () => string;
    congratsContent: (axeScanResults: AxeScanResults) => string;
    private readonly scanResultDetails;
    private readonly scanResultFooter;
    private readonly failureSummary;
    private readonly failedRuleListItem;
    private readonly downloadArtifacts;
}
