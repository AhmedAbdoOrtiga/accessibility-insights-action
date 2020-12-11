"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupIocContainer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const github = require("@actions/github");
const rest_1 = require("@octokit/rest");
const accessibility_insights_report_1 = require("accessibility-insights-report");
const express = require("express");
const getPort = require("get-port");
const inversify = require("inversify");
const serveStatic = require("serve-static");
const console_logger_client_1 = require("../logger/console-logger-client");
const logger_1 = require("../logger/logger");
const scanner_1 = require("../scanner/scanner");
const task_config_1 = require("../task-config");
const ioc_types_1 = require("./ioc-types");
const crawler_1 = require("../crawler/crawler");
const accessibility_insights_scan_local_1 = require("accessibility-insights-scan-local");
function setupIocContainer() {
    const container = new inversify.Container({ autoBindInjectable: true });
    container.bind(accessibility_insights_scan_local_1.AICrawler).toConstantValue(new accessibility_insights_scan_local_1.AICrawler(container));
    container.bind(scanner_1.Scanner).toSelf().inSingletonScope();
    container.bind(crawler_1.Crawler).toSelf().inSingletonScope();
    container.bind(ioc_types_1.iocTypes.Console).toConstantValue(console);
    container.bind(ioc_types_1.iocTypes.Process).toConstantValue(process);
    container.bind(ioc_types_1.iocTypes.GetPort).toConstantValue(getPort);
    container.bind(ioc_types_1.iocTypes.Express).toConstantValue(express);
    container.bind(ioc_types_1.iocTypes.ServeStatic).toConstantValue(serveStatic);
    container.bind(ioc_types_1.iocTypes.ReporterFactory).toConstantValue(accessibility_insights_report_1.reporterFactory);
    container.bind(ioc_types_1.iocTypes.Github).toConstantValue(github);
    container
        .bind(rest_1.Octokit)
        .toDynamicValue((context) => {
        const taskConfig = context.container.get(task_config_1.TaskConfig);
        return new rest_1.Octokit({ auth: taskConfig.getToken() });
    })
        .inSingletonScope();
    container
        .bind(logger_1.Logger)
        .toDynamicValue((context) => {
        const consoleLoggerClient = context.container.get(console_logger_client_1.ConsoleLoggerClient);
        return new logger_1.Logger([consoleLoggerClient], context.container.get(ioc_types_1.iocTypes.Process));
    })
        .inSingletonScope();
    return container;
}
exports.setupIocContainer = setupIocContainer;
//# sourceMappingURL=setup-ioc-container.js.map