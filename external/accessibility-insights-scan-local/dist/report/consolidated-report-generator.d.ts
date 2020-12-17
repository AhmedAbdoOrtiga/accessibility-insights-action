import { AxeResultsReducer, CombinedReportDataConverter } from 'axe-result-converter';
import { ReporterFactory } from 'accessibility-insights-report';
import { AxeInfo } from '../axe/axe-info';
import { ScanResultReader } from '../scan-result-providers/scan-result-reader';
export declare class ConsolidatedReportGenerator {
    private readonly scanResultReader;
    private readonly axeResultsReducer;
    private readonly combinedReportDataConverter;
    private readonly reporterFactoryFunc;
    private readonly axeInfo;
    constructor(scanResultReader: ScanResultReader, axeResultsReducer: AxeResultsReducer, combinedReportDataConverter: CombinedReportDataConverter, reporterFactoryFunc: ReporterFactory, axeInfo: AxeInfo);
    generateReport(baseUrl: string, scanStarted: Date, scanEnded: Date): Promise<string>;
    private combineAxeResults;
}
