module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/axe/axe-info.ts":
/*!*****************************!*\
  !*** ./src/axe/axe-info.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxeInfo = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const Axe = __webpack_require__(/*! axe-core */ "axe-core");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let AxeInfo = class AxeInfo {
    constructor(axe = Axe) {
        this.axe = axe;
    }
    get version() {
        return this.axe.version;
    }
};
AxeInfo = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object])
], AxeInfo);
exports.AxeInfo = AxeInfo;


/***/ }),

/***/ "./src/content/mark-down-strings.ts":
/*!******************************************!*\
  !*** ./src/content/mark-down-strings.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.disclaimerText = exports.wcag21AALink = exports.webToolLink = exports.assessmentLink = void 0;
const markdown_formatter_1 = __webpack_require__(/*! ../utils/markdown-formatter */ "./src/utils/markdown-formatter.ts");
const strings_1 = __webpack_require__(/*! ./strings */ "./src/content/strings.ts");
exports.assessmentLink = markdown_formatter_1.link('https://accessibilityinsights.io/docs/en/web/getstarted/assessment', 'Assessment');
exports.webToolLink = markdown_formatter_1.link('https://accessibilityinsights.io/docs/en/web/overview', strings_1.webToolName);
exports.wcag21AALink = markdown_formatter_1.link('https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aaa', 'WCAG 2.1 AA');
exports.disclaimerText = `The ${strings_1.toolName} ran a set of automated checks to help find some of the most common accessibility issues. The best way to evaluate web accessibility compliance is to complete an ${exports.assessmentLink} using ${exports.webToolLink}, a free and open source dev tool that walks you through assessing a website for ${exports.wcag21AALink} coverage.`;


/***/ }),

/***/ "./src/content/strings.ts":
/*!********************************!*\
  !*** ./src/content/strings.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRunDetailsTitle = exports.checkRunName = exports.brandLogoImg = exports.webToolName = exports.toolName = exports.productName = exports.title = exports.brand = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
exports.brand = 'Accessibility Insights';
exports.title = `${exports.brand} Action`;
exports.productName = exports.title;
exports.toolName = exports.title;
exports.webToolName = `${exports.brand} Web`;
exports.brandLogoImg = 'https://accessibilityinsights.io/img/a11yinsights-blue.svg';
exports.checkRunName = 'Accessibility Checks';
exports.checkRunDetailsTitle = `Accessibility Automated Checks Results`;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const setup_ioc_container_1 = __webpack_require__(/*! ./ioc/setup-ioc-container */ "./src/ioc/setup-ioc-container.ts");
const logger_1 = __webpack_require__(/*! ./logger/logger */ "./src/logger/logger.ts");
const scanner_1 = __webpack_require__(/*! ./scanner/scanner */ "./src/scanner/scanner.ts");
(() => __awaiter(void 0, void 0, void 0, function* () {
    // var util = require('util');
    // var exec = util.promisify(require('child_process').exec);
    // const { stdout, stderr } = await exec(`npm install leveldown levelup puppeteer axe-core @axe-core/puppeteer apify apify-shared`);
    // if (!isEmpty(stderr)) {
    //     throw Error(stderr);
    // }
    // if (!isEmpty(stdout)) {
    // console.log('All external packages were installed successfully!\n');
    const container = setup_ioc_container_1.setupIocContainer();
    const logger = container.get(logger_1.Logger);
    yield logger.setup();
    const scanner = container.get(scanner_1.Scanner);
    yield scanner.scan();
    // }
}))().catch(error => {
    console.log('Exception thrown in action: ', error);
    process.exit(1);
});


/***/ }),

/***/ "./src/ioc/ioc-types.ts":
/*!******************************!*\
  !*** ./src/ioc/ioc-types.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.iocTypes = void 0;
exports.iocTypes = {
    Process: 'Process',
    Console: 'Console',
    ReportFactory: 'ReportFactory',
    GetPort: 'GetPort',
    Express: 'Express',
    ServeStatic: 'ServeStatic',
    Github: 'Github',
};


/***/ }),

/***/ "./src/ioc/setup-ioc-container.ts":
/*!****************************************!*\
  !*** ./src/ioc/setup-ioc-container.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.setupIocContainer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const github = __webpack_require__(/*! @actions/github */ "@actions/github");
