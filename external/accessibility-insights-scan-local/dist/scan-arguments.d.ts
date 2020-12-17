export interface ScanArguments {
    url?: string;
    inputFile?: string;
    output?: string;
    crawl?: boolean;
    simulate?: boolean;
    selectors?: string[];
    maxUrls?: number;
    restart?: boolean;
    snapshot?: boolean;
    memoryMBytes?: number;
    silentMode?: boolean;
    inputUrls?: string[];
    discoveryPatterns?: string[];
    continue?: boolean;
}
