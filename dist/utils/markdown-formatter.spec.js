"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const markdown_formatter_1 = require("./markdown-formatter");
describe('MarkdownFormatter', () => {
    it('snippet', () => {
        expect(markdown_formatter_1.snippet('code')).toMatchSnapshot();
    });
    it('link', () => {
        expect(markdown_formatter_1.link('href', 'text')).toMatchSnapshot();
    });
    it('image', () => {
        expect(markdown_formatter_1.image('alt', 'src')).toMatchSnapshot();
    });
    it('listItem', () => {
        expect(markdown_formatter_1.listItem('li')).toMatchSnapshot();
    });
    it('heading', () => {
        expect(markdown_formatter_1.heading('heading', 2)).toMatchSnapshot();
    });
    it('bold', () => {
        expect(markdown_formatter_1.bold('text')).toMatchSnapshot();
    });
    it('productTitle', () => {
        expect(markdown_formatter_1.productTitle()).toMatchSnapshot();
    });
    it('footerSeparator', () => {
        expect(markdown_formatter_1.footerSeparator()).toMatchSnapshot();
    });
    it('sectionSeparator', () => {
        expect(markdown_formatter_1.sectionSeparator()).toMatchSnapshot();
    });
});
//# sourceMappingURL=markdown-formatter.spec.js.map