const rest_1 = __webpack_require__(/*! @octokit/rest */ "@octokit/rest");
const accessibility_insights_report_1 = __webpack_require__(/*! accessibility-insights-report */ "accessibility-insights-report");
const express = __webpack_require__(/*! express */ "express");
const getPort = __webpack_require__(/*! get-port */ "get-port");
const inversify = __webpack_require__(/*! inversify */ "inversify");
const serveStatic = __webpack_require__(/*! serve-static */ "serve-static");
const console_logger_client_1 = __webpack_require__(/*! ../logger/console-logger-client */ "./src/logger/console-logger-client.ts");
const logger_1 = __webpack_require__(/*! ../logger/logger */ "./src/logger/logger.ts");
const scanner_1 = __webpack_require__(/*! ../scanner/scanner */ "./src/scanner/scanner.ts");
const task_config_1 = __webpack_require__(/*! ../task-config */ "./src/task-config.ts");
const ioc_types_1 = __webpack_require__(/*! ./ioc-types */ "./src/ioc/ioc-types.ts");
const accessibility_insights_scan_local_1 = __webpack_require__(/*! accessibility-insights-scan-local */ "accessibility-insights-scan-local");
function setupIocContainer() {
    const container = new inversify.Container({ autoBindInjectable: true });
    accessibility_insights_scan_local_1.setupCliContainer(container);
    container.bind(scanner_1.Scanner).toSelf().inSingletonScope();
    container.bind(ioc_types_1.iocTypes.Console).toConstantValue(console);
    container.bind(ioc_types_1.iocTypes.Process).toConstantValue(process);
    container.bind(ioc_types_1.iocTypes.GetPort).toConstantValue(getPort);
    container.bind(ioc_types_1.iocTypes.Express).toConstantValue(express);
    container.bind(ioc_types_1.iocTypes.ServeStatic).toConstantValue(serveStatic);
    container.bind(ioc_types_1.iocTypes.ReportFactory).toConstantValue(accessibility_insights_report_1.reporterFactory);
    container.bind(ioc_types_1.iocTypes.Github).toConstantValue(github);
    container
        .bind(rest_1.Octokit)
        .toDynamicValue((context) => {
        const taskConfig = context.container.get(task_config_1.TaskConfig);
        return new rest_1.Octokit({ auth: taskConfig.getToken() });
    })
        .inSingletonScope();
    container
        .bind(logger_1.Logger)
        .toDynamicValue((context) => {
        const consoleLoggerClient = context.container.get(console_logger_client_1.ConsoleLoggerClient);
        return new logger_1.Logger([consoleLoggerClient], context.container.get(ioc_types_1.iocTypes.Process));
    })
        .inSingletonScope();
    return container;
}
exports.setupIocContainer = setupIocContainer;


/***/ }),

/***/ "./src/local-file-server.ts":
/*!**********************************!*\
  !*** ./src/local-file-server.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalFileServer = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const ioc_types_1 = __webpack_require__(/*! ./ioc/ioc-types */ "./src/ioc/ioc-types.ts");
const logger_1 = __webpack_require__(/*! ./logger/logger */ "./src/logger/logger.ts");
const task_config_1 = __webpack_require__(/*! ./task-config */ "./src/task-config.ts");
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
    __metadata("design:paramtypes", [typeof (_a = typeof task_config_1.TaskConfig !== "undefined" && task_config_1.TaskConfig) === "function" ? _a : Object, typeof (_b = typeof logger_1.Logger !== "undefined" && logger_1.Logger) === "function" ? _b : Object, Object, Object, Object])
], LocalFileServer);
exports.LocalFileServer = LocalFileServer;


/***/ }),

/***/ "./src/logger/console-logger-client.ts":
/*!*********************************************!*\
  !*** ./src/logger/console-logger-client.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const util = __webpack_require__(/*! util */ "util");
const ioc_types_1 = __webpack_require__(/*! ../ioc/ioc-types */ "./src/ioc/ioc-types.ts");
const logger_client_1 = __webpack_require__(/*! ./logger-client */ "./src/logger/logger-client.ts");
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


/***/ }),

/***/ "./src/logger/logger-client.ts":
/*!*************************************!*\
  !*** ./src/logger/logger-client.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["info"] = 0] = "info";
    LogLevel[LogLevel["warn"] = 1] = "warn";
    LogLevel[LogLevel["verbose"] = 2] = "verbose";
    LogLevel[LogLevel["error"] = 3] = "error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));


/***/ }),

/***/ "./src/logger/logger.ts":
/*!******************************!*\
  !*** ./src/logger/logger.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const verror_1 = __webpack_require__(/*! verror */ "verror");
const logger_client_1 = __webpack_require__(/*! ./logger-client */ "./src/logger/logger-client.ts");
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


/***/ }),

/***/ "./src/mark-down/axe-markdown-convertor.ts":
/*!*************************************************!*\
  !*** ./src/mark-down/axe-markdown-convertor.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxeMarkdownConvertor = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const check_result_markdown_builder_1 = __webpack_require__(/*! ./check-result-markdown-builder */ "./src/mark-down/check-result-markdown-builder.ts");
