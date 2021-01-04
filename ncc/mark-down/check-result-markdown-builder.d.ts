import { CombinedReportParameters } from 'accessibility-insights-report';
export declare class CheckResultMarkdownBuilder {
    errorContent: () => string;
    content: (combinedReportParameters: CombinedReportParameters) => string;
    private readonly scanResultDetails;
    private readonly scanResultFooter;
    private readonly downloadArtifacts;
}
