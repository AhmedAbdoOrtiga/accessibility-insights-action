"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionSeparator = exports.footerSeparator = exports.productTitle = exports.bold = exports.heading = exports.listItem = exports.image = exports.link = exports.snippet = void 0;
const strings_1 = require("../content/strings");
const snippet = (text) => {
    return `\`${text}\``;
};
exports.snippet = snippet;
const link = (href, text) => {
    return `[${text}](${href})`;
};
exports.link = link;
const image = (altText, src) => {
    return `![${altText}](${src})`;
};
exports.image = image;
const listItem = (text) => {
    return `* ${text}`;
};
exports.listItem = listItem;
const heading = (text, headingLevel) => {
    return `${'#'.repeat(headingLevel)} ${text}`;
};
exports.heading = heading;
const bold = (text) => {
    return `**${text}**`;
};
exports.bold = bold;
const productTitle = () => {
    return `${exports.image(`${strings_1.brand}`, strings_1.brandLogoImg)} ${strings_1.brand}`;
};
exports.productTitle = productTitle;
const footerSeparator = () => `---`;
exports.footerSeparator = footerSeparator;
const sectionSeparator = () => '\n';
exports.sectionSeparator = sectionSeparator;
//# sourceMappingURL=markdown-formatter.js.map