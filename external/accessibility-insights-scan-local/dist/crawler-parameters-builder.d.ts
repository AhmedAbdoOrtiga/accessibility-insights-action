/// <reference types="node" />
import fs from 'fs';
import { Url } from 'common';
import { CrawlerRunOptions } from 'accessibility-insights-crawler';
import { ScanArguments } from './scan-arguments';
export declare class CrawlerParametersBuilder {
    private readonly urlObj;
    private readonly fileSystem;
    constructor(urlObj?: typeof Url, fileSystem?: typeof fs);
    build(scanArguments: ScanArguments): CrawlerRunOptions;
    private validateCrawlBaseUrl;
    private validateInputFileContent;
    private validateInputUrls;
    private normalizeUrls;
}
