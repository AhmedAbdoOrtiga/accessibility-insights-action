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
const all_progress_reporter_1 = require("./all-progress-reporter");
const check_run_creator_1 = require("./check-run/check-run-creator");
const pull_request_comment_creator_1 = require("./pull-request/pull-request-comment-creator");
describe(all_progress_reporter_1.AllProgressReporter, () => {
    let testSubject;
    let pullRequestCommentCreator;
    let checkRunCreatorMock;
    beforeEach(() => {
        checkRunCreatorMock = typemoq_1.Mock.ofType(check_run_creator_1.CheckRunCreator);
        pullRequestCommentCreator = typemoq_1.Mock.ofType(pull_request_comment_creator_1.PullRequestCommentCreator);
        testSubject = new all_progress_reporter_1.AllProgressReporter(pullRequestCommentCreator.object, checkRunCreatorMock.object);
    });
    it('start should invoke all reporters', () => __awaiter(void 0, void 0, void 0, function* () {
        executeOnReporter((reporter) => {
            reporter
                .setup((p) => p.start())
                .returns(() => Promise.resolve())
                .verifiable(typemoq_1.Times.once());
        });
        yield testSubject.start();
    }));
    it('complete should invoke all reporters', () => __awaiter(void 0, void 0, void 0, function* () {
        const axeResults = 'axe results';
        executeOnReporter((reporter) => {
            reporter
                .setup((p) => p.completeRun(axeResults))
                .returns(() => Promise.resolve())
                .verifiable(typemoq_1.Times.once());
        });
        yield testSubject.completeRun(axeResults);
    }));
    it('failRun should invoke all reporters', () => __awaiter(void 0, void 0, void 0, function* () {
        const error = 'scan error';
        executeOnReporter((reporter) => {
            reporter
                .setup((p) => p.failRun(error))
                .returns(() => Promise.resolve())
                .verifiable(typemoq_1.Times.once());
        });
        yield testSubject.failRun(error);
    }));
    afterEach(() => {
        checkRunCreatorMock.verifyAll();
        pullRequestCommentCreator.verifyAll();
    });
    function executeOnReporter(callback) {
        callback(checkRunCreatorMock);
        callback(pullRequestCommentCreator);
    }
});
//# sourceMappingURL=all-progress-reporter.spec.js.map