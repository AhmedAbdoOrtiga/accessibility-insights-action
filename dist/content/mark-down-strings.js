"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.disclaimerText = exports.wcag21AALink = exports.webToolLink = exports.assessmentLink = void 0;
const markdown_formatter_1 = require("../utils/markdown-formatter");
const strings_1 = require("./strings");
exports.assessmentLink = markdown_formatter_1.link('https://accessibilityinsights.io/docs/en/web/getstarted/assessment', 'Assessment');
exports.webToolLink = markdown_formatter_1.link('https://accessibilityinsights.io/docs/en/web/overview', strings_1.webToolName);
exports.wcag21AALink = markdown_formatter_1.link('https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa', 'WCAG 2.1 AA');
exports.disclaimerText = `The ${strings_1.toolName} ran a set of automated checks to help find some of the most common accessibility issues. The best way to evaluate web accessibility compliance is to complete an ${exports.assessmentLink} using ${exports.webToolLink}, a free and open source dev tool that walks you through assessing a website for ${exports.wcag21AALink} coverage.`;
//# sourceMappingURL=mark-down-strings.js.map