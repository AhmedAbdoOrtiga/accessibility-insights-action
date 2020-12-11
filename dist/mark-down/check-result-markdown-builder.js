"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckResultMarkdownBuilder = void 0;
const inversify_1 = require("inversify");
const strings_1 = require("../content/strings");
const markdown_formatter_1 = require("../utils/markdown-formatter");
let CheckResultMarkdownBuilder = class CheckResultMarkdownBuilder {
    constructor() {
        this.failureDetails = (axeScanResults) => {
            const failedRulesList = axeScanResults.results.violations.map((rule) => {
                return [this.failedRuleListItem(rule.nodes.length, rule.id, rule.description), markdown_formatter_1.sectionSeparator()].join('');
            });
            const sections = [
                this.failureSummary(axeScanResults.results.violations.length, axeScanResults.results.passes.length, axeScanResults.results.inapplicable.length),
                markdown_formatter_1.sectionSeparator(),
                `${markdown_formatter_1.heading('Failed instances', 4)}`,
                markdown_formatter_1.sectionSeparator(),
            ];
            return this.scanResultDetails(sections.concat(failedRulesList).join(''), this.scanResultFooter(axeScanResults));
        };
        this.errorContent = () => {
            const lines = [
                markdown_formatter_1.heading(`${markdown_formatter_1.productTitle()}: Something went wrong`, 3),
                markdown_formatter_1.sectionSeparator(),
                `You can review the log to troubleshoot the issue. Fix it and re-run the workflow to run the automated accessibility checks again.`,
                markdown_formatter_1.sectionSeparator(),
            ];
            return this.scanResultDetails(lines.join(''));
        };
        this.congratsContent = (axeScanResults) => {
            const passed = axeScanResults.results.passes.length;
            const inapplicable = axeScanResults.results.inapplicable.length;
            const lines = [
                markdown_formatter_1.heading(`${markdown_formatter_1.productTitle()}: All applicable checks passed`, 3),
                markdown_formatter_1.sectionSeparator(),
                markdown_formatter_1.listItem(`${markdown_formatter_1.bold(`${passed} check(s) passed`)}, and ${inapplicable} were not applicable`),
                markdown_formatter_1.sectionSeparator(),
                this.downloadArtifacts(),
            ];
            return this.scanResultDetails(lines.join(''), this.scanResultFooter(axeScanResults));
        };
        this.scanResultDetails = (scanResult, footer) => {
            const lines = [scanResult, markdown_formatter_1.sectionSeparator(), markdown_formatter_1.footerSeparator(), markdown_formatter_1.sectionSeparator(), footer];
            return lines.join('');
        };
        this.scanResultFooter = (axeScanResults) => {
            const axeVersion = axeScanResults.results.testEngine.version;
            const axeCoreUrl = `https://github.com/dequelabs/axe-core/releases/tag/v${axeVersion}`;
            const axeLink = markdown_formatter_1.link(axeCoreUrl, `axe-core ${axeVersion}`);
            return `This scan used ${axeLink} with ${axeScanResults.browserSpec}.`;
        };
        this.failureSummary = (failed, passed, inapplicable) => {
            const lines = [
                markdown_formatter_1.heading(`${markdown_formatter_1.productTitle()}`, 3),
                markdown_formatter_1.sectionSeparator(),
                markdown_formatter_1.listItem(`${markdown_formatter_1.bold(`${failed} check(s) failed`)}, ${passed} passed, and ${inapplicable} were not applicable`),
                markdown_formatter_1.sectionSeparator(),
                this.downloadArtifacts(),
            ];
            return lines.join('');
        };
        this.failedRuleListItem = (failureCount, ruleId, description) => {
            return markdown_formatter_1.listItem(`${markdown_formatter_1.bold(`${failureCount} × ${ruleId}`)}:  ${description}`);
        };
        this.downloadArtifacts = () => {
            return markdown_formatter_1.listItem(`Download the ${markdown_formatter_1.bold(strings_1.brand)} artifact to view the detailed results of these checks`);
        };
    }
};
CheckResultMarkdownBuilder = __decorate([
    inversify_1.injectable()
], CheckResultMarkdownBuilder);
exports.CheckResultMarkdownBuilder = CheckResultMarkdownBuilder;
//# sourceMappingURL=check-result-markdown-builder.js.map