"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
require("reflect-metadata");
const filenamifyUrl = require("filenamify-url");
const fs = require("fs");
const MockDate = require("mockdate");
const typemoq_1 = require("typemoq");
const report_generator_1 = require("./report-generator");
/* eslint-disable security/detect-non-literal-fs-filename */
describe('ReportGenerator', () => {
    let reportGenerator;
    const outputDir = 'outputDir';
    const scanUrl = 'https://www.bla.com';
    const htmlReportString = 'some html';
    let reporterMock;
    let htmlReport;
    let axeResults;
    let axeScanResults;
    let reportGenerationTime;
    let loggerMock;
    let taskConfigMock;
    let fsMock;
    const fileName = `${outputDir}/${filenamifyUrl(scanUrl, {
        replacement: '_',
    })}.html`;
    beforeEach(() => {
        loggerMock = typemoq_1.Mock.ofType();
        taskConfigMock = typemoq_1.Mock.ofType();
        reporterMock = typemoq_1.Mock.ofType();
        fsMock = typemoq_1.Mock.ofInstance(fs, typemoq_1.MockBehavior.Strict);
        const reporterFactory = () => reporterMock.object;
        reportGenerator = new report_generator_1.ReportGenerator(taskConfigMock.object, reporterFactory, loggerMock.object, fsMock.object);
        htmlReport = {
            asHTML: () => htmlReportString,
        };
        axeResults = {
            url: scanUrl,
        };
        axeScanResults = { results: axeResults, pageTitle: 'page title', browserSpec: 'browser version' };
        reportGenerationTime = new Date(2019, 2, 3);
        MockDate.set(reportGenerationTime);
        taskConfigMock
            .setup((tcm) => tcm.getReportOutDir())
            .returns(() => outputDir)
            .verifiable(typemoq_1.Times.once());
    });
    test.each([true, false])('generate report - %o', (directoryExists) => {
        const params = {
            pageTitle: axeScanResults.pageTitle,
        };
        const htmlReportParams = {
            results: axeScanResults.results,
            description: `Automated report for accessibility scan of url ${axeScanResults.results.url} completed at ${reportGenerationTime.toUTCString()}.`,
            serviceName: 'Accessibility Insights Action',
            scanContext: {
                pageTitle: params.pageTitle,
            },
        };
        reporterMock
            .setup((rm) => rm.fromAxeResult(htmlReportParams))
            .returns(() => htmlReport)
            .verifiable(typemoq_1.Times.once());
        fsMock
            .setup((fsm) => fsm.existsSync(outputDir))
            .returns(() => directoryExists)
            .verifiable(typemoq_1.Times.once());
        loggerMock.setup((lm) => lm.logInfo(`scan report saved successfully ${fileName}`)).verifiable(typemoq_1.Times.once());
        if (!directoryExists) {
            fsMock.setup((fsm) => fsm.mkdirSync(outputDir)).verifiable(typemoq_1.Times.once());
            loggerMock.setup((lm) => lm.logInfo('output directory does not exists.')).verifiable(typemoq_1.Times.once());
            loggerMock.setup((lm) => lm.logInfo(`creating output directory - ${outputDir}`)).verifiable(typemoq_1.Times.once());
        }
        fsMock.setup((fsm) => fsm.writeFileSync(fileName, htmlReportString)).verifiable(typemoq_1.Times.once());
        reportGenerator.generateReport(axeScanResults);
        verifyMocks();
    });
    function verifyMocks() {
        reporterMock.verifyAll();
        loggerMock.verifyAll();
        taskConfigMock.verifyAll();
        fsMock.verifyAll();
    }
});
//# sourceMappingURL=report-generator.spec.js.map