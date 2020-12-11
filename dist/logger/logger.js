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
exports.Logger = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const verror_1 = require("verror");
const logger_client_1 = require("./logger-client");
class Logger {
    constructor(loggerClients, currentProcess) {
        this.loggerClients = loggerClients;
        this.currentProcess = currentProcess;
        this.initialized = false;
        this.isDebugEnabled = false;
    }
    setup(baseProperties) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.initialized === true) {
                return;
            }
            yield Promise.all(this.loggerClients.map((client) => __awaiter(this, void 0, void 0, function* () {
                yield client.setup(baseProperties);
            })));
            this.isDebugEnabled = /--debug|--inspect/i.test(this.currentProcess.execArgv.join(' '));
            this.initialized = true;
        });
    }
    log(message, logLevel, properties) {
        this.ensureInitialized();
        this.invokeLoggerClient((client) => client.log(message, logLevel, properties));
    }
    logInfo(message, properties) {
        this.log(message, logger_client_1.LogLevel.info, properties);
    }
    logVerbose(message, properties) {
        if (this.isDebugEnabled) {
            this.log(message, logger_client_1.LogLevel.verbose, properties);
        }
    }
    logWarn(message, properties) {
        this.log(message, logger_client_1.LogLevel.warn, properties);
    }
    logError(message, properties) {
        this.log(message, logger_client_1.LogLevel.error, properties);
    }
    trackException(error) {
        this.ensureInitialized();
        this.invokeLoggerClient((client) => client.trackException(error));
    }
    trackExceptionAny(underlyingErrorData, message) {
        const parsedErrorObject = underlyingErrorData instanceof Error ? underlyingErrorData : new Error(JSON.stringify(underlyingErrorData));
        this.trackException(new verror_1.VError(parsedErrorObject, message));
    }
    invokeLoggerClient(action) {
        this.loggerClients.forEach((client) => {
            action(client);
        });
    }
    ensureInitialized() {
        if (this.initialized === true) {
            return;
        }
        throw new Error('The logger instance is not initialized. Ensure the setup() method is invoked by derived class implementation.');
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map