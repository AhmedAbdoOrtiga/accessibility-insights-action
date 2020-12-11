"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ConsoleLoggerClient = void 0;
const inversify_1 = require("inversify");
const lodash_1 = require("lodash");
const util = require("util");
const ioc_types_1 = require("../ioc/ioc-types");
const logger_client_1 = require("./logger-client");
let ConsoleLoggerClient = class ConsoleLoggerClient {
    constructor(consoleObject) {
        this.consoleObject = consoleObject;
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    setup(baseProperties) {
        return __awaiter(this, void 0, void 0, function* () {
            this.baseProperties = baseProperties;
        });
    }
    log(message, logLevel, properties) {
        this.logInConsole(`[Trace][${logger_client_1.LogLevel[logLevel]}]${this.getPrintablePropertiesString(properties)}`, message);
    }
    trackException(error) {
        this.logInConsole(`[Exception]${this.getPrintablePropertiesString()}`, this.getPrintableString(error));
    }
    setCustomProperties(properties) {
        this.baseProperties = Object.assign(Object.assign({}, this.baseProperties), properties);
    }
    getPrintablePropertiesString(properties) {
        const allProperties = Object.assign(Object.assign({}, this.baseProperties), properties);
        return lodash_1.isEmpty(allProperties) ? '' : `[properties - ${this.getPrintableString(allProperties)}]`;
    }
    getPrintableString(obj) {
        return util.inspect(obj, { depth: null });
    }
    logInConsole(tag, content) {
        this.consoleObject.log(`${tag} === ${content}`);
    }
};
ConsoleLoggerClient = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.iocTypes.Console)),
    __metadata("design:paramtypes", [Object])
], ConsoleLoggerClient);
exports.ConsoleLoggerClient = ConsoleLoggerClient;
//# sourceMappingURL=console-logger-client.js.map