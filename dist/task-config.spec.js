"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
require("reflect-metadata");
const process = require("process");
const typemoq_1 = require("typemoq");
const task_config_1 = require("./task-config");
describe(task_config_1.TaskConfig, () => {
    let processStub;
    let actionCoreMock;
    let taskConfig;
    const runId = 789;
    const workspace = 'some-workspace';
    beforeEach(() => {
        processStub = {
            env: {
                GITHUB_WORKSPACE: workspace,
                GITHUB_RUN_ID: `${runId}`,
            },
        };
        actionCoreMock = typemoq_1.Mock.ofType();
        taskConfig = new task_config_1.TaskConfig(processStub, actionCoreMock.object);
    });
    it('getReportOutDir', () => {
        const outputDir = 'output-dir';
        actionCoreMock
            .setup((am) => am.getInput('output-dir'))
            .returns(() => outputDir)
            .verifiable(typemoq_1.Times.once());
        const dir = taskConfig.getReportOutDir();
        expect(dir).toBe(outputDir);
    });
    it('getSiteDir', () => {
        const siteDir = 'site';
        actionCoreMock
            .setup((am) => am.getInput('site-dir'))
            .returns(() => siteDir)
            .verifiable(typemoq_1.Times.once());
        const dir = taskConfig.getSiteDir();
        expect(dir).toBe(siteDir);
        actionCoreMock.verifyAll();
    });
    it('getScanUrlRelativePath', () => {
        const relativePath = 'path';
        actionCoreMock
            .setup((am) => am.getInput('scan-url-relative-path'))
            .returns(() => relativePath)
            .verifiable(typemoq_1.Times.once());
        const res = taskConfig.getScanUrlRelativePath();
        expect(res).toBe(relativePath);
        actionCoreMock.verifyAll();
    });
    it('getToken', () => {
        const token = 'repo-token';
        actionCoreMock
            .setup((am) => am.getInput('repo-token'))
            .returns(() => token)
            .verifiable(typemoq_1.Times.once());
        const res = taskConfig.getToken();
        expect(res).toBe(token);
        actionCoreMock.verifyAll();
    });
    it('getChromePath', () => {
        const chromePath = 'chrome-path';
        actionCoreMock
            .setup((am) => am.getInput('chrome-path'))
            .returns(() => chromePath)
            .verifiable(typemoq_1.Times.once());
        const res = taskConfig.getChromePath();
        expect(res).toBe(chromePath);
        actionCoreMock.verifyAll();
    });
    it('getChromePath returns empty', () => {
        const chromePath = 'some path';
        process.env.CHROME_BIN = chromePath;
        actionCoreMock
            .setup((am) => am.getInput('chrome-path'))
            .returns(() => '')
            .verifiable(typemoq_1.Times.once());
        const res = taskConfig.getChromePath();
        expect(res).toBe(chromePath);
        actionCoreMock.verifyAll();
    });
    it('getRunId', () => {
        const res = taskConfig.getRunId();
        expect(res).toBe(runId);
        actionCoreMock.verifyAll();
    });
});
//# sourceMappingURL=task-config.spec.js.map