"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
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
require("reflect-metadata");
const typemoq_1 = require("typemoq");
const logger_1 = require("../../logger/logger");
const axe_markdown_convertor_1 = require("../../mark-down/axe-markdown-convertor");
const markdown_formatter_1 = require("../../utils/markdown-formatter");
const pull_request_comment_creator_1 = require("./pull-request-comment-creator");
describe(pull_request_comment_creator_1.PullRequestCommentCreator, () => {
    let testSubject;
    let axeMarkdownConvertorMock;
    let createCommentMock;
    let updateCommentMock;
    let listCommentsMock;
    let loggerMock;
    let octokitStub;
    let githubStub;
    const pullRequestNumber = 362;
    const repoName = 'test repo';
    const ownerName = 'test owner';
    const markdownContent = 'test markdown content';
    const axeScanResults = 'test axe scan results';
    beforeEach(() => {
        axeMarkdownConvertorMock = typemoq_1.Mock.ofType(axe_markdown_convertor_1.AxeMarkdownConvertor);
        createCommentMock = typemoq_1.Mock.ofInstance((() => {
            /* noop */
        }), typemoq_1.MockBehavior.Strict);
        listCommentsMock = typemoq_1.Mock.ofInstance((() => {
            /* noop */
        }), typemoq_1.MockBehavior.Strict);
        updateCommentMock = typemoq_1.Mock.ofInstance((() => {
            /* noop */
        }), typemoq_1.MockBehavior.Strict);
        loggerMock = typemoq_1.Mock.ofType(logger_1.Logger);
        octokitStub = {
            issues: {
                createComment: createCommentMock.object,
                listComments: listCommentsMock.object,
                updateComment: updateCommentMock.object,
            },
        };
        githubStub = {
            context: {
                payload: {
                    pull_request: {
                        number: pullRequestNumber,
                    },
                },
                repo: {
                    owner: ownerName,
                    repo: repoName,
                },
                eventName: 'pull_request',
            },
        };
        axeMarkdownConvertorMock.setup((a) => a.convert(axeScanResults)).returns(() => markdownContent);
        testSubject = new pull_request_comment_creator_1.PullRequestCommentCreator(axeMarkdownConvertorMock.object, octokitStub, githubStub, loggerMock.object);
    });
    describe('start', () => {
        it('does nothing', () => __awaiter(void 0, void 0, void 0, function* () {
            yield expect(testSubject.start()).resolves.toBeUndefined();
        }));
    });
    describe('failRun', () => {
        it('throws error', () => __awaiter(void 0, void 0, void 0, function* () {
            const errorMessage = 'some error message';
            yield expect(testSubject.failRun(errorMessage)).rejects.toBe(errorMessage);
        }));
        it('does nothing if not supported', () => __awaiter(void 0, void 0, void 0, function* () {
            githubStub.context.eventName = 'push';
            const errorMessage = 'some error message';
            yield testSubject.failRun(errorMessage);
        }));
    });
    describe('completeRun', () => {
        it('does nothing if not supported', () => __awaiter(void 0, void 0, void 0, function* () {
            githubStub.context.eventName = 'push';
            yield testSubject.completeRun(axeScanResults);
        }));
        test.each([
            {
                values: [],
            },
            {
                values: [
                    {
                        id: 12,
                        body: 'some content',
                    },
                    {
                        id: 13,
                        body: `existing action comment ${markdown_formatter_1.productTitle()} not created by github actions bot user`,
                        user: {
                            login: 'unknown user',
                        },
                    },
                    {
                        id: 14,
                        body: `existing action comment without user context ${markdown_formatter_1.productTitle()}`,
                    },
                ],
            },
        ])('creates new comment, when existing comments - %j', (testCase) => __awaiter(void 0, void 0, void 0, function* () {
            const response = {
                data: testCase.values,
                headers: undefined,
                status: undefined,
            };
            listCommentsMock
                .setup((l) => l({ issue_number: pullRequestNumber, owner: ownerName, repo: repoName }))
                .returns(() => Promise.resolve(response))
                .verifiable(typemoq_1.Times.once());
            createCommentMock
                .setup((c) => c({
                owner: ownerName,
                repo: repoName,
                body: markdownContent,
                issue_number: pullRequestNumber,
            }))
                .returns(() => Promise.resolve({}))
                .verifiable(typemoq_1.Times.once());
            yield testSubject.completeRun(axeScanResults);
            verifyMocks();
        }));
        it('update existing comment', () => __awaiter(void 0, void 0, void 0, function* () {
            const existingActionComment = {
                id: 34,
                body: `existing action comment ${markdown_formatter_1.productTitle()} with previous data`,
                user: {
                    login: 'github-actions[bot]',
                },
            };
            const allExistingComments = [
                {
                    id: 12,
                    body: `some content with Accessibility Insights Action text`,
                },
                existingActionComment,
                Object.assign(Object.assign({}, existingActionComment), { id: existingActionComment.id + 1 }),
            ];
            const response = {
                data: allExistingComments,
                headers: undefined,
                status: undefined,
            };
            listCommentsMock
                .setup((l) => l({ issue_number: pullRequestNumber, owner: ownerName, repo: repoName }))
                .returns(() => Promise.resolve(response))
                .verifiable(typemoq_1.Times.once());
            updateCommentMock
                .setup((u) => u({
                owner: ownerName,
                repo: repoName,
                body: markdownContent,
                comment_id: existingActionComment.id,
            }))
                .returns(() => Promise.resolve({}))
                .verifiable(typemoq_1.Times.once());
            yield testSubject.completeRun(axeScanResults);
            verifyMocks();
        }));
    });
    function verifyMocks() {
        createCommentMock.verifyAll();
        listCommentsMock.verifyAll();
        updateCommentMock.verifyAll();
        axeMarkdownConvertorMock.verifyAll();
        loggerMock.verifyAll();
    }
});
//# sourceMappingURL=pull-request-comment-creator.spec.js.map