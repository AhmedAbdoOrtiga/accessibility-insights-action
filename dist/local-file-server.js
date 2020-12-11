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
exports.LocalFileServer = void 0;
const inversify_1 = require("inversify");
const lodash_1 = require("lodash");
const ioc_types_1 = require("./ioc/ioc-types");
const logger_1 = require("./logger/logger");
const task_config_1 = require("./task-config");
let LocalFileServer = class LocalFileServer {
    constructor(taskConfig, logger, getPortFunc, expressFunc, serveStaticFunc) {
        this.taskConfig = taskConfig;
        this.logger = logger;
        this.getPortFunc = getPortFunc;
        this.expressFunc = expressFunc;
        this.serveStaticFunc = serveStaticFunc;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            if (lodash_1.isNil(this.startServerPromise)) {
                this.startServerPromise = this.startServer();
            }
            return this.startServerPromise;
        });
    }
    stop() {
        if (!lodash_1.isNil(this.startServerPromise)) {
            this.startServerPromise = undefined;
            this.server.close();
        }
    }
    startServer() {
        return __awaiter(this, void 0, void 0, function* () {
            const port = yield this.getPortFunc();
            this.logger.logInfo(`Using port ${port}`);
            const app = this.expressFunc();
            app.use(this.serveStaticFunc(this.taskConfig.getSiteDir()));
            this.server = app.listen(port);
            return `http://localhost:${port}`;
        });
    }
};
LocalFileServer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(task_config_1.TaskConfig)),
    __param(1, inversify_1.inject(logger_1.Logger)),
    __param(2, inversify_1.inject(ioc_types_1.iocTypes.GetPort)),
    __param(3, inversify_1.inject(ioc_types_1.iocTypes.Express)),
    __param(4, inversify_1.inject(ioc_types_1.iocTypes.ServeStatic)),
    __metadata("design:paramtypes", [task_config_1.TaskConfig,
        logger_1.Logger, Object, Object, Object])
], LocalFileServer);
exports.LocalFileServer = LocalFileServer;
//# sourceMappingURL=local-file-server.js.map