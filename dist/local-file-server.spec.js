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
const local_file_server_1 = require("./local-file-server");
const logger_1 = require("./logger/logger");
const task_config_1 = require("./task-config");
class MockableExpress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    use(handler) {
        return undefined;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    listen(port) {
        return undefined;
    }
}
describe(local_file_server_1.LocalFileServer, () => {
    let localFileServer;
    let loggerMock;
    let taskConfigMock;
    let getPortMock;
    let expressMock;
    let serverStaticMock;
    let appMock;
    let appHandler;
    let serverMock;
    const scanUrl = 'localhost';
    const port = 80;
    beforeEach(() => {
        loggerMock = typemoq_1.Mock.ofType(logger_1.Logger);
        taskConfigMock = typemoq_1.Mock.ofType(task_config_1.TaskConfig);
        getPortMock = typemoq_1.Mock.ofType();
        serverStaticMock = typemoq_1.Mock.ofType();
        expressMock = typemoq_1.Mock.ofType();
        serverMock = typemoq_1.Mock.ofType();
        appMock = typemoq_1.Mock.ofType();
        appHandler = () => undefined;
        localFileServer = new local_file_server_1.LocalFileServer(taskConfigMock.object, loggerMock.object, getPortMock.object, expressMock.object, serverStaticMock.object);
    });
    it('should create instance', () => {
        expect(localFileServer).not.toBeNull();
    });
    describe('start', () => {
        beforeEach(() => {
            setupMocksForLocalFileServerStart();
        });
        it('start', () => __awaiter(void 0, void 0, void 0, function* () {
            const host = yield localFileServer.start();
            expect(host).toBe(`http://localhost:${port}`);
            verifyMocks();
        }));
        it('should get the same instance when start is called multiple times', () => __awaiter(void 0, void 0, void 0, function* () {
            const promiseFunc1 = yield localFileServer.start();
            const promiseFunc2 = yield localFileServer.start();
            expect(promiseFunc1).toEqual(promiseFunc2);
        }));
    });
    describe('stop', () => {
        it('should do nothing if server is not started yet', () => {
            serverMock.setup((sm) => sm.close()).verifiable(typemoq_1.Times.never());
            localFileServer.stop();
            verifyMocks();
        });
        it('should close server', () => __awaiter(void 0, void 0, void 0, function* () {
            setupMocksForLocalFileServerStart();
            serverMock.setup((sm) => sm.close()).verifiable(typemoq_1.Times.once());
            yield localFileServer.start();
            localFileServer.stop();
            verifyMocks();
        }));
    });
    function setupMocksForLocalFileServerStart() {
        taskConfigMock
            .setup((tm) => tm.getSiteDir())
            .returns(() => scanUrl)
            .verifiable();
        getPortMock
            .setup((gm) => __awaiter(this, void 0, void 0, function* () { return gm(); }))
            .returns(() => Promise.resolve(port))
            .verifiable();
        loggerMock.setup((lm) => lm.logInfo(`Using port ${port}`)).verifiable(typemoq_1.Times.once());
        expressMock
            .setup((em) => em())
            .returns(() => appMock.object)
            .verifiable();
        serverStaticMock
            .setup((sm) => sm(scanUrl))
            .returns(() => appHandler)
            .verifiable();
        appMock.setup((am) => am.use(appHandler)).verifiable();
        appMock
            .setup((am) => am.listen(port))
            .returns(() => serverMock.object)
            .verifiable();
    }
    function verifyMocks() {
        taskConfigMock.verifyAll();
        getPortMock.verifyAll();
        serverStaticMock.verifyAll();
        expressMock.verifyAll();
        serverMock.verifyAll();
        loggerMock.verifyAll();
    }
});
//# sourceMappingURL=local-file-server.spec.js.map