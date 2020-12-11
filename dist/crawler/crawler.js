"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crawler = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const accessibility_insights_scan_local_1 = require("accessibility-insights-scan-local");
const inversify_1 = require("inversify");
const path = require("path");
const url = require("url");
const util = require("util");
const ioc_types_1 = require("../ioc/ioc-types");
const local_file_server_1 = require("../local-file-server");
const logger_1 = require("../logger/logger");
const all_progress_reporter_1 = require("../progress-reporter/all-progress-reporter");
const report_generator_1 = require("../report/report-generator");
const task_config_1 = require("../task-config");
const promise_utils_1 = require("../utils/promise-utils");
let Crawler = class Crawler {
    constructor(logger, scanner, reportGenerator, taskConfig, allProgressReporter, fileServer, promiseUtils, currentProcess, crawler) {
        this.logger = logger;
        this.scanner = scanner;
        this.reportGenerator = reportGenerator;
        this.taskConfig = taskConfig;
        this.allProgressReporter = allProgressReporter;
        this.fileServer = fileServer;
        this.promiseUtils = promiseUtils;
        this.currentProcess = currentProcess;
        this.crawler = crawler;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            let scanUrl;
            try {
                yield this.allProgressReporter.start();
                const baseUrl = yield this.fileServer.start();
                scanUrl = url.resolve(baseUrl, this.taskConfig.getScanUrlRelativePath());
                this.logger.logInfo(`Starting accessibility scanning of URL ${scanUrl}.`);
                const chromePath = this.taskConfig.getChromePath();
                const axeCoreSourcePath = path.resolve(__dirname, 'axe.js');
                const crawlerRunOptions = {
                    baseUrl: scanUrl,
                };
                const axeScanResults = yield this.scanner.scan(scanUrl, chromePath, axeCoreSourcePath);
                this.reportGenerator.generateReport(axeScanResults);
                yield this.crawler.crawl(crawlerRunOptions);
                yield this.allProgressReporter.completeRun(axeScanResults);
            }
            catch (error) {
                this.logger.trackExceptionAny(error, `An error occurred while scanning website page ${scanUrl}.`);
                yield this.allProgressReporter.failRun(util.inspect(error));
            }
            finally {
                this.fileServer.stop();
                this.logger.logInfo(`Accessibility scanning of URL ${scanUrl} completed.`);
            }
        });
    }
};
Crawler = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(logger_1.Logger)),
    __param(1, inversify_1.inject(accessibility_insights_scan_local_1.AIScanner)),
    __param(2, inversify_1.inject(report_generator_1.ReportGenerator)),
    __param(3, inversify_1.inject(task_config_1.TaskConfig)),
    __param(4, inversify_1.inject(all_progress_reporter_1.AllProgressReporter)),
    __param(5, inversify_1.inject(local_file_server_1.LocalFileServer)),
    __param(6, inversify_1.inject(promise_utils_1.PromiseUtils)),
    __param(7, inversify_1.inject(ioc_types_1.iocTypes.Process)),
    __param(8, inversify_1.inject(accessibility_insights_scan_local_1.AICrawler)),
    __metadata("design:paramtypes", [logger_1.Logger,
        accessibility_insights_scan_local_1.AIScanner,
        report_generator_1.ReportGenerator,
        task_config_1.TaskConfig,
        all_progress_reporter_1.AllProgressReporter,
        local_file_server_1.LocalFileServer,
        promise_utils_1.PromiseUtils, Object, accessibility_insights_scan_local_1.AICrawler])
], Crawler);
exports.Crawler = Crawler;
//# sourceMappingURL=crawler.js.map