import { CrawlerRunOptions, Crawler, ScanMetadata } from 'accessibility-insights-crawler';
import { AxeResultsReducer, UrlCount, AxeCoreResults } from 'axe-result-converter';
import { ScanResultReader } from '../scan-result-providers/scan-result-reader';
export interface CombinedScanResult {
    urlCount?: UrlCount;
    combinedAxeResults?: AxeCoreResults;
    scanMetadata?: ScanMetadata;
    error?: string;
}
export declare class AICrawler {
    private readonly crawler;
    private readonly scanResultReader;
    private readonly axeResultsReducer;
    constructor(crawler: Crawler, scanResultReader: ScanResultReader, axeResultsReducer: AxeResultsReducer);
    crawl(crawlerRunOptions: CrawlerRunOptions): Promise<CombinedScanResult>;
    private combineAxeResults;
}
