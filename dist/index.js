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
const setup_ioc_container_1 = require("./ioc/setup-ioc-container");
const logger_1 = require("./logger/logger");
const crawler_1 = require("./crawler/crawler");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const container = setup_ioc_container_1.setupIocContainer();
    const logger = container.get(logger_1.Logger);
    yield logger.setup();
    const crawler = container.get(crawler_1.Crawler);
    yield crawler.run();
}))().catch((error) => {
    console.log('Exception thrown in action: ', error);
    process.exit(1);
});
//# sourceMappingURL=index.js.map