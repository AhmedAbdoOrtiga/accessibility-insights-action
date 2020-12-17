declare module 'accessibility-insights-scan-local/src/axe/axe-info' {
  import 'reflect-metadata';
  import * as Axe from 'axe-core';
  export class AxeInfo {
      private readonly axe;
      constructor(axe?: typeof Axe);
      get version(): string;
  }

}
declare module 'accessibility-insights-scan-local/src/axe/axe-info.spec' {
  export {};

}
declare module 'accessibility-insights-scan-local/src/cli-entry-point' {
  import { Container } from 'inversify';
  import { ScanArguments } from 'accessibility-insights-scan-local/src/scan-arguments';
  export class CliEntryPoint {
      private readonly container;
      constructor(container: Container);
      runScan(scanArguments: ScanArguments): Promise<void>;
      private getCommandRunner;
  }

}
declare module 'accessibility-insights-scan-local/src/cli-entry-point.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/cli' {
  #!/usr/bin/env node
  import 'reflect-metadata';
  import './module-name-mapper';

}
declare module 'accessibility-insights-scan-local/src/crawler-parameters-builder' {
  /// <reference types="node" />
  import fs from 'fs';
  import { Url } from 'common';
  import { CrawlerRunOptions } from 'accessibility-insights-crawler';
  import { ScanArguments } from 'accessibility-insights-scan-local/src/scan-arguments';
  export class CrawlerParametersBuilder {
      private readonly urlObj;
      private readonly fileSystem;
      constructor(urlObj?: typeof Url, fileSystem?: typeof fs);
      build(scanArguments: ScanArguments): CrawlerRunOptions;
      private validateCrawlBaseUrl;
      private validateInputFileContent;
      private validateInputUrls;
      private normalizeUrls;
  }

}
declare module 'accessibility-insights-scan-local/src/crawler-parameters-builder.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/index' {
  export { AIScanner } from 'accessibility-insights-scan-local/src/scanner/ai-scanner';
  export { CrawlerCommandRunner } from 'accessibility-insights-scan-local/src/runner/crawler-command-runner';
  export { setupCliContainer } from 'accessibility-insights-scan-local/src/setup-cli-container';

}
declare module 'accessibility-insights-scan-local/src/ioc-types' {
  export const iocTypes: {
      ReporterFactory: string;
  };

}
declare module 'accessibility-insights-scan-local/src/module-name-mapper' {
  export {};

}
declare module 'accessibility-insights-scan-local/src/package.json.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/report/consolidated-report-generator' {
  import { AxeResultsReducer, CombinedReportDataConverter } from 'axe-result-converter';
  import { ReporterFactory } from 'accessibility-insights-report';
  import { AxeInfo } from 'accessibility-insights-scan-local/src/axe/axe-info';
  import { ScanResultReader } from 'accessibility-insights-scan-local/src/scan-result-providers/scan-result-reader';
  export class ConsolidatedReportGenerator {
      private readonly scanResultReader;
      private readonly axeResultsReducer;
      private readonly combinedReportDataConverter;
      private readonly reporterFactoryFunc;
      private readonly axeInfo;
      constructor(scanResultReader: ScanResultReader, axeResultsReducer: AxeResultsReducer, combinedReportDataConverter: CombinedReportDataConverter, reporterFactoryFunc: ReporterFactory, axeInfo: AxeInfo);
      generateReport(baseUrl: string, scanStarted: Date, scanEnded: Date): Promise<string>;
      private combineAxeResults;
  }

}
declare module 'accessibility-insights-scan-local/src/report/consolidated-report-generator.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/report/report-disk-writer' {
  /// <reference types="node" />
  import * as fs from 'fs';
  import * as path from 'path';
  import { ReportFormats } from 'accessibility-insights-scan-local/src/report/report-formats';
  export class ReportDiskWriter {
      private readonly fileSystemObj;
      private readonly pathObj;
      constructor(fileSystemObj?: typeof fs, pathObj?: typeof path);
      writeToDirectory(directory: string, fileName: string, format: ReportFormats, content: string): string;
      private ensureDirectory;
  }

}
declare module 'accessibility-insights-scan-local/src/report/report-disk-writer.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/report/report-formats' {
  export type ReportFormats = 'html' | 'json' | 'txt' | 'log';

}
declare module 'accessibility-insights-scan-local/src/report/report-generator' {
  import { ReporterFactory, ScanSummaryDetails, SummaryScanResults } from 'accessibility-insights-report';
  import { AxeScanResults } from 'scanner-global-library';
  import { AxeInfo } from 'accessibility-insights-scan-local/src/axe/axe-info';
  export class ReportGenerator {
      private readonly reporterFactoryFunc;
      private readonly axeInfo;
      constructor(reporterFactoryFunc: ReporterFactory, axeInfo: AxeInfo);
      generateReport(axeResults: AxeScanResults): string;
      generateSummaryReport(scanDetails: ScanSummaryDetails, results: SummaryScanResults, userAgent: string): Promise<string>;
      private sortScanResults;
      private compareScanResult;
  }

}
declare module 'accessibility-insights-scan-local/src/report/report-generator.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/report/report-name-generator-builder' {
  export class ReportNameGeneratorBuilder {
      getDateSegment(scanDate: Date): string;
      getTitleSegment(pageTitle: string): string;
      getTimeSegment(scanDate: Date): string;
      private padStartWithZero;
      private isValidCharForTitle;
  }

}
declare module 'accessibility-insights-scan-local/src/report/report-name-generator-builder.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/report/report-name-generator' {
  import { ReportNameGeneratorBuilder } from 'accessibility-insights-scan-local/src/report/report-name-generator-builder';
  export class ReportNameGenerator {
      private readonly reportNameGeneratorBuilder;
      constructor(reportNameGeneratorBuilder: ReportNameGeneratorBuilder);
      generateName(baseName: string, scanDate: Date): string;
  }

}
declare module 'accessibility-insights-scan-local/src/report/report-name-generator.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/runner/command-runner' {
  import { ScanArguments } from 'accessibility-insights-scan-local/src/scan-arguments';
  export interface CommandRunner {
      runCommand(scanArguments: ScanArguments): Promise<void>;
  }

}
declare module 'accessibility-insights-scan-local/src/runner/crawler-command-runner' {
  /// <reference types="node" />
  import * as fs from 'fs';
  import { Crawler } from 'accessibility-insights-crawler';
  import { ReportDiskWriter } from 'accessibility-insights-scan-local/src/report/report-disk-writer';
  import { ScanArguments } from 'accessibility-insights-scan-local/src/scan-arguments';
  import { ConsolidatedReportGenerator } from 'accessibility-insights-scan-local/src/report/consolidated-report-generator';
  import { CrawlerParametersBuilder } from 'accessibility-insights-scan-local/src/crawler-parameters-builder';
  import { CommandRunner } from 'accessibility-insights-scan-local/src/runner/command-runner';
  export class CrawlerCommandRunner implements CommandRunner {
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

}
declare module 'accessibility-insights-scan-local/src/runner/crawler-command-runner.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/runner/url-command-runner' {
  import { ReportDiskWriter } from 'accessibility-insights-scan-local/src/report/report-disk-writer';
  import { ReportGenerator } from 'accessibility-insights-scan-local/src/report/report-generator';
  import { AIScanner } from 'accessibility-insights-scan-local/src/scanner/ai-scanner';
  import { ScanArguments } from 'accessibility-insights-scan-local/src/scan-arguments';
  import { CommandRunner } from 'accessibility-insights-scan-local/src/runner/command-runner';
  export class UrlCommandRunner implements CommandRunner {
      private readonly scanner;
      private readonly reportGenerator;
      private readonly reportDiskWriter;
      constructor(scanner: AIScanner, reportGenerator: ReportGenerator, reportDiskWriter: ReportDiskWriter);
      runCommand(scanArguments: ScanArguments): Promise<void>;
  }

}
declare module 'accessibility-insights-scan-local/src/runner/url-command-runner.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/scan-arguments' {
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

}
declare module 'accessibility-insights-scan-local/src/scan-result-providers/scan-result-reader' {
  import { ScanResult, ScanMetadata } from 'accessibility-insights-crawler';
  export interface ScanResultReader extends AsyncIterable<ScanResult> {
      getScanMetadata(baseUrl: string): Promise<ScanMetadata>;
      next(): Promise<IteratorResult<ScanResult>>;
  }

}
declare module 'accessibility-insights-scan-local/src/scanner/ai-scanner' {
  import { AxeScanResults, Page } from 'scanner-global-library';
  export class AIScanner {
      private readonly page;
      constructor(page: Page);
      scan(url: string, chromePath?: string, sourcePath?: string): Promise<AxeScanResults>;
      getUserAgent(): string;
  }

}
declare module 'accessibility-insights-scan-local/src/scanner/ai-scanner.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local/src/service-name' {
  export const serviceName = "Accessibility Insights Service";

}
declare module 'accessibility-insights-scan-local/src/setup-cli-container' {
  import * as inversify from 'inversify';
  export function setupCliContainer(container?: inversify.Container): inversify.Container;

}
declare module 'accessibility-insights-scan-local/src/setup-cli-container.spec' {
  import 'reflect-metadata';

}
declare module 'accessibility-insights-scan-local' {
  import main = require('accessibility-insights-scan-local/src/index');
  export = main;
}