let AxeMarkdownConvertor = class AxeMarkdownConvertor {
    constructor(checkResultMarkdownBuilder) {
        this.checkResultMarkdownBuilder = checkResultMarkdownBuilder;
    }
    convert(combinedReportParameters) {
        return this.checkResultMarkdownBuilder.content(combinedReportParameters);
    }
    getErrorMarkdown() {
        return this.checkResultMarkdownBuilder.errorContent();
    }
};
AxeMarkdownConvertor = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(check_result_markdown_builder_1.CheckResultMarkdownBuilder)),
    __metadata("design:paramtypes", [typeof (_a = typeof check_result_markdown_builder_1.CheckResultMarkdownBuilder !== "undefined" && check_result_markdown_builder_1.CheckResultMarkdownBuilder) === "function" ? _a : Object])
], AxeMarkdownConvertor);
exports.AxeMarkdownConvertor = AxeMarkdownConvertor;


/***/ }),

/***/ "./src/mark-down/check-result-markdown-builder.ts":
/*!********************************************************!*\
  !*** ./src/mark-down/check-result-markdown-builder.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckResultMarkdownBuilder = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const strings_1 = __webpack_require__(/*! ../content/strings */ "./src/content/strings.ts");
const markdown_formatter_1 = __webpack_require__(/*! ../utils/markdown-formatter */ "./src/utils/markdown-formatter.ts");
let CheckResultMarkdownBuilder = class CheckResultMarkdownBuilder {
    constructor() {
        this.errorContent = () => {
            const lines = [
                markdown_formatter_1.heading(`${markdown_formatter_1.productTitle()}: Something went wrong`, 3),
                markdown_formatter_1.sectionSeparator(),
                `You can review the log to troubleshoot the issue. Fix it and re-run the workflow to run the automated accessibility checks again.`,
                markdown_formatter_1.sectionSeparator(),
            ];
            return this.scanResultDetails(lines.join(''));
        };
        this.content = (combinedReportParameters) => {
            const passedChecks = combinedReportParameters.results.resultsByRule.passed.length;
            const inapplicableChecks = combinedReportParameters.results.resultsByRule.notApplicable.length;
            const failedChecks = combinedReportParameters.results.resultsByRule.failed.reduce((a, b) => a + b.failed.length, 0);
            const lines = [
                markdown_formatter_1.heading(`${markdown_formatter_1.productTitle()}`, 3),
                markdown_formatter_1.sectionSeparator(),
                markdown_formatter_1.listItem(`${markdown_formatter_1.bold(`Rules`)}: ${failedChecks} check(s) failed, ${passedChecks} check(s) passed, and ${inapplicableChecks} were not applicable`),
                markdown_formatter_1.sectionSeparator(),
                markdown_formatter_1.listItem(`${markdown_formatter_1.bold(`URLs`)}: ${combinedReportParameters.results.urlResults.failedUrls} URL(s) failed, ${combinedReportParameters.results.urlResults.passedUrls} URL(s) passed, and ${combinedReportParameters.results.urlResults.unscannableUrls} were not scannable`),
                markdown_formatter_1.sectionSeparator(),
                this.downloadArtifacts(),
            ];
            return this.scanResultDetails(lines.join(''), this.scanResultFooter(combinedReportParameters));
        };
        this.scanResultDetails = (scanResult, footer) => {
            const lines = [scanResult, markdown_formatter_1.sectionSeparator(), markdown_formatter_1.footerSeparator(), markdown_formatter_1.sectionSeparator(), footer];
            return lines.join('');
        };
        this.scanResultFooter = (combinedReportParameters) => {
            const axeVersion = combinedReportParameters.axeVersion;
            const axeCoreUrl = `https://github.com/dequelabs/axe-core/releases/tag/v${axeVersion}`;
            const axeLink = markdown_formatter_1.link(axeCoreUrl, `axe-core ${axeVersion}`);
            return `This scan used ${axeLink} with ${combinedReportParameters.userAgent}.`;
        };
        this.downloadArtifacts = () => {
            return markdown_formatter_1.listItem(`Download the ${markdown_formatter_1.bold(strings_1.brand)} artifact to view the detailed results of these checks`);
        };
    }
};
CheckResultMarkdownBuilder = __decorate([
    inversify_1.injectable()
], CheckResultMarkdownBuilder);
exports.CheckResultMarkdownBuilder = CheckResultMarkdownBuilder;


/***/ }),

/***/ "./src/progress-reporter/all-progress-reporter.ts":
/*!********************************************************!*\
  !*** ./src/progress-reporter/all-progress-reporter.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllProgressReporter = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const check_run_creator_1 = __webpack_require__(/*! ./check-run/check-run-creator */ "./src/progress-reporter/check-run/check-run-creator.ts");
