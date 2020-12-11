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
var PullRequestCommentCreator_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullRequestCommentCreator = void 0;
const rest_1 = require("@octokit/rest");
const inversify_1 = require("inversify");
const lodash_1 = require("lodash");
const ioc_types_1 = require("../../ioc/ioc-types");
const logger_1 = require("../../logger/logger");
const axe_markdown_convertor_1 = require("../../mark-down/axe-markdown-convertor");
const markdown_formatter_1 = require("../../utils/markdown-formatter");
let PullRequestCommentCreator = PullRequestCommentCreator_1 = class PullRequestCommentCreator {
    constructor(axeMarkdownConvertor, octokit, githubObj, logger) {
        this.axeMarkdownConvertor = axeMarkdownConvertor;
        this.octokit = octokit;
        this.githubObj = githubObj;
        this.logger = logger;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            // We don't do anything for pull request flow
        });
    }
    completeRun(axeScanResults) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isSupported()) {
                return;
            }
            const pullRequest = this.githubObj.context.payload.pull_request;
            const existingComment = yield this.findComment(pullRequest.number);
            if (lodash_1.isNil(existingComment)) {
                this.logMessage('Creating new comment');
                yield this.octokit.issues.createComment({
                    owner: this.githubObj.context.repo.owner,
                    repo: this.githubObj.context.repo.repo,
                    body: this.axeMarkdownConvertor.convert(axeScanResults),
                    issue_number: pullRequest.number,
                });
            }
            else {
                this.logMessage('Updating existing comment');
                yield this.octokit.issues.updateComment({
                    owner: this.githubObj.context.repo.owner,
                    repo: this.githubObj.context.repo.repo,
                    body: this.axeMarkdownConvertor.convert(axeScanResults),
                    comment_id: existingComment.id,
                });
            }
        });
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    failRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isSupported()) {
                return;
            }
            throw message;
        });
    }
    isSupported() {
        return this.githubObj.context.eventName === 'pull_request';
    }
    findComment(pullRequestNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentsResponse = yield this.octokit.issues.listComments({
                issue_number: pullRequestNumber,
                owner: this.githubObj.context.repo.owner,
                repo: this.githubObj.context.repo.repo,
            });
            const comments = commentsResponse.data;
            return comments.find((c) => !lodash_1.isEmpty(c.body) && !lodash_1.isEmpty(c.user) && c.user.login === 'github-actions[bot]' && c.body.includes(markdown_formatter_1.productTitle()));
        });
    }
    logMessage(message) {
        this.logger.logInfo(`[${PullRequestCommentCreator_1.name}] ${message}`);
    }
};
PullRequestCommentCreator = PullRequestCommentCreator_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(axe_markdown_convertor_1.AxeMarkdownConvertor)),
    __param(1, inversify_1.inject(rest_1.Octokit)),
    __param(2, inversify_1.inject(ioc_types_1.iocTypes.Github)),
    __param(3, inversify_1.inject(logger_1.Logger)),
    __metadata("design:paramtypes", [axe_markdown_convertor_1.AxeMarkdownConvertor,
        rest_1.Octokit, Object, logger_1.Logger])
], PullRequestCommentCreator);
exports.PullRequestCommentCreator = PullRequestCommentCreator;
//# sourceMappingURL=pull-request-comment-creator.js.map