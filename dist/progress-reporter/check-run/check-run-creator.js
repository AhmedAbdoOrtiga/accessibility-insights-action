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
exports.CheckRunCreator = void 0;
const rest_1 = require("@octokit/rest");
const inversify_1 = require("inversify");
const lodash_1 = require("lodash");
const mark_down_strings_1 = require("../../content/mark-down-strings");
const strings_1 = require("../../content/strings");
const ioc_types_1 = require("../../ioc/ioc-types");
const logger_1 = require("../../logger/logger");
const axe_markdown_convertor_1 = require("../../mark-down/axe-markdown-convertor");
let CheckRunCreator = class CheckRunCreator {
    constructor(axeMarkdownConvertor, octokit, githubObj, logger) {
        this.axeMarkdownConvertor = axeMarkdownConvertor;
        this.octokit = octokit;
        this.githubObj = githubObj;
        this.logger = logger;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logMessage('Creating check run with status as in_progress');
            this.a11yCheck = (yield this.octokit.checks.create({
                owner: this.githubObj.context.repo.owner,
                repo: this.githubObj.context.repo.repo,
                name: strings_1.checkRunName,
                status: 'in_progress',
                head_sha: lodash_1.isNil(this.githubObj.context.payload.pull_request)
                    ? this.githubObj.context.sha
                    : this.githubObj.context.payload.pull_request.head.sha,
            })).data;
        });
    }
    completeRun(axeScanResults) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logMessage('Updating check run with status as completed');
            yield this.octokit.checks.update({
                owner: this.githubObj.context.repo.owner,
                repo: this.githubObj.context.repo.repo,
                check_run_id: this.a11yCheck.id,
                name: strings_1.checkRunName,
                status: 'completed',
                conclusion: axeScanResults.results.violations.length === 0 ? 'success' : 'failure',
                output: this.getScanOutput(axeScanResults),
            });
        });
    }
    failRun() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logMessage('Updating check run with status as failed');
            yield this.octokit.checks.update({
                owner: this.githubObj.context.repo.owner,
                repo: this.githubObj.context.repo.repo,
                check_run_id: this.a11yCheck.id,
                name: strings_1.checkRunName,
                status: 'completed',
                conclusion: 'failure',
                output: {
                    title: strings_1.checkRunDetailsTitle,
                    summary: mark_down_strings_1.disclaimerText,
                    annotations: [],
                    text: this.axeMarkdownConvertor.getErrorMarkdown(),
                },
            });
        });
    }
    logMessage(message) {
        this.logger.logInfo(`[CheckRunCreator] ${message}`);
    }
    getScanOutput(axeScanResults) {
        return {
            title: strings_1.checkRunDetailsTitle,
            summary: mark_down_strings_1.disclaimerText,
            text: this.axeMarkdownConvertor.convert(axeScanResults),
        };
    }
};
CheckRunCreator = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(axe_markdown_convertor_1.AxeMarkdownConvertor)),
    __param(1, inversify_1.inject(rest_1.Octokit)),
    __param(2, inversify_1.inject(ioc_types_1.iocTypes.Github)),
    __param(3, inversify_1.inject(logger_1.Logger)),
    __metadata("design:paramtypes", [axe_markdown_convertor_1.AxeMarkdownConvertor,
        rest_1.Octokit, Object, logger_1.Logger])
], CheckRunCreator);
exports.CheckRunCreator = CheckRunCreator;
//# sourceMappingURL=check-run-creator.js.map