const pull_request_comment_creator_1 = __webpack_require__(/*! ./pull-request/pull-request-comment-creator */ "./src/progress-reporter/pull-request/pull-request-comment-creator.ts");
let AllProgressReporter = class AllProgressReporter {
    constructor(pullRequestCommentCreator, checkRunCreator) {
        this.progressReporters = [checkRunCreator, pullRequestCommentCreator];
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute((r) => r.start());
        });
    }
    completeRun(combinedReportParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute((r) => r.completeRun(combinedReportParameters));
        });
    }
    failRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.execute((r) => r.failRun(message));
        });
    }
    execute(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const length = this.progressReporters.length;
            for (let pos = 0; pos < length; pos += 1) {
                yield callback(this.progressReporters[pos]);
            }
        });
    }
};
AllProgressReporter = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(pull_request_comment_creator_1.PullRequestCommentCreator)),
    __param(1, inversify_1.inject(check_run_creator_1.CheckRunCreator)),
    __metadata("design:paramtypes", [typeof (_a = typeof pull_request_comment_creator_1.PullRequestCommentCreator !== "undefined" && pull_request_comment_creator_1.PullRequestCommentCreator) === "function" ? _a : Object, typeof (_b = typeof check_run_creator_1.CheckRunCreator !== "undefined" && check_run_creator_1.CheckRunCreator) === "function" ? _b : Object])
], AllProgressReporter);
exports.AllProgressReporter = AllProgressReporter;


/***/ }),

/***/ "./src/progress-reporter/check-run/check-run-creator.ts":
/*!**************************************************************!*\
  !*** ./src/progress-reporter/check-run/check-run-creator.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckRunCreator = void 0;
const rest_1 = __webpack_require__(/*! @octokit/rest */ "@octokit/rest");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const mark_down_strings_1 = __webpack_require__(/*! ../../content/mark-down-strings */ "./src/content/mark-down-strings.ts");
const strings_1 = __webpack_require__(/*! ../../content/strings */ "./src/content/strings.ts");
const ioc_types_1 = __webpack_require__(/*! ../../ioc/ioc-types */ "./src/ioc/ioc-types.ts");
const logger_1 = __webpack_require__(/*! ../../logger/logger */ "./src/logger/logger.ts");
const axe_markdown_convertor_1 = __webpack_require__(/*! ../../mark-down/axe-markdown-convertor */ "./src/mark-down/axe-markdown-convertor.ts");
let CheckRunCreator = class CheckRunCreator {
    constructor(axeMarkdownConvertor, octokit, githubObj, logger) {
        this.axeMarkdownConvertor = axeMarkdownConvertor;
        this.octokit = octokit;
        this.githubObj = githubObj;
        this.logger = logger;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logMessage('Creating check run with status as in_progress');
            this.a11yCheck = (yield this.octokit.checks.create({
                owner: this.githubObj.context.repo.owner,
                repo: this.githubObj.context.repo.repo,
                name: strings_1.checkRunName,
                status: 'in_progress',
                head_sha: lodash_1.isNil(this.githubObj.context.payload.pull_request)
                    ? this.githubObj.context.sha
                    : this.githubObj.context.payload.pull_request.head.sha,
            })).data;
        });
    }
    completeRun(combinedReportParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logMessage('Updating check run with status as completed');
            yield this.octokit.checks.update({
                owner: this.githubObj.context.repo.owner,
                repo: this.githubObj.context.repo.repo,
                check_run_id: this.a11yCheck.id,
                name: strings_1.checkRunName,
                status: 'completed',
                conclusion: combinedReportParameters.results.urlResults.failedUrls === 0 ? 'success' : 'failure',
                output: this.getScanOutput(combinedReportParameters),
            });
        });
    }
    failRun() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logMessage('Updating check run with status as failed');
            yield this.octokit.checks.update({
                owner: this.githubObj.context.repo.owner,
                repo: this.githubObj.context.repo.repo,
                check_run_id: this.a11yCheck.id,
                name: strings_1.checkRunName,
                status: 'completed',
                conclusion: 'failure',
                output: {
                    title: strings_1.checkRunDetailsTitle,
                    summary: mark_down_strings_1.disclaimerText,
                    annotations: [],
                    text: this.axeMarkdownConvertor.getErrorMarkdown(),
                },
            });
        });
    }
    logMessage(message) {
        this.logger.logInfo(`[CheckRunCreator] ${message}`);
    }
    getScanOutput(combinedReportParameters) {
        return {
            title: strings_1.checkRunDetailsTitle,
            summary: mark_down_strings_1.disclaimerText,
            text: this.axeMarkdownConvertor.convert(combinedReportParameters),
        };
    }
};
CheckRunCreator = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(axe_markdown_convertor_1.AxeMarkdownConvertor)),
    __param(1, inversify_1.inject(rest_1.Octokit)),
    __param(2, inversify_1.inject(ioc_types_1.iocTypes.Github)),
    __param(3, inversify_1.inject(logger_1.Logger)),
    __metadata("design:paramtypes", [typeof (_a = typeof axe_markdown_convertor_1.AxeMarkdownConvertor !== "undefined" && axe_markdown_convertor_1.AxeMarkdownConvertor) === "function" ? _a : Object, typeof (_b = typeof rest_1.Octokit !== "undefined" && rest_1.Octokit) === "function" ? _b : Object, Object, typeof (_c = typeof logger_1.Logger !== "undefined" && logger_1.Logger) === "function" ? _c : Object])
], CheckRunCreator);
exports.CheckRunCreator = CheckRunCreator;


