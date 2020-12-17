/// <reference types="node" />
import * as fs from 'fs';
import { Crawler } from 'accessibility-insights-crawler';
import { ReportDiskWriter } from '../report/report-disk-writer';
import { ScanArguments } from '../scan-arguments';
import { ConsolidatedReportGenerator } from '../report/consolidated-report-generator';
import { CrawlerParametersBuilder } from '../crawler-parameters-builder';
import { CommandRunner } from './command-runner';
export declare class CrawlerCommandRunner implements CommandRunner {
    private readonly crawler;
    private readonly crawlerParametersBuilder;
    private readonly consolidatedReportGenerator;
    private readonly reportDiskWriter;
    private readonly filesystem;
    constructor(crawler: Crawler, crawlerParametersBuilder: CrawlerParametersBuilder, consolidatedReportGenerator: ConsolidatedReportGenerator, reportDiskWriter: ReportDiskWriter, filesystem?: typeof fs);
    runCommand(scanArguments: ScanArguments): Promise<void>;
    private generateConsolidatedReport;
    private canRunCommand;
}
