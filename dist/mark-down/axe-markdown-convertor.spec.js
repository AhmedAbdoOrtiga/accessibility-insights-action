"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
require("reflect-metadata");
const typemoq_1 = require("typemoq");
const axe_markdown_convertor_1 = require("./axe-markdown-convertor");
const check_result_markdown_builder_1 = require("./check-result-markdown-builder");
describe(axe_markdown_convertor_1.AxeMarkdownConvertor, () => {
    let axeMarkdownConvertor;
    let markdownBuilderMock;
    let axeScanResults;
    beforeEach(() => {
        markdownBuilderMock = typemoq_1.Mock.ofType(check_result_markdown_builder_1.CheckResultMarkdownBuilder);
        axeMarkdownConvertor = new axe_markdown_convertor_1.AxeMarkdownConvertor(markdownBuilderMock.object);
        axeScanResults = {
            results: {
                violations: [],
            },
        };
    });
    it('should create instance', () => {
        expect(axeMarkdownConvertor).not.toBeNull();
    });
    describe('convert', () => {
        it('returns congrats message when no failure found', () => {
            markdownBuilderMock.setup((mm) => mm.congratsContent(axeScanResults)).verifiable(typemoq_1.Times.once());
            axeMarkdownConvertor.convert(axeScanResults);
            markdownBuilderMock.verifyAll();
        });
        it('returns failure details', () => {
            axeScanResults.results = {
                violations: [
                    {
                        id: 'color-contrast',
                        nodes: [{ html: 'html1' }, { html: 'html2' }],
                    },
                    {
                        id: 'duplicate-id',
                        nodes: [{ html: 'html3' }, { html: 'html4' }, { html: 'html5' }],
                    },
                ],
                passes: [{ html: 'passed' }],
                inapplicable: [{ html: 'inapplicable' }],
            };
            markdownBuilderMock.setup((mm) => mm.failureDetails(axeScanResults)).verifiable(typemoq_1.Times.once());
            axeMarkdownConvertor.convert(axeScanResults);
            markdownBuilderMock.verifyAll();
        });
    });
    it('getErrorMarkdown', () => {
        markdownBuilderMock.setup((mm) => mm.errorContent()).verifiable(typemoq_1.Times.once());
        axeMarkdownConvertor.getErrorMarkdown();
        markdownBuilderMock.verifyAll();
    });
});
//# sourceMappingURL=axe-markdown-convertor.spec.js.map