/***/ }),

/***/ "./src/progress-reporter/pull-request/pull-request-comment-creator.ts":
/*!****************************************************************************!*\
  !*** ./src/progress-reporter/pull-request/pull-request-comment-creator.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var PullRequestCommentCreator_1, _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullRequestCommentCreator = void 0;
const rest_1 = __webpack_require__(/*! @octokit/rest */ "@octokit/rest");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const ioc_types_1 = __webpack_require__(/*! ../../ioc/ioc-types */ "./src/ioc/ioc-types.ts");
const logger_1 = __webpack_require__(/*! ../../logger/logger */ "./src/logger/logger.ts");
const axe_markdown_convertor_1 = __webpack_require__(/*! ../../mark-down/axe-markdown-convertor */ "./src/mark-down/axe-markdown-convertor.ts");
const markdown_formatter_1 = __webpack_require__(/*! ../../utils/markdown-formatter */ "./src/utils/markdown-formatter.ts");
let PullRequestCommentCreator = PullRequestCommentCreator_1 = class PullRequestCommentCreator {
    constructor(axeMarkdownConvertor, octokit, githubObj, logger) {
        this.axeMarkdownConvertor = axeMarkdownConvertor;
        this.octokit = octokit;
        this.githubObj = githubObj;
        this.logger = logger;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            // We don't do anything for pull request flow
        });
    }
    completeRun(combinedReportParameters) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.isSupported()) {
                return;
            }
            const pullRequest = this.githubObj.context.payload.pull_request;
            const existingComment = yield this.findComment(pullRequest.number);
            if (lodash_1.isNil(existingComment)) {
                this.logMessage('Creating new comment');
                yield this.octokit.issues.createComment({
                    owner: this.githubObj.context.repo.owner,
                    repo: this.githubObj.context.repo.repo,
                    body: this.axeMarkdownConvertor.convert(combinedReportParameters),
                    issue_number: pullRequest.number,
                });
            }
            else {
                this.logMessage('Updating existing comment');
                yield this.octokit.issues.updateComment({
                    owner: this.githubObj.context.repo.owner,
                    repo: this.githubObj.context.repo.repo,
                    body: this.axeMarkdownConvertor.convert(combinedReportParameters),
                    comment_id: existingComment.id,
                });
            }
        });
    }
    // eslint-disable-next-line @typescript-eslint/require-await
    failRun(message) {
        return __awaiter(this, void 0, void 0, function* () {
            // if (!this.isSupported()) {
            //     return;
            // }
            throw message;
        });
    }
    isSupported() {
        return this.githubObj.context.eventName === 'pull_request';
    }
    findComment(pullRequestNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentsResponse = yield this.octokit.issues.listComments({
                issue_number: pullRequestNumber,
                owner: this.githubObj.context.repo.owner,
                repo: this.githubObj.context.repo.repo,
            });
            const comments = commentsResponse.data;
            return comments.find((c) => !lodash_1.isEmpty(c.body) && !lodash_1.isEmpty(c.user) && c.user.login === 'github-actions[bot]' && c.body.includes(markdown_formatter_1.productTitle()));
        });
    }
    logMessage(message) {
        this.logger.logInfo(`[${PullRequestCommentCreator_1.name}] ${message}`);
    }
};
PullRequestCommentCreator = PullRequestCommentCreator_1 = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(axe_markdown_convertor_1.AxeMarkdownConvertor)),
    __param(1, inversify_1.inject(rest_1.Octokit)),
    __param(2, inversify_1.inject(ioc_types_1.iocTypes.Github)),
    __param(3, inversify_1.inject(logger_1.Logger)),
    __metadata("design:paramtypes", [typeof (_a = typeof axe_markdown_convertor_1.AxeMarkdownConvertor !== "undefined" && axe_markdown_convertor_1.AxeMarkdownConvertor) === "function" ? _a : Object, typeof (_b = typeof rest_1.Octokit !== "undefined" && rest_1.Octokit) === "function" ? _b : Object, Object, typeof (_c = typeof logger_1.Logger !== "undefined" && logger_1.Logger) === "function" ? _c : Object])
], PullRequestCommentCreator);
exports.PullRequestCommentCreator = PullRequestCommentCreator;


/***/ }),

/***/ "./src/report/consolidated-report-generator.ts":
/*!*****************************************************!*\
  !*** ./src/report/consolidated-report-generator.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsolidatedReportGenerator = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const axe_info_1 = __webpack_require__(/*! ../axe/axe-info */ "./src/axe/axe-info.ts");
