"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
require("reflect-metadata");
const github = require("@actions/github");
const rest_1 = require("@octokit/rest");
const accessibility_insights_report_1 = require("accessibility-insights-report");
const express = require("express");
const getPort = require("get-port");
const serveStatic = require("serve-static");
const logger_1 = require("../logger/logger");
const scanner_1 = require("../scanner/scanner");
const ioc_types_1 = require("./ioc-types");
const setup_ioc_container_1 = require("./setup-ioc-container");
describe(setup_ioc_container_1.setupIocContainer, () => {
    let testSubject;
    beforeEach(() => {
        testSubject = setup_ioc_container_1.setupIocContainer();
    });
    test.each([scanner_1.Scanner, rest_1.Octokit, logger_1.Logger])('verify singleton resolution %p', (key) => {
        verifySingletonDependencyResolution(testSubject, key);
    });
    test.each([
        { key: ioc_types_1.iocTypes.Console, value: console },
        { key: ioc_types_1.iocTypes.Process, value: process },
        { key: ioc_types_1.iocTypes.GetPort, value: getPort },
        { key: ioc_types_1.iocTypes.Express, value: express },
        { key: ioc_types_1.iocTypes.ServeStatic, value: serveStatic },
        { key: ioc_types_1.iocTypes.ReporterFactory, value: accessibility_insights_report_1.reporterFactory },
        { key: ioc_types_1.iocTypes.Github, value: github },
    ])('verify constant value resolution %s', (pair) => {
        expect(testSubject.get(pair.key)).toBe(pair.value);
    });
    function verifySingletonDependencyResolution(container, key) {
        expect(container.get(key)).toBeDefined();
        expect(container.get(key)).toBe(container.get(key));
    }
});
//# sourceMappingURL=setup-ioc-container.spec.js.map