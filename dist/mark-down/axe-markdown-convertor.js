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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxeMarkdownConvertor = void 0;
const inversify_1 = require("inversify");
const lodash_1 = require("lodash");
const check_result_markdown_builder_1 = require("./check-result-markdown-builder");
let AxeMarkdownConvertor = class AxeMarkdownConvertor {
    constructor(checkResultMarkdownBuilder) {
        this.checkResultMarkdownBuilder = checkResultMarkdownBuilder;
    }
    convert(axeScanResults) {
        if (lodash_1.isEmpty(axeScanResults.results.violations)) {
            return this.checkResultMarkdownBuilder.congratsContent(axeScanResults);
        }
        else {
            return this.checkResultMarkdownBuilder.failureDetails(axeScanResults);
        }
    }
    getErrorMarkdown() {
        return this.checkResultMarkdownBuilder.errorContent();
    }
};
AxeMarkdownConvertor = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(check_result_markdown_builder_1.CheckResultMarkdownBuilder)),
    __metadata("design:paramtypes", [check_result_markdown_builder_1.CheckResultMarkdownBuilder])
], AxeMarkdownConvertor);
exports.AxeMarkdownConvertor = AxeMarkdownConvertor;
//# sourceMappingURL=axe-markdown-convertor.js.map