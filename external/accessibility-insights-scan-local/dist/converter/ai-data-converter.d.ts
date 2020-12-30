import { CombinedReportDataConverter, ScanResultData, AxeCoreResults } from 'axe-result-converter';
import { CombinedReportParameters } from 'accessibility-insights-report';
export declare class AICombinedReportDataConverter {
    private readonly combinedReportDataConverter;
    constructor(combinedReportDataConverter: CombinedReportDataConverter);
    convertCrawlingResults(combinedAxeResults: AxeCoreResults, scanResultData: ScanResultData): CombinedReportParameters;
}
