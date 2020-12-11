"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportGenerator = void 0;
const filenamifyUrl = require("filenamify-url");
const fs = require("fs");
const inversify_1 = require("inversify");
const ioc_types_1 = require("../ioc/ioc-types");
const logger_1 = require("../logger/logger");
const task_config_1 = require("../task-config");
let ReportGenerator = class ReportGenerator {
    constructor(taskConfig, reporterFactoryFunc, logger, fileSystemObj = fs, filenamify = filenamifyUrl) {
        this.taskConfig = taskConfig;
        this.reporterFactoryFunc = reporterFactoryFunc;
        this.logger = logger;
        this.fileSystemObj = fileSystemObj;
        this.filenamify = filenamify;
    }
    generateReport(axeResults) {
        const params = {
            pageTitle: axeResults.pageTitle,
        };
        const reportGenerationTime = new Date();
        const reporter = this.reporterFactoryFunc();
        const htmlReportParams = {
            results: axeResults.results,
            description: `Automated report for accessibility scan of url ${axeResults.results.url} completed at ${reportGenerationTime.toUTCString()}.`,
            serviceName: 'Accessibility Insights Action',
            scanContext: {
                pageTitle: params.pageTitle,
            },
        };
        const outDirectory = this.taskConfig.getReportOutDir();
        const htmlReportContent = reporter.fromAxeResult(htmlReportParams).asHTML();
        const reportFileName = `${outDirectory}/${this.filenamify(axeResults.results.url, {
            replacement: '_',
        })}.html`;
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        if (!this.fileSystemObj.existsSync(outDirectory)) {
            this.logger.logInfo('output directory does not exists.');
            this.logger.logInfo(`creating output directory - ${outDirectory}`);
            // eslint-disable-next-line security/detect-non-literal-fs-filename
            this.fileSystemObj.mkdirSync(outDirectory);
        }
        this.saveHtmlReport(reportFileName, htmlReportContent);
        return reportFileName;
    }
    saveHtmlReport(fileName, content) {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        this.fileSystemObj.writeFileSync(fileName, content);
        this.logger.logInfo(`scan report saved successfully ${fileName}`);
    }
};
ReportGenerator = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(task_config_1.TaskConfig)),
    __param(1, inversify_1.inject(ioc_types_1.iocTypes.ReporterFactory)),
    __param(2, inversify_1.inject(logger_1.Logger)),
    __metadata("design:paramtypes", [task_config_1.TaskConfig, Function, logger_1.Logger, Object, Object])
], ReportGenerator);
exports.ReportGenerator = ReportGenerator;
//# sourceMappingURL=report-generator.js.map