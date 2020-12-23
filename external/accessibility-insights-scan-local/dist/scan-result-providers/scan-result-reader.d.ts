import { ScanResult, ScanMetadata } from 'accessibility-insights-crawler';
export interface ScanResultReader extends AsyncIterable<ScanResult> {
    getScanMetadata(baseUrl: string): Promise<ScanMetadata>;
    next(): Promise<IteratorResult<ScanResult>>;
}
