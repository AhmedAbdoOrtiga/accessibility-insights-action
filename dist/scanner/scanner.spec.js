"use strict";
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
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
require("reflect-metadata");
const accessibility_insights_scan_1 = require("accessibility-insights-scan");
const path = require("path");
const typemoq_1 = require("typemoq");
const util = require("util");
const local_file_server_1 = require("../local-file-server");
const logger_1 = require("../logger/logger");
const all_progress_reporter_1 = require("../progress-reporter/all-progress-reporter");
const report_generator_1 = require("../report/report-generator");
const task_config_1 = require("../task-config");
const promise_utils_1 = require("../utils/promise-utils");
const scanner_1 = require("./scanner");
describe(scanner_1.Scanner, () => {
    let scanner;
    let scannerMock;
    let reportGeneratorMock;
    let loggerMock;
    let promiseUtilsMock;
    let taskConfigMock;
    let progressReporterMock;
    let localFileServerMock;
    let processStub;
    let exitMock;
    let axeScanResults;
    const scanUrl = 'localhost';
    const baseUrl = 'base';
    const axeSourcePath = path.resolve(__dirname, 'axe.js');
    const chromePath = 'chrome path';
    beforeEach(() => {
        scannerMock = typemoq_1.Mock.ofType(accessibility_insights_scan_1.AIScanner);
        reportGeneratorMock = typemoq_1.Mock.ofType(report_generator_1.ReportGenerator);
        loggerMock = typemoq_1.Mock.ofType(logger_1.Logger);
        taskConfigMock = typemoq_1.Mock.ofType(task_config_1.TaskConfig);
        progressReporterMock = typemoq_1.Mock.ofType(all_progress_reporter_1.AllProgressReporter);
        promiseUtilsMock = typemoq_1.Mock.ofType(promise_utils_1.PromiseUtils);
        localFileServerMock = typemoq_1.Mock.ofType(local_file_server_1.LocalFileServer);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        exitMock = typemoq_1.Mock.ofInstance((code) => {
            /* noop */
        });
        axeScanResults = {
            results: {
                violations: [
                    {
                        id: 'color-contrast',
                        nodes: [{ html: 'html' }],
                    },
                ],
            },
        };
        processStub = {
            exit: exitMock.object,
        };
        scanner = new scanner_1.Scanner(loggerMock.object, scannerMock.object, reportGeneratorMock.object, taskConfigMock.object, progressReporterMock.object, localFileServerMock.object, promiseUtilsMock.object, processStub);
        taskConfigMock
            .setup((tm) => tm.getScanUrlRelativePath())
            .returns(() => scanUrl)
            .verifiable();
        taskConfigMock
            .setup((tcm) => tcm.getChromePath())
            .returns(() => chromePath)
            .verifiable(typemoq_1.Times.once());
        localFileServerMock
            .setup((lfs) => __awaiter(void 0, void 0, void 0, function* () { return lfs.start(); }))
            .returns(() => Promise.resolve(baseUrl))
            .verifiable();
        localFileServerMock.setup((lfs) => lfs.stop()).verifiable();
    });
    it('should create instance', () => {
        expect(scanner).not.toBeNull();
    });
    describe('scan', () => {
        it('should log info and create/complete check run', () => __awaiter(void 0, void 0, void 0, function* () {
            scannerMock
                .setup((sm) => sm.scan(scanUrl, chromePath, axeSourcePath))
                .returns(() => __awaiter(void 0, void 0, void 0, function* () {
                return Promise.resolve(axeScanResults);
            }))
                .verifiable(typemoq_1.Times.once());
            reportGeneratorMock.setup((rgm) => rgm.generateReport(axeScanResults)).verifiable(typemoq_1.Times.once());
            loggerMock.setup((lm) => lm.logInfo(`Starting accessibility scanning of URL ${scanUrl}.`)).verifiable(typemoq_1.Times.once());
            loggerMock.setup((lm) => lm.logInfo(`Accessibility scanning of URL ${scanUrl} completed.`)).verifiable(typemoq_1.Times.once());
            progressReporterMock.setup((p) => p.start()).verifiable(typemoq_1.Times.once());
            progressReporterMock.setup((p) => p.completeRun(axeScanResults)).verifiable(typemoq_1.Times.once());
            setupWaitForPromisetoReturnOriginalPromise();
            yield scanner.scan();
            verifyMocks();
        }));
        it('should trackException on error', () => __awaiter(void 0, void 0, void 0, function* () {
            const errorMessage = 'some err';
            const error = new Error(errorMessage);
            taskConfigMock.reset();
            taskConfigMock
                .setup((tm) => tm.getScanUrlRelativePath())
                .callback(() => {
                throw error;
            });
            scannerMock.setup((sm) => sm.scan(scanUrl, undefined, axeSourcePath)).verifiable(typemoq_1.Times.never());
            loggerMock.setup((lm) => lm.logInfo(`Starting accessibility scanning of URL undefined.`)).verifiable(typemoq_1.Times.never());
            loggerMock
                .setup((lm) => lm.trackExceptionAny(error, `An error occurred while scanning website page undefined.`))
                .verifiable(typemoq_1.Times.once());
            loggerMock.setup((lm) => lm.logInfo(`Accessibility scanning of URL undefined completed.`)).verifiable(typemoq_1.Times.once());
            progressReporterMock.setup((p) => p.start()).verifiable(typemoq_1.Times.once());
            progressReporterMock.setup((p) => p.completeRun(typemoq_1.It.isAny())).verifiable(typemoq_1.Times.never());
            progressReporterMock.setup((p) => p.failRun(util.inspect(error))).verifiable(typemoq_1.Times.once());
            setupWaitForPromisetoReturnOriginalPromise();
            yield scanner.scan();
            verifyMocks();
        }));
        it('should return timeout promise', () => __awaiter(void 0, void 0, void 0, function* () {
            const errorMessage = `Unable to scan before timeout`;
            scannerMock.setup((sm) => sm.scan(scanUrl, chromePath, axeSourcePath)).verifiable(typemoq_1.Times.once());
            loggerMock.setup((lm) => lm.logError(errorMessage)).verifiable(typemoq_1.Times.once());
            exitMock.setup((em) => em(1)).verifiable(typemoq_1.Times.once());
            setupWaitForPromiseToReturnTimeoutPromise();
            yield scanner.scan();
            verifyMocks();
        }));
        function setupWaitForPromisetoReturnOriginalPromise() {
            promiseUtilsMock
                .setup((s) => s.waitFor(typemoq_1.It.isAny(), 90000, typemoq_1.It.isAny()))
                // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/require-await
                .returns((scanPromiseObj, timeout, timeoutCb) => __awaiter(this, void 0, void 0, function* () {
                return scanPromiseObj;
            }))
                .verifiable();
        }
        function setupWaitForPromiseToReturnTimeoutPromise() {
            promiseUtilsMock
                .setup((s) => s.waitFor(typemoq_1.It.isAny(), 90000, typemoq_1.It.isAny()))
                // eslint-disable-next-line @typescript-eslint/require-await
                .returns((scanPromiseObj, timeout, timeoutCb) => __awaiter(this, void 0, void 0, function* () {
                return timeoutCb();
            }))
                .verifiable();
        }
    });
    function verifyMocks() {
        scannerMock.verifyAll();
        reportGeneratorMock.verifyAll();
        taskConfigMock.verifyAll();
        progressReporterMock.verifyAll();
        promiseUtilsMock.verifyAll();
        localFileServerMock.verifyAll();
        loggerMock.verifyAll();
    }
});
//# sourceMappingURL=scanner.spec.js.map