const logger_1 = __webpack_require__(/*! ../logger/logger */ "./src/logger/logger.ts");
const accessibility_insights_report_1 = __webpack_require__(/*! accessibility-insights-report */ "accessibility-insights-report");
const accessibility_insights_scan_local_1 = __webpack_require__(/*! accessibility-insights-scan-local */ "accessibility-insights-scan-local");
const fs = __webpack_require__(/*! fs */ "fs");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ioc_types_1 = __webpack_require__(/*! ../ioc/ioc-types */ "./src/ioc/ioc-types.ts");
const task_config_1 = __webpack_require__(/*! ../task-config */ "./src/task-config.ts");
let ConsolidatedReportGenerator = class ConsolidatedReportGenerator {
    constructor(combinedReportDataConverter, axeInfo, taskConfig, reporterFactoryFunc, logger, fileSystemObj = fs) {
        this.combinedReportDataConverter = combinedReportDataConverter;
        this.axeInfo = axeInfo;
        this.taskConfig = taskConfig;
        this.reporterFactoryFunc = reporterFactoryFunc;
        this.logger = logger;
        this.fileSystemObj = fileSystemObj;
    }
    generateReport(combinedReportData) {
        return __awaiter(this, void 0, void 0, function* () {
            const reporter = this.reporterFactoryFunc();
            const htmlReportContent = reporter.fromCombinedResults(combinedReportData).asHTML();
            const outDirectory = this.taskConfig.getReportOutDir();
            const reportFileName = `${outDirectory}/index.html`;
            // eslint-disable-next-line security/detect-non-literal-fs-filename
            if (!this.fileSystemObj.existsSync(outDirectory)) {
                this.logger.logInfo('output directory does not exists.');
                this.logger.logInfo(`creating output directory - ${outDirectory}`);
                // eslint-disable-next-line security/detect-non-literal-fs-filename
                this.fileSystemObj.mkdirSync(outDirectory);
            }
            this.saveHtmlReport(reportFileName, htmlReportContent);
            return reportFileName;
        });
    }
    saveHtmlReport(fileName, content) {
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        this.fileSystemObj.writeFileSync(fileName, content);
        this.logger.logInfo(`scan report saved successfully ${fileName}`);
    }
};
ConsolidatedReportGenerator = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(accessibility_insights_scan_local_1.AICombinedReportDataConverter)),
    __param(1, inversify_1.inject(axe_info_1.AxeInfo)),
    __param(2, inversify_1.inject(task_config_1.TaskConfig)),
    __param(3, inversify_1.inject(ioc_types_1.iocTypes.ReportFactory)),
    __param(4, inversify_1.inject(logger_1.Logger)),
    __metadata("design:paramtypes", [typeof (_a = typeof accessibility_insights_scan_local_1.AICombinedReportDataConverter !== "undefined" && accessibility_insights_scan_local_1.AICombinedReportDataConverter) === "function" ? _a : Object, typeof (_b = typeof axe_info_1.AxeInfo !== "undefined" && axe_info_1.AxeInfo) === "function" ? _b : Object, typeof (_c = typeof task_config_1.TaskConfig !== "undefined" && task_config_1.TaskConfig) === "function" ? _c : Object, typeof (_d = typeof accessibility_insights_report_1.ReporterFactory !== "undefined" && accessibility_insights_report_1.ReporterFactory) === "function" ? _d : Object, typeof (_e = typeof logger_1.Logger !== "undefined" && logger_1.Logger) === "function" ? _e : Object, Object])
], ConsolidatedReportGenerator);
exports.ConsolidatedReportGenerator = ConsolidatedReportGenerator;


/***/ }),

/***/ "./src/scanner/scanner.ts":
/*!********************************!*\
  !*** ./src/scanner/scanner.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scanner = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const path = __webpack_require__(/*! path */ "path");
