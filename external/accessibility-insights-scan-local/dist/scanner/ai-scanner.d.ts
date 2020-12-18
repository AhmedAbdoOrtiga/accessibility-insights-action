import { AxeScanResults, Page } from 'scanner-global-library';
export declare class AIScanner {
    private readonly page;
    constructor(page: Page);
    scan(url: string, chromePath?: string, sourcePath?: string): Promise<AxeScanResults>;
    getUserAgent(): string;
}
