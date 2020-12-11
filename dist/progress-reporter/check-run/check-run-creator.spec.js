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
const typemoq_1 = require("typemoq");
const mark_down_strings_1 = require("../../content/mark-down-strings");
const strings_1 = require("../../content/strings");
const logger_1 = require("../../logger/logger");
const axe_markdown_convertor_1 = require("../../mark-down/axe-markdown-convertor");
const check_run_creator_1 = require("./check-run-creator");
describe(check_run_creator_1.CheckRunCreator, () => {
    let octokitStub;
    let createCheckMock;
    let updateCheckMock;
    let checkRunCreator;
    let githubStub;
    let checkStub;
    let convertorMock;
    let loggerMock;
    let sha;
    const owner = 'owner';
    const repo = 'repo';
    const a11yCheckName = 'Accessibility Checks';
    beforeEach(() => {
        sha = 'sha';
        convertorMock = typemoq_1.Mock.ofType(axe_markdown_convertor_1.AxeMarkdownConvertor);
        loggerMock = typemoq_1.Mock.ofType(logger_1.Logger);
        createCheckMock = typemoq_1.Mock.ofInstance(() => {
            return null;
        });
        updateCheckMock = typemoq_1.Mock.ofInstance(() => {
            return null;
        });
        octokitStub = {
            checks: {
                create: createCheckMock.object,
                update: updateCheckMock.object,
            },
        };
        githubStub = {
            context: {
                repo: {
                    owner,
                    repo,
                },
                sha,
                payload: {},
            },
        };
        checkStub = {
            id: 1234,
        };
        checkRunCreator = new check_run_creator_1.CheckRunCreator(convertorMock.object, octokitStub, githubStub, loggerMock.object);
    });
    it('should create instance', () => {
        expect(checkRunCreator).not.toBeNull();
    });
    it('createRun', () => __awaiter(void 0, void 0, void 0, function* () {
        setupMocksForCreateCheck();
        yield checkRunCreator.start();
        verifyMocks();
    }));
    it('createRun for pull request', () => __awaiter(void 0, void 0, void 0, function* () {
        sha = 'pull request sha';
        githubStub.context.payload.pull_request = {
            number: 1,
            head: {
                sha: sha,
            },
        };
        setupMocksForCreateCheck();
        yield checkRunCreator.start();
        verifyMocks();
    }));
    it('failRun', () => __awaiter(void 0, void 0, void 0, function* () {
        const stubErrorMarkdown = 'something went wrong';
        const expectedParam = {
            owner: owner,
            repo: repo,
            name: a11yCheckName,
            check_run_id: checkStub.id,
            status: 'completed',
            conclusion: 'failure',
            output: {
                title: strings_1.checkRunDetailsTitle,
                summary: mark_down_strings_1.disclaimerText,
                annotations: [],
                text: stubErrorMarkdown,
            },
        };
        setupMocksForCreateCheck();
        convertorMock
            .setup((cm) => cm.getErrorMarkdown())
            .returns(() => stubErrorMarkdown)
            .verifiable(typemoq_1.Times.once());
        updateCheckMock.setup((um) => um(expectedParam)).verifiable(typemoq_1.Times.once());
        yield checkRunCreator.start();
        yield checkRunCreator.failRun();
        verifyMocks();
    }));
    it('completeRun', () => __awaiter(void 0, void 0, void 0, function* () {
        const markdown = 'markdown';
        const axeScanResults = {
            results: {
                violations: [
                    {
                        id: 'color-contrast',
                        nodes: [{ html: 'html' }],
                    },
                ],
            },
        };
        const expectedUpdateParam = getExpectedUpdateParam(markdown, axeScanResults);
        setupMocksForCreateCheck();
        convertorMock
            .setup((cm) => cm.convert(axeScanResults))
            .returns(() => markdown)
            .verifiable(typemoq_1.Times.once());
        updateCheckMock.setup((um) => um(expectedUpdateParam)).verifiable(typemoq_1.Times.once());
        yield checkRunCreator.start();
        yield checkRunCreator.completeRun(axeScanResults);
        verifyMocks();
    }));
    it('completeRun with no failed rules', () => __awaiter(void 0, void 0, void 0, function* () {
        const markdown = 'markdown';
        const axeScanResults = {
            results: {
                violations: [],
            },
        };
        const expectedUpdateParam = getExpectedUpdateParam(markdown, axeScanResults);
        setupMocksForCreateCheck();
        convertorMock
            .setup((cm) => cm.convert(axeScanResults))
            .returns(() => markdown)
            .verifiable(typemoq_1.Times.once());
        updateCheckMock.setup((um) => um(expectedUpdateParam)).verifiable(typemoq_1.Times.once());
        yield checkRunCreator.start();
        yield checkRunCreator.completeRun(axeScanResults);
        verifyMocks();
    }));
    function getExpectedUpdateParam(markdown, axeScanResults) {
        return {
            owner: owner,
            repo: repo,
            check_run_id: checkStub.id,
            name: a11yCheckName,
            status: 'completed',
            conclusion: axeScanResults.results.violations.length === 0 ? 'success' : 'failure',
            output: {
                title: strings_1.checkRunDetailsTitle,
                summary: mark_down_strings_1.disclaimerText,
                text: markdown,
            },
        };
    }
    function setupMocksForCreateCheck() {
        const expectedParam = {
            owner: owner,
            repo: repo,
            name: a11yCheckName,
            status: 'in_progress',
            head_sha: sha,
        };
        const response = { data: checkStub };
        createCheckMock
            .setup((cm) => cm(expectedParam))
            .returns(() => __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(response);
        }))
            .verifiable(typemoq_1.Times.once());
    }
    function verifyMocks() {
        convertorMock.verifyAll();
        createCheckMock.verifyAll();
        updateCheckMock.verifyAll();
    }
});
//# sourceMappingURL=check-run-creator.spec.js.map