"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
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
require("reflect-metadata");
const typemoq_1 = require("typemoq");
const util = require("util");
const console_logger_client_1 = require("./console-logger-client");
const logger_client_1 = require("./logger-client");
describe(console_logger_client_1.ConsoleLoggerClient, () => {
    let testSubject;
    let consoleMock;
    beforeEach(() => {
        consoleMock = typemoq_1.Mock.ofInstance({
            log: () => {
                /* noop */
            },
        });
        testSubject = new console_logger_client_1.ConsoleLoggerClient(consoleMock.object);
    });
    describe('log', () => {
        it('log data without properties', () => __awaiter(void 0, void 0, void 0, function* () {
            yield testSubject.setup(null);
            testSubject.log('trace1', logger_client_1.LogLevel.verbose);
            consoleMock.verify((c) => c.log('[Trace][verbose] === trace1'), typemoq_1.Times.once());
        }));
        it('log data with base properties', () => __awaiter(void 0, void 0, void 0, function* () {
            const baseProps = { foo: 'bar', source: 'test-source' };
            yield testSubject.setup(baseProps);
            testSubject.log('trace1', logger_client_1.LogLevel.warn);
            consoleMock.verify((c) => c.log(`[Trace][warn][properties - ${util.inspect(baseProps)}] === trace1`), typemoq_1.Times.once());
        }));
        it('log data with custom runtime properties', () => __awaiter(void 0, void 0, void 0, function* () {
            const baseProps = { source: 'test-source' };
            const customProps = { scanId: 'scan-id', batchRequestId: 'batch-req-id' };
            const mergedProps = { source: 'test-source', scanId: 'scan-id', batchRequestId: 'batch-req-id' };
            yield testSubject.setup(baseProps);
            testSubject.setCustomProperties(customProps);
            testSubject.log('trace1', logger_client_1.LogLevel.warn);
            consoleMock.verify((c) => c.log(`[Trace][warn][properties - ${util.inspect(mergedProps)}] === trace1`), typemoq_1.Times.once());
        }));
        it('log data with event properties', () => __awaiter(void 0, void 0, void 0, function* () {
            const baseProps = { foo: 'bar', source: 'test-source' };
            yield testSubject.setup(baseProps);
            const traceProps = { eventProp1: 'prop value' };
            testSubject.log('trace1', logger_client_1.LogLevel.warn, traceProps);
            consoleMock.verify((c) => c.log(`[Trace][warn][properties - ${util.inspect(Object.assign(Object.assign({}, baseProps), traceProps))}] === trace1`), typemoq_1.Times.once());
        }));
    });
    describe('trackException', () => {
        it('log data without properties', () => __awaiter(void 0, void 0, void 0, function* () {
            yield testSubject.setup(null);
            const error = new Error('error1');
            testSubject.trackException(error);
            consoleMock.verify((c) => c.log(`[Exception] === ${util.inspect(error, { depth: null })}`), typemoq_1.Times.once());
        }));
        it('log data with base properties', () => __awaiter(void 0, void 0, void 0, function* () {
            const baseProps = { foo: 'bar', source: 'test-source' };
            yield testSubject.setup(baseProps);
            const error = new Error('error1');
            testSubject.trackException(error);
            consoleMock.verify((c) => c.log(`[Exception][properties - ${util.inspect(baseProps)}] === ${util.inspect(error, { depth: null })}`), typemoq_1.Times.once());
        }));
        it('log data with custom runtime properties', () => __awaiter(void 0, void 0, void 0, function* () {
            const baseProps = { source: 'test-source' };
            const customProps = { scanId: 'scan-id', batchRequestId: 'batch-req-id' };
            const mergedProps = { source: 'test-source', scanId: 'scan-id', batchRequestId: 'batch-req-id' };
            yield testSubject.setup(baseProps);
            const error = new Error('error1');
            testSubject.setCustomProperties(customProps);
            testSubject.trackException(error);
            consoleMock.verify((c) => c.log(`[Exception][properties - ${util.inspect(mergedProps)}] === ${util.inspect(error, { depth: null })}`), typemoq_1.Times.once());
        }));
    });
});
//# sourceMappingURL=console-logger-client.spec.js.map