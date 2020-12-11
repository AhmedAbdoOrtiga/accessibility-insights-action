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
const promise_utils_1 = require("./promise-utils");
describe(promise_utils_1.PromiseUtils, () => {
    let promiseUtils;
    let waitOneSecond;
    let errorHandleMock;
    let onTimeoutCallback;
    const resolvedMsg = 'waited for one second';
    const timedOutMsg = 'timed out';
    beforeEach(() => {
        promiseUtils = new promise_utils_1.PromiseUtils();
        errorHandleMock = typemoq_1.Mock.ofInstance(() => {
            return null;
        });
        waitOneSecond = new Promise((resolve) => {
            setTimeout(() => {
                resolve(resolvedMsg);
            }, 1000);
        });
        onTimeoutCallback = () => __awaiter(void 0, void 0, void 0, function* () {
            errorHandleMock.object();
            return Promise.resolve(timedOutMsg);
        });
    });
    describe('waitFor', () => {
        it('promise is resolved before timeout', () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield promiseUtils.waitFor(waitOneSecond, 2000, null);
            expect(res).toBe(resolvedMsg);
        }));
        it('promise timed out', () => __awaiter(void 0, void 0, void 0, function* () {
            errorHandleMock.setup((em) => em()).verifiable();
            const res = yield promiseUtils.waitFor(waitOneSecond, 0, onTimeoutCallback);
            expect(res).toBe(timedOutMsg);
            errorHandleMock.verifyAll();
        }));
    });
});
//# sourceMappingURL=promise-utils.spec.js.map