const url = __webpack_require__(/*! url */ "url");
const util = __webpack_require__(/*! util */ "util");
const ioc_types_1 = __webpack_require__(/*! ../ioc/ioc-types */ "./src/ioc/ioc-types.ts");
const local_file_server_1 = __webpack_require__(/*! ../local-file-server */ "./src/local-file-server.ts");
const logger_1 = __webpack_require__(/*! ../logger/logger */ "./src/logger/logger.ts");
const all_progress_reporter_1 = __webpack_require__(/*! ../progress-reporter/all-progress-reporter */ "./src/progress-reporter/all-progress-reporter.ts");
const task_config_1 = __webpack_require__(/*! ../task-config */ "./src/task-config.ts");
const promise_utils_1 = __webpack_require__(/*! ../utils/promise-utils */ "./src/utils/promise-utils.ts");
const accessibility_insights_scan_local_1 = __webpack_require__(/*! accessibility-insights-scan-local */ "accessibility-insights-scan-local");
const consolidated_report_generator_1 = __webpack_require__(/*! ../report/consolidated-report-generator */ "./src/report/consolidated-report-generator.ts");
const axe_info_1 = __webpack_require__(/*! ../axe/axe-info */ "./src/axe/axe-info.ts");
const strings_1 = __webpack_require__(/*! ../content/strings */ "./src/content/strings.ts");
let Scanner = class Scanner {
    constructor(logger, reportGenerator, taskConfig, allProgressReporter, fileServer, promiseUtils, currentProcess, crawler, combinedReportDataConverter, axeInfo) {
        this.logger = logger;
        this.reportGenerator = reportGenerator;
        this.taskConfig = taskConfig;
        this.allProgressReporter = allProgressReporter;
        this.fileServer = fileServer;
        this.promiseUtils = promiseUtils;
        this.currentProcess = currentProcess;
        this.crawler = crawler;
        this.combinedReportDataConverter = combinedReportDataConverter;
        this.axeInfo = axeInfo;
    }
    scan() {
        return __awaiter(this, void 0, void 0, function* () {
            let scanUrl;
            let fail = false;
            try {
                yield this.allProgressReporter.start();
                const baseUrl = yield this.fileServer.start();
                scanUrl = url.resolve(baseUrl, this.taskConfig.getScanUrlRelativePath());
                this.logger.logInfo(`Starting accessibility scanning of URL ${scanUrl}.`);
                const chromePath = this.taskConfig.getChromePath();
                const axeCoreSourcePath = path.resolve(__dirname, 'axe.js');
                const scanStarted = new Date();
                const combinedScanResult = yield this.crawler.crawl({
                    baseUrl: scanUrl,
                    crawl: true,
                    restartCrawl: true,
                    chromePath: chromePath,
                    axeSourcePath: axeCoreSourcePath,
                    localOutputDir: this.taskConfig.getReportOutDir(),
                });
                const scanEnded = new Date();
                const convertedData = this.getConvertedData(combinedScanResult, scanStarted, scanEnded);
                this.reportGenerator.generateReport(convertedData);
                yield this.allProgressReporter.completeRun(convertedData);
                if (convertedData.results.urlResults.failedUrls > 0) {
                    fail = true;
                }
            }
            catch (error) {
                this.logger.trackExceptionAny(error, `An error occurred while scanning website page ${scanUrl}.`);
                yield this.allProgressReporter.failRun(util.inspect(error));
            }
            finally {
                this.fileServer.stop();
                this.logger.logInfo(`Accessibility scanning of URL ${scanUrl} completed.`);
            }
            if (fail) {
                this.logger.logInfo('Fix your accessibility issues!');
                process.exit(1);
            }
        });
    }
    getConvertedData(combinedScanResult, scanStarted, scanEnded) {
        var _a;
        const scanResultData = {
            baseUrl: (_a = combinedScanResult.scanMetadata.baseUrl) !== null && _a !== void 0 ? _a : 'n/a',
            basePageTitle: combinedScanResult.scanMetadata.basePageTitle,
            scanEngineName: strings_1.toolName,
            axeCoreVersion: this.axeInfo.version,
            browserUserAgent: combinedScanResult.scanMetadata.userAgent,
            urlCount: combinedScanResult.urlCount,
            scanStarted,
            scanEnded,
        };
        return this.combinedReportDataConverter.convertCrawlingResults(combinedScanResult.combinedAxeResults, scanResultData);
    }
};
Scanner = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(logger_1.Logger)),
    __param(1, inversify_1.inject(consolidated_report_generator_1.ConsolidatedReportGenerator)),
    __param(2, inversify_1.inject(task_config_1.TaskConfig)),
    __param(3, inversify_1.inject(all_progress_reporter_1.AllProgressReporter)),
    __param(4, inversify_1.inject(local_file_server_1.LocalFileServer)),
    __param(5, inversify_1.inject(promise_utils_1.PromiseUtils)),
    __param(6, inversify_1.inject(ioc_types_1.iocTypes.Process)),
    __param(7, inversify_1.inject(accessibility_insights_scan_local_1.AICrawler)),
    __param(8, inversify_1.inject(accessibility_insights_scan_local_1.AICombinedReportDataConverter)),
    __param(9, inversify_1.inject(axe_info_1.AxeInfo)),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_1.Logger !== "undefined" && logger_1.Logger) === "function" ? _a : Object, typeof (_b = typeof consolidated_report_generator_1.ConsolidatedReportGenerator !== "undefined" && consolidated_report_generator_1.ConsolidatedReportGenerator) === "function" ? _b : Object, typeof (_c = typeof task_config_1.TaskConfig !== "undefined" && task_config_1.TaskConfig) === "function" ? _c : Object, typeof (_d = typeof all_progress_reporter_1.AllProgressReporter !== "undefined" && all_progress_reporter_1.AllProgressReporter) === "function" ? _d : Object, typeof (_e = typeof local_file_server_1.LocalFileServer !== "undefined" && local_file_server_1.LocalFileServer) === "function" ? _e : Object, typeof (_f = typeof promise_utils_1.PromiseUtils !== "undefined" && promise_utils_1.PromiseUtils) === "function" ? _f : Object, Object, typeof (_g = typeof accessibility_insights_scan_local_1.AICrawler !== "undefined" && accessibility_insights_scan_local_1.AICrawler) === "function" ? _g : Object, typeof (_h = typeof accessibility_insights_scan_local_1.AICombinedReportDataConverter !== "undefined" && accessibility_insights_scan_local_1.AICombinedReportDataConverter) === "function" ? _h : Object, typeof (_j = typeof axe_info_1.AxeInfo !== "undefined" && axe_info_1.AxeInfo) === "function" ? _j : Object])
], Scanner);
exports.Scanner = Scanner;


