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
exports.AllProgressReporter = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = require("inversify");
const check_run_creator_1 = require("./check-run/check-run-creator");
const pull_request_comment_creator_1 = require("./pull-request/pull-request-comment-creator");
let AllProgressReporter = class AllProgressReporter {
    constructor(pullRequestCommentCreator, checkRunCreator) {
        this.progressReporters = [checkRunCreator, pullRequestCommentCreator];
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute((r) => r.start());
        });
    }
    completeRun(axeScanResults) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute((r) => r.completeRun(axeScanResults));
        });
    }
    failRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute((r) => r.failRun(message));
        });
    }
    execute(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const length = this.progressReporters.length;
            for (let pos = 0; pos < length; pos += 1) {
                yield callback(this.progressReporters[pos]);
            }
        });
    }
};
AllProgressReporter = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(pull_request_comment_creator_1.PullRequestCommentCreator)),
    __param(1, inversify_1.inject(check_run_creator_1.CheckRunCreator)),
    __metadata("design:paramtypes", [pull_request_comment_creator_1.PullRequestCommentCreator,
        check_run_creator_1.CheckRunCreator])
], AllProgressReporter);
exports.AllProgressReporter = AllProgressReporter;
//# sourceMappingURL=all-progress-reporter.js.map