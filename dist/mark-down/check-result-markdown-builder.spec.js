"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
require("reflect-metadata");
const check_result_markdown_builder_1 = require("./check-result-markdown-builder");
describe(check_result_markdown_builder_1.CheckResultMarkdownBuilder, () => {
    let checkResultMarkdownBuilder;
    let axeScanResults;
    beforeEach(() => {
        checkResultMarkdownBuilder = new check_result_markdown_builder_1.CheckResultMarkdownBuilder();
    });
    it('getFailureDetails', () => {
        axeScanResults = {
            results: {
                testEngine: {
                    version: '1.0.1',
                },
                violations: [
                    {
                        id: 'color-contrast',
                        nodes: [{ html: 'html1' }, { html: 'html2' }],
                        description: 'color-contrast is important',
                    },
                    {
                        id: 'duplicate-id',
                        nodes: [{ html: 'html3' }, { html: 'html4' }, { html: 'html5' }],
                        description: 'duplicate-id is even more important',
                    },
                ],
                passes: [
                    {
                        id: 'passed rule 1',
                        nodes: [{ html: 'html1' }, { html: 'html2' }],
                        description: 'passed rule 1 is important',
                    },
                    {
                        id: 'passed rule 2',
                        nodes: [{ html: 'html3' }, { html: 'html4' }, { html: 'html5' }],
                        description: 'passed rule 2 is even more important',
                    },
                ],
                inapplicable: [
                    {
                        id: 'inapplicable rule 1',
                        nodes: [{ html: 'html1' }, { html: 'html2' }],
                        description: 'inapplicable rule 1 is important',
                    },
                    {
                        id: 'inapplicable rule 2',
                        nodes: [{ html: 'html3' }, { html: 'html4' }, { html: 'html5' }],
                        description: 'inapplicable rule 2 is even more important',
                    },
                ],
            },
            browserSpec: 'browserSpec',
        };
        expect(checkResultMarkdownBuilder.failureDetails(axeScanResults)).toMatchSnapshot();
    });
    it('errorContent', () => {
        expect(checkResultMarkdownBuilder.errorContent()).toMatchSnapshot();
    });
    it('congratsContent', () => {
        axeScanResults = {
            browserSpec: 'browserSpec',
            results: {
                testEngine: {
                    version: '1.0.1',
                },
                violations: [],
                passes: [{ html: 'passed' }],
                inapplicable: [{ html: 'inapplicable' }],
            },
        };
        const res = checkResultMarkdownBuilder.congratsContent(axeScanResults);
        expect(res).toMatchSnapshot();
    });
});
//# sourceMappingURL=check-result-markdown-builder.spec.js.map