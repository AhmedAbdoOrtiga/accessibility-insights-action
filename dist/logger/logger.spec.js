"use strict";
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
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
require("reflect-metadata");
const typemoq_1 = require("typemoq");
const verror_1 = require("verror");
const console_logger_client_1 = require("./console-logger-client");
const logger_1 = require("./logger");
const logger_client_1 = require("./logger-client");
describe(logger_1.Logger, () => {
    let loggerClient1Mock;
    let loggerClient2Mock;
    let testSubject;
    let processStub;
    beforeEach(() => {
        processStub = { execArgv: ['--test'] };
        loggerClient1Mock = typemoq_1.Mock.ofType2(console_logger_client_1.ConsoleLoggerClient, null, typemoq_1.MockBehavior.Strict);
        loggerClient2Mock = typemoq_1.Mock.ofType2(console_logger_client_1.ConsoleLoggerClient, null, typemoq_1.MockBehavior.Strict);
        testSubject = new logger_1.Logger([loggerClient1Mock.object, loggerClient2Mock.object], processStub);
    });
    describe('setup', () => {
        it('verify default setup', () => __awaiter(void 0, void 0, void 0, function* () {
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            verifyMocks();
        }));
        it('does not initialize more than once', () => __awaiter(void 0, void 0, void 0, function* () {
            const baseProps = { foo: 'bar', source: 'test-source' };
            setupCallsForTelemetrySetup(baseProps);
            yield testSubject.setup(baseProps);
            yield testSubject.setup(baseProps);
            verifyMocks();
        }));
        it('initializes with additional common properties', () => __awaiter(void 0, void 0, void 0, function* () {
            const baseProps = { foo: 'bar', source: 'test-source' };
            setupCallsForTelemetrySetup(baseProps);
            yield testSubject.setup(baseProps);
            verifyMocks();
        }));
    });
    describe('log', () => {
        it('throw if called before setup', () => {
            expect(() => {
                testSubject.log('trace1', logger_client_1.LogLevel.warn);
            }).toThrowError('The logger instance is not initialized. Ensure the setup() method is invoked by derived class implementation.');
        });
        it('when properties not passed', () => __awaiter(void 0, void 0, void 0, function* () {
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('trace1', logger_client_1.LogLevel.error, undefined)).verifiable(typemoq_1.Times.once()));
            testSubject.log('trace1', logger_client_1.LogLevel.error);
            verifyMocks();
        }));
        it('when properties passed', () => __awaiter(void 0, void 0, void 0, function* () {
            const properties = { foo: 'bar' };
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('trace1', logger_client_1.LogLevel.error, properties)).verifiable(typemoq_1.Times.once()));
            testSubject.log('trace1', logger_client_1.LogLevel.error, properties);
            verifyMocks();
        }));
    });
    describe('logInfo', () => {
        it('throw if called before setup', () => {
            expect(() => {
                testSubject.logInfo('info1');
            }).toThrowError('The logger instance is not initialized. Ensure the setup() method is invoked by derived class implementation.');
        });
        it('when properties not passed', () => __awaiter(void 0, void 0, void 0, function* () {
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('info1', logger_client_1.LogLevel.info, undefined)).verifiable(typemoq_1.Times.once()));
            testSubject.logInfo('info1');
            verifyMocks();
        }));
        it('when properties passed', () => __awaiter(void 0, void 0, void 0, function* () {
            const properties = { foo: 'bar' };
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('info1', logger_client_1.LogLevel.info, properties)).verifiable(typemoq_1.Times.once()));
            testSubject.logInfo('info1', properties);
            verifyMocks();
        }));
    });
    describe('logWarn', () => {
        it('throw if called before setup', () => {
            expect(() => {
                testSubject.logWarn('warn1');
            }).toThrowError('The logger instance is not initialized. Ensure the setup() method is invoked by derived class implementation.');
        });
        it('when properties not passed', () => __awaiter(void 0, void 0, void 0, function* () {
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('warn1', logger_client_1.LogLevel.warn, undefined)).verifiable(typemoq_1.Times.once()));
            testSubject.logWarn('warn1');
            verifyMocks();
        }));
        it('when properties passed', () => __awaiter(void 0, void 0, void 0, function* () {
            const properties = { foo: 'bar' };
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('warn1', logger_client_1.LogLevel.warn, properties)).verifiable(typemoq_1.Times.once()));
            testSubject.logWarn('warn1', properties);
            verifyMocks();
        }));
    });
    describe('logError', () => {
        it('throw if called before setup', () => {
            expect(() => {
                testSubject.logError('error1');
            }).toThrowError('The logger instance is not initialized. Ensure the setup() method is invoked by derived class implementation.');
        });
        it('when properties not passed', () => __awaiter(void 0, void 0, void 0, function* () {
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('error1', logger_client_1.LogLevel.error, undefined)).verifiable(typemoq_1.Times.once()));
            testSubject.logError('error1');
            verifyMocks();
        }));
        it('when properties passed', () => __awaiter(void 0, void 0, void 0, function* () {
            const properties = { foo: 'bar' };
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('error1', logger_client_1.LogLevel.error, properties)).verifiable(typemoq_1.Times.once()));
            testSubject.logError('error1', properties);
            verifyMocks();
        }));
    });
    describe('logVerbose', () => {
        it('--debug is case insensitive', () => __awaiter(void 0, void 0, void 0, function* () {
            processStub.execArgv = ['--t', '--DEBUG'];
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('HealthCheck', logger_client_1.LogLevel.verbose, undefined)).verifiable(typemoq_1.Times.once()));
            testSubject.logVerbose('HealthCheck');
            verifyMocks();
        }));
        describe('in debug mode', () => {
            beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
                processStub.execArgv = ['--t', '--debug'];
                setupCallsForTelemetrySetup();
                yield testSubject.setup();
            }));
            it('when properties not passed', () => {
                invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('HealthCheck', logger_client_1.LogLevel.verbose, undefined)).verifiable(typemoq_1.Times.once()));
                testSubject.logVerbose('HealthCheck');
                verifyMocks();
            });
            it('when properties passed', () => {
                const properties = { foo: 'bar' };
                invokeAllLoggerClientMocks((m) => m.setup((c) => c.log('HealthCheck', logger_client_1.LogLevel.verbose, properties)).verifiable(typemoq_1.Times.once()));
                testSubject.logVerbose('HealthCheck', properties);
                verifyMocks();
            });
        });
        describe('in normal mode', () => {
            it('when properties not passed', () => {
                testSubject.logVerbose('HealthCheck');
                verifyMocks();
            });
            it('when properties passed', () => {
                const properties = { foo: 'bar' };
                testSubject.logVerbose('HealthCheck', properties);
                verifyMocks();
            });
        });
    });
    describe('trackException', () => {
        it('throw if called before setup', () => {
            expect(() => {
                testSubject.trackException(new Error('test error'));
            }).toThrowError('The logger instance is not initialized. Ensure the setup() method is invoked by derived class implementation.');
        });
        it('trackException', () => __awaiter(void 0, void 0, void 0, function* () {
            const error = new Error('some error');
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.trackException(error)).verifiable(typemoq_1.Times.once()));
            testSubject.trackException(error);
            verifyMocks();
        }));
    });
    describe('trackExceptionAny', () => {
        it('throw if called before setup', () => {
            expect(() => {
                testSubject.trackExceptionAny(new Error('test error'), 'error message');
            }).toThrowError('The logger instance is not initialized. Ensure the setup() method is invoked by derived class implementation.');
        });
        it('handles when passed error object', () => __awaiter(void 0, void 0, void 0, function* () {
            const underlyingError = new Error('internal error');
            const errorMessage = 'error message';
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m.setup((c) => c.trackException(new verror_1.VError(underlyingError, errorMessage))).verifiable(typemoq_1.Times.once()));
            testSubject.trackExceptionAny(underlyingError, errorMessage);
            verifyMocks();
        }));
        it('handles when passed non-error object', () => __awaiter(void 0, void 0, void 0, function* () {
            const underlyingError = { err: 'internal error' };
            const errorMessage = 'error message';
            setupCallsForTelemetrySetup();
            yield testSubject.setup();
            invokeAllLoggerClientMocks((m) => m
                .setup((c) => c.trackException(new verror_1.VError(new Error(JSON.stringify(underlyingError)), errorMessage)))
                .verifiable(typemoq_1.Times.once()));
            testSubject.trackExceptionAny(underlyingError, errorMessage);
            verifyMocks();
        }));
    });
    function verifyMocks() {
        loggerClient1Mock.verifyAll();
        loggerClient2Mock.verifyAll();
    }
    function setupCallsForTelemetrySetup(additionalCommonProps) {
        invokeAllLoggerClientMocks((loggerClient) => loggerClient
            .setup((c) => __awaiter(this, void 0, void 0, function* () { return c.setup(additionalCommonProps); }))
            .returns(() => __awaiter(this, void 0, void 0, function* () { return Promise.resolve(); }))
            .verifiable(typemoq_1.Times.once()));
    }
    function invokeAllLoggerClientMocks(action) {
        action(loggerClient1Mock);
        action(loggerClient2Mock);
    }
});
//# sourceMappingURL=logger.spec.js.map