/***/ }),

/***/ "./src/task-config.ts":
/*!****************************!*\
  !*** ./src/task-config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskConfig = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const actionCore = __webpack_require__(/*! @actions/core */ "@actions/core");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const process = __webpack_require__(/*! process */ "process");
const ioc_types_1 = __webpack_require__(/*! ./ioc/ioc-types */ "./src/ioc/ioc-types.ts");
let TaskConfig = class TaskConfig {
    constructor(processObj, actionCoreObj = actionCore) {
        this.processObj = processObj;
        this.actionCoreObj = actionCoreObj;
    }
    getReportOutDir() {
        return this.actionCoreObj.getInput('output-dir');
    }
    getSiteDir() {
        return this.actionCoreObj.getInput('site-dir');
    }
    getScanUrlRelativePath() {
        return this.actionCoreObj.getInput('scan-url-relative-path');
    }
    getToken() {
        return this.actionCoreObj.getInput('repo-token');
    }
    getChromePath() {
        let chromePath;
        chromePath = this.actionCoreObj.getInput('chrome-path');
        if (lodash_1.isEmpty(chromePath)) {
            chromePath = process.env.CHROME_BIN;
        }
        return chromePath;
    }
    getRunId() {
        return parseInt(this.processObj.env.GITHUB_RUN_ID, 10);
    }
};
TaskConfig = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.iocTypes.Process)),
    __metadata("design:paramtypes", [Object, Object])
], TaskConfig);
exports.TaskConfig = TaskConfig;


/***/ }),

/***/ "./src/utils/markdown-formatter.ts":
/*!*****************************************!*\
  !*** ./src/utils/markdown-formatter.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectionSeparator = exports.footerSeparator = exports.productTitle = exports.bold = exports.heading = exports.listItem = exports.image = exports.link = exports.snippet = void 0;
const strings_1 = __webpack_require__(/*! ../content/strings */ "./src/content/strings.ts");
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
    return `${exports.image(`${strings_1.brand}`, strings_1.brandLogoImg)} ${strings_1.toolName}`;
};
exports.productTitle = productTitle;
const footerSeparator = () => `---`;
exports.footerSeparator = footerSeparator;
const sectionSeparator = () => '\n';
exports.sectionSeparator = sectionSeparator;


/***/ }),

/***/ "./src/utils/promise-utils.ts":
/*!************************************!*\
  !*** ./src/utils/promise-utils.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.PromiseUtils = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let PromiseUtils = class PromiseUtils {
    waitFor(promise, timeoutInMilliSec, onTimeoutCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            let timeoutHandle;
            let hasTimedOut = false;
            const timeoutPromise = new Promise((resolve) => {
                timeoutHandle = setTimeout(() => {
                    hasTimedOut = true;
                    resolve();
                }, timeoutInMilliSec);
            });
            const racePromise = Promise.race([promise, timeoutPromise]);
            try {
                yield racePromise;
            }
            finally {
                clearTimeout(timeoutHandle);
            }
            if (hasTimedOut) {
                return onTimeoutCallback();
            }
            return promise;
        });
    }
};
PromiseUtils = __decorate([
    inversify_1.injectable()
], PromiseUtils);
exports.PromiseUtils = PromiseUtils;


/***/ }),

/***/ "@actions/core":
/*!********************************!*\
  !*** external "@actions/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@actions/core");

/***/ }),

/***/ "@actions/github":
/*!**********************************!*\
  !*** external "@actions/github" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@actions/github");

/***/ }),

/***/ "@octokit/rest":
/*!********************************!*\
  !*** external "@octokit/rest" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@octokit/rest");

/***/ }),

/***/ "accessibility-insights-report":
/*!************************************************!*\
  !*** external "accessibility-insights-report" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("accessibility-insights-report");

/***/ }),

/***/ "accessibility-insights-scan-local":
/*!****************************************************!*\
  !*** external "accessibility-insights-scan-local" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("accessibility-insights-scan-local");

/***/ }),

/***/ "axe-core":
/*!***************************!*\
  !*** external "axe-core" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axe-core");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "get-port":
/*!***************************!*\
  !*** external "get-port" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("get-port");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "serve-static":
/*!*******************************!*\
  !*** external "serve-static" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serve-static");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "verror":
/*!*************************!*\
  !*** external "verror" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("verror");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map