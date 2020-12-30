// Generated by dts-bundle-generator v5.5.0

/// <reference types="node" />
/// <reference types="puppeteer" />

import { AxePuppeteer } from '@axe-core/puppeteer';
import { CombinedReportParameters } from 'accessibility-insights-report';
import axe from 'axe-core';
import { AxeResults } from 'axe-core';
import * as fs from 'fs';
import * as inversify from 'inversify';
import { Container } from 'inversify';
import * as Puppeteer from 'puppeteer';

export declare type BrowserErrorTypes = "UrlNavigationTimeout" | "SslError" | "ResourceLoadFailure" | "InvalidUrl" | "EmptyPage" | "HttpErrorCode" | "NavigationError" | "InvalidContentType" | "UrlNotResolved" | "ScanTimeout";
export interface BrowserError {
	errorType: BrowserErrorTypes;
	statusCode?: number;
	statusText?: string;
	message: string;
	stack: string;
}
declare class PageConfigurator {
	private userAgent;
	getUserAgent(): string;
	configurePage(page: Page): Promise<void>;
	private setUserAgent;
}
export declare type AvailabilityTelemetry = {
	id?: string;
	duration?: number;
	success: boolean;
	runLocation?: string;
	message?: string;
	measurements?: {
		[key: string]: number;
	};
	properties?: {
		[key: string]: string;
	};
};
export declare type LoggerEvent = "HealthCheck" | "FunctionalTest" | "BatchPoolStats" | "ScanRequestReceived" | "ScanRequestAccepted" | "ScanRequestQueued" | "ScanRequestRunning" | "ScanRequestCompleted" | "ScanRequestFailed" | "ScanRequestNotificationStarted" | "ScanRequestNotificationCompleted" | "ScanRequestNotificationFailed" | "ScanTaskStarted" | "ScanTaskCompleted" | "ScanTaskFailed" | "SendNotificationTaskStarted" | "SendNotificationTaskCompleted" | "SendNotificationTaskFailed" | "BrowserScanFailed";
export interface BaseTelemetryMeasurements {
	[name: string]: number;
}
export interface BatchPoolMeasurements extends BaseTelemetryMeasurements {
	runningTasks: number;
	samplingIntervalInSeconds: number;
	maxParallelTasks: number;
}
export interface ScanRequestReceivedMeasurements extends BaseTelemetryMeasurements {
	totalScanRequests: number;
	pendingScanRequests: number;
	rejectedScanRequests: number;
}
export interface ScanRequestAcceptedMeasurements extends BaseTelemetryMeasurements {
	acceptedScanRequests: number;
}
export interface ScanRequestQueuedMeasurements extends BaseTelemetryMeasurements {
	queuedScanRequests: number;
}
export interface ScanRequestRunningMeasurements extends BaseTelemetryMeasurements {
	runningScanRequests: number;
}
export interface ScanRequestCompletedMeasurements extends BaseTelemetryMeasurements {
	completedScanRequests: number;
}
export interface ScanRequestFailedMeasurements extends BaseTelemetryMeasurements {
	failedScanRequests: number;
}
export interface ScanRequestNotificationStartedMeasurements extends BaseTelemetryMeasurements {
	scanRequestNotificationsStarted: number;
}
export interface ScanRequestNotificationCompletedMeasurements extends BaseTelemetryMeasurements {
	scanRequestNotificationsCompleted: number;
}
export interface ScanRequestNotificationFailedMeasurements extends BaseTelemetryMeasurements {
	scanRequestNotificationsFailed: number;
}
export interface ScanTaskStartedMeasurements extends BaseTelemetryMeasurements {
	scanWaitTime: number;
	startedScanTasks: number;
}
export interface ScanTaskCompletedMeasurements extends BaseTelemetryMeasurements {
	scanExecutionTime: number;
	scanTotalTime: number;
	completedScanTasks: number;
}
export interface ScanTaskFailedMeasurements extends BaseTelemetryMeasurements {
	failedScanTasks: number;
}
export interface SendNotificationTaskStartedMeasurements extends BaseTelemetryMeasurements {
	startedScanNotificationTasks: number;
}
export interface SendNotificationTaskCompletedMeasurements extends BaseTelemetryMeasurements {
	completedScanNotificationTasks: number;
}
export interface SendNotificationTaskFailedMeasurements extends BaseTelemetryMeasurements {
	failedScanNotificationTasks: number;
}
export interface BrowserScanFailedMeasurements extends BaseTelemetryMeasurements {
	failedBrowserScans: number;
}
export declare type TelemetryMeasurements = {
	HealthCheck: null;
	FunctionalTest: null;
	BatchPoolStats: BatchPoolMeasurements;
	ScanRequestReceived: ScanRequestReceivedMeasurements;
	ScanRequestAccepted: ScanRequestAcceptedMeasurements;
	ScanRequestQueued: ScanRequestQueuedMeasurements;
	ScanRequestRunning: ScanRequestRunningMeasurements;
	ScanRequestCompleted: ScanRequestCompletedMeasurements;
	ScanRequestFailed: ScanRequestFailedMeasurements;
	ScanRequestNotificationStarted: ScanRequestNotificationStartedMeasurements;
	ScanRequestNotificationCompleted: ScanRequestNotificationCompletedMeasurements;
	ScanRequestNotificationFailed: ScanRequestNotificationFailedMeasurements;
	ScanTaskStarted: ScanTaskStartedMeasurements;
	ScanTaskCompleted: ScanTaskCompletedMeasurements;
	ScanTaskFailed: ScanTaskFailedMeasurements;
	SendNotificationTaskStarted: SendNotificationTaskStartedMeasurements;
	SendNotificationTaskCompleted: SendNotificationTaskCompletedMeasurements;
	SendNotificationTaskFailed: SendNotificationTaskFailedMeasurements;
	BrowserScanFailed: BrowserScanFailedMeasurements;
};
export interface LoggerProperties {
	scanId?: string;
	url?: string;
	batchRequestId?: string;
	batchJobId?: string;
	batchTaskId?: string;
	apiName?: string;
	apiVersion?: string;
	controller?: string;
	invocationId?: string;
	source?: string;
	reportId?: string;
}
export interface LoggerClient {
	setup(baseProperties?: {
		[index: string]: string;
	}): Promise<void>;
	trackMetric(name: string, value: number): void;
	trackEvent(name: LoggerEvent, properties?: {
		[key: string]: string;
	}, measurements?: TelemetryMeasurements[LoggerEvent]): void;
	trackAvailability(name: string, telemetry: AvailabilityTelemetry): void;
	log(message: string, logLevel: LogLevel, properties?: {
		[name: string]: string;
	}): void;
	trackException(error: Error): void;
	flush(): Promise<void>;
	setCommonProperties(properties: LoggerProperties): void;
	initialized: boolean;
}
declare enum LogLevel {
	info = 0,
	warn = 1,
	verbose = 2,
	error = 3
}
declare abstract class Logger {
	protected readonly loggerClients: LoggerClient[];
	protected readonly currentProcess: typeof process;
	protected readonly initializationTimeout: number;
	protected initialized: boolean;
	protected isDebugEnabled: boolean;
	constructor(loggerClients: LoggerClient[], currentProcess: typeof process, initializationTimeout?: number);
	setup(baseProperties?: {
		[property: string]: string;
	}): Promise<void>;
	setCommonProperties(properties: LoggerProperties): void;
	trackMetric(name: string, value?: number): void;
	trackEvent(name: LoggerEvent, properties?: {
		[name: string]: string;
	}, measurements?: TelemetryMeasurements[LoggerEvent]): void;
	trackAvailability(name: string, telemetry: AvailabilityTelemetry): void;
	trackException(error: Error): void;
	log(message: string, logLevel: LogLevel, properties?: {
		[name: string]: string;
	}): void;
	logInfo(message: string, properties?: {
		[name: string]: string;
	}): void;
	logVerbose(message: string, properties?: {
		[name: string]: string;
	}): void;
	logWarn(message: string, properties?: {
		[name: string]: string;
	}): void;
	logError(message: string, properties?: {
		[name: string]: string;
	}): void;
	trackExceptionAny(underlyingErrorData: any | Error, message: string): void;
	flush(): Promise<void>;
	private invokeLoggerClient;
	private invokeLoggerClientAsync;
	private initializeClients;
	private ensureInitialized;
}
declare class GlobalLogger extends Logger {
	constructor(loggerClients: LoggerClient[], currentProcess: typeof process, initializationTimeout?: number);
}
declare class HashGenerator {
	private readonly shaObj;
	constructor(shaObj?: any);
	getWebsiteScanResultDocumentId(baseUrl: string, scanGroupId: string): string;
	getDbHashBucket(prefix: string, ...values: string[]): string;
	getHashBucket(prefix: string, buckets: number, ...values: string[]): string;
	generateBase64Hash(...values: string[]): string;
}
export declare type SerializedHashSet<T> = {
	hashDictionary: {
		[key: string]: T;
	};
};
declare class HashSet<T> implements IterableIterator<T> {
	private hashDictionary;
	private pointer;
	private keysSnapshot;
	add(key: string, value: T): void;
	get(key: string): T;
	remove(key: string): void;
	has(key: string): boolean;
	keys(): string[];
	values(): T[];
	next(): IteratorResult<T>;
	[Symbol.iterator](): IterableIterator<T>;
	serialize(): SerializedHashSet<T>;
	static deserialize<U>(serialized: SerializedHashSet<U>): HashSet<U>;
	private getSnapshot;
}
declare class PageHandler {
	private readonly logger;
	constructor(logger: GlobalLogger);
	waitForPageToCompleteRendering(page: Page, timeoutMsecs: number, checkIntervalMsecs?: number): Promise<void>;
}
declare class PageResponseProcessor {
	getResponseError(response: Response, error?: Error): BrowserError;
	getNavigationError(error: Error): BrowserError;
	private isHtmlContentType;
	private getContentType;
}
declare class RuleExclusion {
	accessibilityRuleExclusionList: string[];
}
declare class AxePuppeteerFactory {
	private readonly ruleExclusion;
	private readonly fileSystemObj;
	constructor(ruleExclusion?: RuleExclusion, fileSystemObj?: typeof fs);
	createAxePuppeteer(page: Puppeteer.Page, contentSourcePath?: string): Promise<AxePuppeteer>;
}
export interface AxeScanResults {
	results?: AxeResults;
	error?: string | BrowserError;
	pageResponseCode?: number;
	unscannable?: boolean;
	scannedUrl?: string;
	pageTitle?: string;
	browserSpec?: string;
}
declare class WebDriver {
	private readonly logger;
	private readonly puppeteer;
	browser: Puppeteer.Browser;
	constructor(logger: Logger, puppeteer?: typeof Puppeteer);
	launch(browserExecutablePath?: string): Promise<Puppeteer.Browser>;
	close(): Promise<void>;
}
declare class PageNavigator {
	readonly pageConfigurator: PageConfigurator;
	protected readonly pageResponseProcessor: PageResponseProcessor;
	protected readonly pageRenderingHandler: PageHandler;
	readonly gotoTimeoutMsecs = 60000;
	readonly pageRenderingTimeoutMsecs = 10000;
	constructor(pageConfigurator: PageConfigurator, pageResponseProcessor: PageResponseProcessor, pageRenderingHandler: PageHandler);
	navigate(url: string, page: Page, onNavigationError?: (browserError: BrowserError, error?: unknown) => Promise<void>): Promise<Response>;
}
declare class Page {
	private readonly webDriver;
	private readonly axePuppeteerFactory;
	private readonly pageNavigator;
	private readonly logger;
	page: Puppeteer.Page;
	browser: Puppeteer.Browser;
	get userAgent(): string;
	constructor(webDriver: WebDriver, axePuppeteerFactory: AxePuppeteerFactory, pageNavigator: PageNavigator, logger: GlobalLogger);
	create(browserExecutablePath?: string): Promise<void>;
	scanForA11yIssues(url: string, contentSourcePath?: string): Promise<AxeScanResults>;
	close(): Promise<void>;
	private scanPageForIssues;
}
export declare class AIScanner {
	private readonly page;
	constructor(page: Page);
	scan(url: string, chromePath?: string, sourcePath?: string): Promise<AxeScanResults>;
	getUserAgent(): string;
}
export interface CrawlerRunOptions {
	crawl?: boolean;
	baseUrl: string;
	inputUrls?: string[];
	discoveryPatterns?: string[];
	simulate?: boolean;
	selectors?: string[];
	localOutputDir?: string;
	maxRequestsPerCrawl?: number;
	restartCrawl?: boolean;
	snapshot?: boolean;
	memoryMBytes?: number;
	silentMode?: boolean;
	debug?: boolean;
	chromePath?: string;
	axeSourcePath?: string;
}
declare class Crawler {
	private readonly container;
	constructor(container: Container);
	crawl(crawlerRunOptions: CrawlerRunOptions): Promise<void>;
}
export declare type ScanState = "pass" | "fail" | "runError" | "browserError";
export interface ScanMetadata {
	baseUrl: string;
	basePageTitle?: string;
	userAgent?: string;
}
export interface ScanResult {
	id: string;
	url: string;
	scanState: ScanState;
	issueCount?: number;
	axeResults?: AxeResults;
	error?: string | BrowserError;
}
export declare type SelectorType = "xpath" | "css";
export interface AxeCoreResults extends Omit<axe.AxeResults, "passes" | "violations" | "incomplete" | "inapplicable"> {
	urls: string[];
	passes: AxeScanResultsHashable;
	violations: AxeScanResultsHashable;
	incomplete: AxeScanResultsHashable;
	inapplicable: AxeScanResultsHashable;
}
declare class AxeScanResultsHashable extends HashSet<AxeResult> {
}
export interface AxeResult extends axe.Result {
	urls: string[];
	junctionNode?: AxeNodeResult;
	fingerprint: string;
}
export interface AxeNodeResult extends axe.NodeResult {
	selectors: Selector[];
}
export interface Selector {
	selector: string;
	type: SelectorType;
}
export interface UrlCount {
	total: number;
	failed: number;
	passed: number;
}
export interface ScanResultData {
	baseUrl: string;
	basePageTitle: string;
	scanEngineName: string;
	axeCoreVersion: string;
	browserUserAgent: string;
	urlCount: UrlCount;
	scanStarted: Date;
	scanEnded: Date;
}
declare class AxeResultsReducer {
	private readonly hashGenerator;
	constructor(hashGenerator: HashGenerator);
	reduce(accumulatedAxeResults: AxeCoreResults, currentAxeResults: axe.AxeResults): void;
	private reduceResults;
	private reduceResultsWithoutNodes;
	private getElementFingerprint;
	private getElementSelectors;
	private setUrl;
}
declare class CombinedReportDataConverter {
	convert(axeResults: AxeCoreResults, scanResultData: ScanResultData): CombinedReportParameters;
	private groupFailureDataByRule;
	private getFailureData;
	private getAxeRuleData;
	private getNodeResult;
	private getNodeCheckResults;
	private getAxeRuleDataForResult;
	private getElementSelector;
	private sortFailuresGroups;
	private compareFailureGroup;
	private compareFailureData;
	private compareAxeRuleData;
	private addRuleIdsFromFailures;
	private addRuleIdsFromRuleData;
}
export interface ScanResultReader extends AsyncIterable<ScanResult> {
	getScanMetadata(baseUrl: string): Promise<ScanMetadata>;
	next(): Promise<IteratorResult<ScanResult>>;
}
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
export declare function setupCliContainer(container?: inversify.Container): inversify.Container;
export declare class AICombinedReportDataConverter {
	private readonly combinedReportDataConverter;
	constructor(combinedReportDataConverter: CombinedReportDataConverter);
	convertCrawlingResults(combinedAxeResults: AxeCoreResults, scanResultData: ScanResultData): CombinedReportParameters;
}

export {};
