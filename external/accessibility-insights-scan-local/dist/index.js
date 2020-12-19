
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "../axe-result-converter/dist/axe-result-types.js":
/*!********************************************************!*\
  !*** ../axe-result-converter/dist/axe-result-types.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AxeScanResultsHashable = void 0;
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
class AxeScanResultsHashable extends common_1.HashSet {
}
exports.AxeScanResultsHashable = AxeScanResultsHashable;
//# sourceMappingURL=axe-result-types.js.map

/***/ }),

/***/ "../axe-result-converter/dist/axe-results-reducer.js":
/*!***********************************************************!*\
  !*** ../axe-result-converter/dist/axe-results-reducer.js ***!
  \***********************************************************/
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
exports.AxeResultsReducer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
/* eslint-disable @typescript-eslint/no-explicit-any */
let AxeResultsReducer = class AxeResultsReducer {
    constructor(hashGenerator) {
        this.hashGenerator = hashGenerator;
    }
    reduce(accumulatedAxeResults, currentAxeResults) {
        this.setUrl(accumulatedAxeResults, currentAxeResults);
        this.reduceResults(currentAxeResults.url, accumulatedAxeResults.violations, currentAxeResults.violations);
        this.reduceResults(currentAxeResults.url, accumulatedAxeResults.passes, currentAxeResults.passes);
        this.reduceResults(currentAxeResults.url, accumulatedAxeResults.incomplete, currentAxeResults.incomplete);
        this.reduceResultsWithoutNodes(currentAxeResults.url, accumulatedAxeResults.inapplicable, currentAxeResults.inapplicable);
    }
    reduceResults(url, accumulatedResults, currentResults) {
        if (currentResults) {
            for (const currentResult of currentResults) {
                if (currentResult) {
                    for (const node of currentResult.nodes) {
                        if (node) {
                            const selectors = this.getElementSelectors(node);
                            const fingerprint = this.getElementFingerprint(currentResult, node, selectors);
                            const matchingResult = accumulatedResults.get(fingerprint);
                            if (matchingResult !== undefined) {
                                if (!matchingResult.urls.some((u) => u === url)) {
                                    matchingResult.urls.push(url);
                                }
                            }
                            else {
                                const result = {
                                    ...currentResult,
                                    nodes: [],
                                    urls: [url],
                                    junctionNode: {
                                        ...node,
                                        selectors,
                                    },
                                    fingerprint,
                                };
                                accumulatedResults.add(fingerprint, result);
                            }
                        }
                    }
                }
            }
        }
    }
    reduceResultsWithoutNodes(url, accumulatedResults, currentResults) {
        if (currentResults) {
            for (const currentResult of currentResults) {
                if (currentResult) {
                    const fingerprint = this.hashGenerator.generateBase64Hash(currentResult.id);
                    const matchingResult = accumulatedResults.get(fingerprint);
                    if (matchingResult !== undefined) {
                        if (!matchingResult.urls.some((u) => u === url)) {
                            matchingResult.urls.push(url);
                        }
                    }
                    else {
                        const result = {
                            ...currentResult,
                            nodes: [],
                            urls: [url],
                            fingerprint,
                        };
                        accumulatedResults.add(fingerprint, result);
                    }
                }
            }
        }
    }
    getElementFingerprint(result, node, selectors) {
        return this.hashGenerator.generateBase64Hash(result.id, node.html, ...selectors.map((s) => s.selector));
    }
    getElementSelectors(node) {
        const selectors = [{ selector: node.target.join(';'), type: 'css' }];
        if (node.xpath) {
            const xpath = node.xpath.join(';');
            selectors.push({ selector: xpath, type: 'xpath' });
        }
        return selectors;
    }
    setUrl(accumulatedAxeResults, currentAxeResults) {
        if (accumulatedAxeResults.urls) {
            if (!accumulatedAxeResults.urls.some((url) => url === currentAxeResults.url)) {
                accumulatedAxeResults.urls.push(currentAxeResults.url);
            }
        }
        else {
            accumulatedAxeResults.urls = [currentAxeResults.url];
        }
    }
};
AxeResultsReducer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(common_1.HashGenerator)),
    __metadata("design:paramtypes", [common_1.HashGenerator])
], AxeResultsReducer);
exports.AxeResultsReducer = AxeResultsReducer;
//# sourceMappingURL=axe-results-reducer.js.map

/***/ }),

/***/ "../axe-result-converter/dist/combined-report-data-converter.js":
/*!**********************************************************************!*\
  !*** ../axe-result-converter/dist/combined-report-data-converter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedReportDataConverter = void 0;
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
let CombinedReportDataConverter = class CombinedReportDataConverter {
    convert(axeResults, scanResultData) {
        const handledRuleIds = new common_1.HashSet();
        const failed = this.getFailureData(axeResults.violations);
        this.addRuleIdsFromFailures(handledRuleIds, failed);
        const passed = this.getAxeRuleData(axeResults.passes, handledRuleIds);
        this.addRuleIdsFromRuleData(handledRuleIds, passed);
        const inapplicable = this.getAxeRuleData(axeResults.inapplicable, handledRuleIds);
        const failedByRule = this.groupFailureDataByRule(failed);
        const resultCounts = {
            failedUrls: scanResultData.urlCount.failed,
            passedUrls: scanResultData.urlCount.passed,
            unscannableUrls: scanResultData.urlCount.total - (scanResultData.urlCount.failed + scanResultData.urlCount.passed),
        };
        return {
            serviceName: scanResultData.scanEngineName,
            axeVersion: scanResultData.axeCoreVersion,
            userAgent: scanResultData.browserUserAgent,
            scanDetails: {
                baseUrl: scanResultData.baseUrl,
                basePageTitle: scanResultData.basePageTitle,
                scanStart: scanResultData.scanStarted,
                scanComplete: scanResultData.scanEnded,
                durationSeconds: (scanResultData.scanEnded.valueOf() - scanResultData.scanStarted.valueOf()) / 1000,
            },
            results: {
                urlResults: resultCounts,
                resultsByRule: {
                    failed: failedByRule,
                    passed: passed,
                    notApplicable: inapplicable,
                },
            },
        };
    }
    groupFailureDataByRule(failureData) {
        const failuresGroup = [];
        if (failureData) {
            const failuresByRule = lodash_1.default.groupBy(failureData, (failure) => failure.rule.ruleId.toLowerCase());
            Object.keys(failuresByRule).map((rule) => {
                failuresGroup.push({
                    key: rule,
                    failed: failuresByRule[rule].sort(this.compareFailureData),
                });
            });
        }
        return this.sortFailuresGroups(failuresGroup);
    }
    getFailureData(results) {
        const failureData = [];
        if (!results) {
            return failureData;
        }
        for (const result of results) {
            if (result) {
                failureData.push({
                    urls: result.urls,
                    elementSelector: this.getElementSelector(result.junctionNode),
                    snippet: result.junctionNode.html,
                    fix: this.getNodeResult(result.junctionNode),
                    rule: this.getAxeRuleDataForResult(result),
                });
            }
        }
        return failureData;
    }
    getAxeRuleData(results, excludeRuleIds) {
        const axeRuleData = new common_1.HashSet();
        if (results) {
            for (const result of results) {
                if (result) {
                    if (!axeRuleData.has(result.id) && !excludeRuleIds.has(result.id)) {
                        axeRuleData.add(result.id, this.getAxeRuleDataForResult(result));
                    }
                }
            }
        }
        return axeRuleData.values().sort(this.compareAxeRuleData);
    }
    getNodeResult(node) {
        if (node) {
            return {
                any: this.getNodeCheckResults(node.any),
                all: this.getNodeCheckResults(node.all),
                none: this.getNodeCheckResults(node.none),
                failureSummary: node.failureSummary,
            };
        }
        return undefined;
    }
    getNodeCheckResults(nodeCheckResults) {
        const checkResults = [];
        if (nodeCheckResults) {
            for (const nodeCheckResult of nodeCheckResults) {
                checkResults.push({
                    id: nodeCheckResult === null || nodeCheckResult === void 0 ? void 0 : nodeCheckResult.id,
                    message: nodeCheckResult === null || nodeCheckResult === void 0 ? void 0 : nodeCheckResult.message,
                    data: nodeCheckResult === null || nodeCheckResult === void 0 ? void 0 : nodeCheckResult.data,
                });
            }
        }
        return checkResults;
    }
    getAxeRuleDataForResult(result) {
        if (result) {
            return {
                ruleId: result.id,
                tags: result.tags,
                description: result.description,
                ruleUrl: result.helpUrl,
            };
        }
        return undefined;
    }
    getElementSelector(node) {
        var _a;
        if (node && node.selectors) {
            const css = node.selectors.find((selector) => selector.type === 'css');
            if (css) {
                return css.selector;
            }
            else {
                return (_a = node.selectors.find((selector) => selector.type === 'xpath')) === null || _a === void 0 ? void 0 : _a.selector;
            }
        }
        return undefined;
    }
    sortFailuresGroups(failuresGroups) {
        let sortableFailuresGroups = failuresGroups.map((failuresGroup) => {
            let instancesCount = 0;
            if (failuresGroup.failed) {
                failuresGroup.failed.forEach((failureData) => {
                    instancesCount += failureData.urls.length;
                });
            }
            return { failuresGroup, instancesCount };
        });
        sortableFailuresGroups = sortableFailuresGroups.sort(this.compareFailureGroup);
        return sortableFailuresGroups.map((sortable) => sortable.failuresGroup);
    }
    compareFailureGroup(group1, group2) {
        if (group1.instancesCount < group2.instancesCount) {
            return 1;
        }
        if (group1.instancesCount > group2.instancesCount) {
            return -1;
        }
        return 0;
    }
    compareFailureData(data1, data2) {
        if (data1.urls.length !== data2.urls.length) {
            return data2.urls.length - data1.urls.length;
        }
        if (data1.urls[0] > data2.urls[0]) {
            return 1;
        }
        if (data1.urls[0] < data2.urls[0]) {
            return -1;
        }
        return 0;
    }
    compareAxeRuleData(data1, data2) {
        if (data1.ruleId > data2.ruleId) {
            return 1;
        }
        if (data1.ruleId < data2.ruleId) {
            return -1;
        }
        return 0;
    }
    addRuleIdsFromFailures(ruleIds, failureData) {
        failureData.forEach((failure) => {
            const ruleId = failure.rule.ruleId;
            ruleIds.add(ruleId, ruleId);
        });
    }
    addRuleIdsFromRuleData(ruleIds, passedRuleData) {
        passedRuleData.forEach((passedRule) => {
            ruleIds.add(passedRule.ruleId, passedRule.ruleId);
        });
    }
};
CombinedReportDataConverter = __decorate([
    inversify_1.injectable()
], CombinedReportDataConverter);
exports.CombinedReportDataConverter = CombinedReportDataConverter;
//# sourceMappingURL=combined-report-data-converter.js.map

/***/ }),

/***/ "../axe-result-converter/dist/index.js":
/*!*********************************************!*\
  !*** ../axe-result-converter/dist/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinedReportDataConverter = exports.AxeResultsReducer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
__exportStar(__webpack_require__(/*! ./axe-result-types */ "../axe-result-converter/dist/axe-result-types.js"), exports);
__exportStar(__webpack_require__(/*! ./scan-result-data */ "../axe-result-converter/dist/scan-result-data.js"), exports);
var axe_results_reducer_1 = __webpack_require__(/*! ./axe-results-reducer */ "../axe-result-converter/dist/axe-results-reducer.js");
Object.defineProperty(exports, "AxeResultsReducer", { enumerable: true, get: function () { return axe_results_reducer_1.AxeResultsReducer; } });
var combined_report_data_converter_1 = __webpack_require__(/*! ./combined-report-data-converter */ "../axe-result-converter/dist/combined-report-data-converter.js");
Object.defineProperty(exports, "CombinedReportDataConverter", { enumerable: true, get: function () { return combined_report_data_converter_1.CombinedReportDataConverter; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../axe-result-converter/dist/scan-result-data.js":
/*!********************************************************!*\
  !*** ../axe-result-converter/dist/scan-result-data.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=scan-result-data.js.map

/***/ }),

/***/ "../common/dist/body-parser.js":
/*!*************************************!*\
  !*** ../common/dist/body-parser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyParser = void 0;
const raw_body_1 = __importDefault(__webpack_require__(/*! raw-body */ "raw-body"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let BodyParser = class BodyParser {
    async getRawBody(stream, options) {
        return raw_body_1.default(stream, options);
    }
};
BodyParser = __decorate([
    inversify_1.injectable()
], BodyParser);
exports.BodyParser = BodyParser;
//# sourceMappingURL=body-parser.js.map

/***/ }),

/***/ "../common/dist/build-utilities/monorepo-packages.js":
/*!***********************************************************!*\
  !*** ../common/dist/build-utilities/monorepo-packages.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMonorepoPackageNames = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const path = __importStar(__webpack_require__(/*! path */ "path"));
/* eslint-disable security/detect-non-literal-fs-filename */
function listMonorepoPackageNames() {
    const packagesDir = path.join(__dirname, '../../../');
    const packageDirNames = fs.readdirSync(packagesDir);
    return packageDirNames
        .map((dirName) => {
        const packageJsonPath = path.join(packagesDir, dirName, 'package.json');
        if (!fs.existsSync(packageJsonPath)) {
            return null;
        }
        return JSON.parse(fs.readFileSync(packageJsonPath).toString()).name;
    })
        .filter((name) => name != null);
}
exports.listMonorepoPackageNames = listMonorepoPackageNames;
//# sourceMappingURL=monorepo-packages.js.map

/***/ }),

/***/ "../common/dist/ciphers/hash-generator.js":
/*!************************************************!*\
  !*** ../common/dist/ciphers/hash-generator.js ***!
  \************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashGenerator = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const fnv1a_1 = __importDefault(__webpack_require__(/*! @sindresorhus/fnv1a */ "@sindresorhus/fnv1a"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const jump_consistent_hash_1 = __webpack_require__(/*! ./jump-consistent-hash */ "../common/dist/ciphers/jump-consistent-hash.js");
const shajs = __webpack_require__(/*! sha.js */ "sha.js");
let HashGenerator = class HashGenerator {
    constructor(shaObj = shajs) {
        this.shaObj = shaObj;
    }
    getWebsiteScanResultDocumentId(baseUrl, scanGroupId) {
        // Preserve parameters order below for the hash generation compatibility
        return this.generateBase64Hash(baseUrl, scanGroupId);
    }
    getDbHashBucket(prefix, ...values) {
        // Changing buckets count will affect bucket generation of the same values
        return this.getHashBucket(prefix, 1000, ...values);
    }
    getHashBucket(prefix, buckets, ...values) {
        const hashSeed = values.join('|').toLowerCase();
        const hash = fnv1a_1.default(hashSeed);
        const hashGenerator = new jump_consistent_hash_1.JumpConsistentHash();
        const bucket = hashGenerator.getBucket(hash, buckets);
        return `${prefix}-${bucket}`;
    }
    generateBase64Hash(...values) {
        const hashSeed = values.join('|').toLowerCase();
        return this.shaObj('sha256').update(hashSeed).digest('hex');
    }
};
HashGenerator = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object])
], HashGenerator);
exports.HashGenerator = HashGenerator;
//# sourceMappingURL=hash-generator.js.map

/***/ }),

/***/ "../common/dist/ciphers/jump-consistent-hash.js":
/*!******************************************************!*\
  !*** ../common/dist/ciphers/jump-consistent-hash.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.JumpConsistentHash = void 0;
/* eslint-disable @typescript-eslint/restrict-plus-operands, no-bitwise */
/**
 * Based on whitepaper 'A Fast, Minimal Memory, Consistent Hash Algorithm' https://arxiv.org/abs/1406.2294
 */
class JumpConsistentHash {
    getBucket(key, buckets) {
        let keyBigInt = BigInt(key);
        let b = -1n;
        let j = 0n;
        const div = 2n ** 64n;
        while (j < buckets) {
            b = j;
            keyBigInt = ((keyBigInt * 2862933555777941757n) % div) + 1n;
            j = BigInt(Math.floor(((Number(b) + 1) * Number(1n << 31n)) / Number((keyBigInt >> 33n) + 1n)));
        }
        return Number(b);
    }
}
exports.JumpConsistentHash = JumpConsistentHash;
//# sourceMappingURL=jump-consistent-hash.js.map

/***/ }),

/***/ "../common/dist/common-ioc-types.js":
/*!******************************************!*\
  !*** ../common/dist/common-ioc-types.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonIocTypes = void 0;
exports.commonIocTypes = {
    Process: 'Process',
};
//# sourceMappingURL=common-ioc-types.js.map

/***/ }),

/***/ "../common/dist/configuration/service-configuration.js":
/*!*************************************************************!*\
  !*** ../common/dist/configuration/service-configuration.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ServiceConfiguration_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceConfiguration = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const convict_1 = __importDefault(__webpack_require__(/*! convict */ "convict"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let ServiceConfiguration = ServiceConfiguration_1 = class ServiceConfiguration {
    constructor(fileSystem = fs, convictModule = convict_1.default) {
        this.fileSystem = fileSystem;
        this.convictModule = convictModule;
    }
    async getConfigValue(key) {
        const config = await this.getConvictConfig();
        return config.get(key);
    }
    getAzureResourceName(sourceResourceType, sourceResourceName, targetResourceType) {
        // Expected resource name format ally<resourceType><resourceGroupSuffix>
        return sourceResourceName.replace(sourceResourceType, targetResourceType);
    }
    async getConvictConfig() {
        if (lodash_1.isNil(this.loadConfigPromise)) {
            this.loadConfigPromise = new Promise((resolve, reject) => {
                const config = this.convictModule(this.getRuntimeConfigSchema());
                // eslint-disable-next-line security/detect-non-literal-fs-filename
                this.fileSystem.exists(ServiceConfiguration_1.profilePath, (exists) => {
                    if (exists === true) {
                        config.loadFile(ServiceConfiguration_1.profilePath);
                        config.validate({ allowed: 'strict' });
                    }
                    else {
                        console.log(`Unable to load custom configuration. Using default config  - ${config}`);
                    }
                    resolve(config);
                });
            });
        }
        return this.loadConfigPromise;
    }
    getRuntimeConfigSchema() {
        return {
            featureFlags: {
                sendNotification: {
                    format: 'Boolean',
                    default: false,
                    doc: 'Property to decide if we should notify after scan completed.',
                },
            },
            logConfig: {
                logInConsole: {
                    format: 'Boolean',
                    default: true,
                    doc: 'Property to decide if console logging is enabled',
                },
            },
            queueConfig: {
                maxQueueSize: {
                    format: 'int',
                    default: 10,
                    doc: 'Maximum message count in scan request queue.',
                },
                maxDequeueCount: {
                    format: 'int',
                    default: 2,
                    doc: 'Maximum number of times message can be dequeued from a storage queue.',
                },
                messageVisibilityTimeoutInSeconds: {
                    format: 'int',
                    default: 300,
                    doc: 'Message visibility timeout in seconds. Must correlate with taskTimeoutInMinutes config value.',
                },
            },
            taskConfig: {
                taskTimeoutInMinutes: {
                    format: 'int',
                    default: 5,
                    doc: 'Timeout value after which the task has to be terminated. Must correlate with messageVisibilityTimeoutInSeconds config value.',
                },
                retentionTimeInDays: {
                    format: 'int',
                    default: 3,
                    doc: 'The minimum time to retain the working directory for the task on the compute node where it ran, from the time it completes execution. After this time, the Batch service may delete the working directory and all its contents.',
                },
                maxTaskRetryCount: {
                    format: 'int',
                    default: 2,
                    doc: 'The maximum number of times the task may be retried.',
                },
            },
            jobManagerConfig: {
                activeToRunningTasksRatio: {
                    format: Number,
                    default: 3,
                    // eslint-disable-next-line max-len
                    doc: `The target overload ratio of queued to running tasks. Higher ratio value will result higher queued tasks count.`,
                },
                addTasksIntervalInSeconds: {
                    format: 'int',
                    default: 20,
                    doc: 'The time interval at which a job manager adds tasks to the job.',
                },
                maxWallClockTimeInHours: {
                    format: 'int',
                    default: 1,
                    doc: 'The amount of time the job manager instance will run continuously.',
                },
                sendNotificationTasksCount: {
                    format: 'int',
                    default: 100,
                    doc: 'Number of scan notification tasks that can be in active/running state',
                },
                scanRunnerTaskImageName: {
                    format: 'String',
                    default: 'batch-scan-runner',
                    doc: 'The Docker image name used for task creation.',
                },
                sendNotificationTaskImageName: {
                    format: 'String',
                    default: 'batch-scan-notification-runner',
                    doc: 'The Docker image name used for task creation.',
                },
            },
            scanConfig: {
                minLastReferenceSeenInDays: {
                    format: 'int',
                    default: 3,
                    doc: 'Minimum days since we last saw a page. Pages older than this time will not be scanned.',
                },
                pageRescanIntervalInDays: {
                    format: 'int',
                    default: 3,
                    doc: 'Minimum days since we last scanned. Pages newer than this time will not be scanned.',
                },
                failedPageRescanIntervalInHours: {
                    format: 'int',
                    default: 3,
                    doc: 'Minimum hours since the last scan failed. Pages newer than this time will not be scanned.',
                },
                maxScanRetryCount: {
                    format: 'int',
                    default: 3,
                    doc: 'Maximum number of retries allowed for a page scan',
                },
                maxSendNotificationRetryCount: {
                    format: 'int',
                    default: 5,
                    doc: 'Maximum number of retries allowed for a scan notification sending',
                },
                scanTimeoutInMin: {
                    default: 3,
                    format: 'int',
                    doc: 'Maximum allowed time for scanning a web page in minutes',
                },
            },
            restApiConfig: {
                maxScanRequestBatchCount: {
                    format: 'int',
                    default: 250,
                    doc: 'Maximum number of scan requests in a single HTTP client request.',
                },
                scanRequestProcessingDelayInSeconds: {
                    format: 'int',
                    default: 15,
                    doc: 'The scan request processing delay interval in seconds for a new submitted request.',
                },
                minScanPriorityValue: {
                    format: 'int',
                    default: -1000,
                    doc: 'Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority.\
                        This range correlates with Azure Batch pool task priority range.',
                },
                maxScanPriorityValue: {
                    format: 'int',
                    default: 1000,
                    doc: 'Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority.\
                        This range correlates with Azure Batch pool task priority range.',
                },
            },
            availabilityTestConfig: {
                urlToScan: {
                    format: 'String',
                    default: 'https://www.washington.edu/accesscomputing/AU/before.html',
                    doc: 'Url to scan for availability testing',
                },
                consolidatedReportId: {
                    format: 'String',
                    default: 'e2e-consolidated-report-id',
                    doc: 'The id for the consolidated report',
                },
                maxScanWaitTimeInSeconds: {
                    format: 'int',
                    default: 900,
                    doc: 'Maximum wait time for fetching scan status of the submitted request',
                },
                scanWaitIntervalInSeconds: {
                    format: 'int',
                    default: 60,
                    doc: 'Time to wait before checking the url scan status again',
                },
                logQueryTimeRange: {
                    format: String,
                    default: 'P1D',
                    doc: 'The Application Insights query time range',
                },
                environmentDefinition: {
                    format: String,
                    default: 'canary',
                    doc: 'The environment definition used to select tests to run',
                },
            },
        };
    }
};
ServiceConfiguration.profilePath = `${__dirname}/runtime-config.json`;
ServiceConfiguration = ServiceConfiguration_1 = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object, Object])
], ServiceConfiguration);
exports.ServiceConfiguration = ServiceConfiguration;
//# sourceMappingURL=service-configuration.js.map

/***/ }),

/***/ "../common/dist/dependency-injection/setup-singleton-provider.js":
/*!***********************************************************************!*\
  !*** ../common/dist/dependency-injection/setup-singleton-provider.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IoC = void 0;
const system_1 = __webpack_require__(/*! ../system/system */ "../common/dist/system/system.js");
var IoC;
(function (IoC) {
    function setupSingletonProvider(key, container, factory) {
        let singletonInstancePromise;
        container.bind(key).toProvider((context) => {
            return async () => {
                singletonInstancePromise = system_1.System.createInstanceIfNil(singletonInstancePromise, async () => {
                    return factory(context);
                });
                return singletonInstancePromise;
            };
        });
    }
    IoC.setupSingletonProvider = setupSingletonProvider;
})(IoC = exports.IoC || (exports.IoC = {}));
//# sourceMappingURL=setup-singleton-provider.js.map

/***/ }),

/***/ "../common/dist/hash-set.js":
/*!**********************************!*\
  !*** ../common/dist/hash-set.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashSet = void 0;
class HashSet {
    constructor() {
        this.hashDictionary = {};
        this.pointer = 0;
    }
    add(key, value) {
        this.hashDictionary[key] = value;
    }
    get(key) {
        return this.hashDictionary[key];
    }
    remove(key) {
        // eslint-disable-next-line @typescript-eslint/tslint/config
        delete this.hashDictionary[key];
    }
    has(key) {
        return this.hashDictionary[key] !== undefined;
    }
    keys() {
        return Object.keys(this.hashDictionary);
    }
    values() {
        return Array.from(this);
    }
    next() {
        if (this.keysSnapshot === undefined) {
            this.getSnapshot();
        }
        if (this.pointer < this.keysSnapshot.length) {
            return {
                done: false,
                value: this.get(this.keysSnapshot[this.pointer++]),
            };
        }
        else {
            this.keysSnapshot = undefined;
            return {
                done: true,
                value: undefined,
            };
        }
    }
    [Symbol.iterator]() {
        return this;
    }
    serialize() {
        this.getSnapshot();
        return {
            hashDictionary: this.hashDictionary,
        };
    }
    static deserialize(serialized) {
        const hashSet = new HashSet();
        hashSet.hashDictionary = serialized.hashDictionary;
        return hashSet;
    }
    getSnapshot() {
        this.pointer = 0;
        this.keysSnapshot = this.keys();
    }
}
exports.HashSet = HashSet;
//# sourceMappingURL=hash-set.js.map

/***/ }),

/***/ "../common/dist/index.js":
/*!*******************************!*\
  !*** ../common/dist/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMonorepoPackageNames = exports.BodyParser = exports.HashSet = exports.getSerializableResponse = exports.getForeverAgents = exports.RetryHelper = exports.PromiseUtils = exports.commonIocTypes = exports.EnvironmentSettings = exports.setupRuntimeConfigContainer = exports.Url = exports.GuidGenerator = exports.System = exports.IoC = exports.HashGenerator = exports.WhyNodeRunningLogger = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var why_node_running_logger_1 = __webpack_require__(/*! ./why-node-running-logger */ "../common/dist/why-node-running-logger.js");
Object.defineProperty(exports, "WhyNodeRunningLogger", { enumerable: true, get: function () { return why_node_running_logger_1.WhyNodeRunningLogger; } });
var hash_generator_1 = __webpack_require__(/*! ./ciphers/hash-generator */ "../common/dist/ciphers/hash-generator.js");
Object.defineProperty(exports, "HashGenerator", { enumerable: true, get: function () { return hash_generator_1.HashGenerator; } });
var setup_singleton_provider_1 = __webpack_require__(/*! ./dependency-injection/setup-singleton-provider */ "../common/dist/dependency-injection/setup-singleton-provider.js");
Object.defineProperty(exports, "IoC", { enumerable: true, get: function () { return setup_singleton_provider_1.IoC; } });
var system_1 = __webpack_require__(/*! ./system/system */ "../common/dist/system/system.js");
Object.defineProperty(exports, "System", { enumerable: true, get: function () { return system_1.System; } });
var guid_generator_1 = __webpack_require__(/*! ./system/guid-generator */ "../common/dist/system/guid-generator.js");
Object.defineProperty(exports, "GuidGenerator", { enumerable: true, get: function () { return guid_generator_1.GuidGenerator; } });
var url_1 = __webpack_require__(/*! ./system/url */ "../common/dist/system/url.js");
Object.defineProperty(exports, "Url", { enumerable: true, get: function () { return url_1.Url; } });
__exportStar(__webpack_require__(/*! ./configuration/service-configuration */ "../common/dist/configuration/service-configuration.js"), exports);
var setup_runtime_config_container_1 = __webpack_require__(/*! ./setup-runtime-config-container */ "../common/dist/setup-runtime-config-container.js");
Object.defineProperty(exports, "setupRuntimeConfigContainer", { enumerable: true, get: function () { return setup_runtime_config_container_1.setupRuntimeConfigContainer; } });
var environment_settings_1 = __webpack_require__(/*! ./system/environment-settings */ "../common/dist/system/environment-settings.js");
Object.defineProperty(exports, "EnvironmentSettings", { enumerable: true, get: function () { return environment_settings_1.EnvironmentSettings; } });
var common_ioc_types_1 = __webpack_require__(/*! ./common-ioc-types */ "../common/dist/common-ioc-types.js");
Object.defineProperty(exports, "commonIocTypes", { enumerable: true, get: function () { return common_ioc_types_1.commonIocTypes; } });
var promise_utils_1 = __webpack_require__(/*! ./system/promise-utils */ "../common/dist/system/promise-utils.js");
Object.defineProperty(exports, "PromiseUtils", { enumerable: true, get: function () { return promise_utils_1.PromiseUtils; } });
var retry_helper_1 = __webpack_require__(/*! ./system/retry-helper */ "../common/dist/system/retry-helper.js");
Object.defineProperty(exports, "RetryHelper", { enumerable: true, get: function () { return retry_helper_1.RetryHelper; } });
var forever_agents_1 = __webpack_require__(/*! ./web-requests/forever-agents */ "../common/dist/web-requests/forever-agents.js");
Object.defineProperty(exports, "getForeverAgents", { enumerable: true, get: function () { return forever_agents_1.getForeverAgents; } });
var serializable_response_1 = __webpack_require__(/*! ./web-requests/serializable-response */ "../common/dist/web-requests/serializable-response.js");
Object.defineProperty(exports, "getSerializableResponse", { enumerable: true, get: function () { return serializable_response_1.getSerializableResponse; } });
var hash_set_1 = __webpack_require__(/*! ./hash-set */ "../common/dist/hash-set.js");
Object.defineProperty(exports, "HashSet", { enumerable: true, get: function () { return hash_set_1.HashSet; } });
var body_parser_1 = __webpack_require__(/*! ./body-parser */ "../common/dist/body-parser.js");
Object.defineProperty(exports, "BodyParser", { enumerable: true, get: function () { return body_parser_1.BodyParser; } });
var monorepo_packages_1 = __webpack_require__(/*! ./build-utilities/monorepo-packages */ "../common/dist/build-utilities/monorepo-packages.js");
Object.defineProperty(exports, "listMonorepoPackageNames", { enumerable: true, get: function () { return monorepo_packages_1.listMonorepoPackageNames; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../common/dist/setup-runtime-config-container.js":
/*!********************************************************!*\
  !*** ../common/dist/setup-runtime-config-container.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRuntimeConfigContainer = void 0;
const service_configuration_1 = __webpack_require__(/*! ./configuration/service-configuration */ "../common/dist/configuration/service-configuration.js");
const guid_generator_1 = __webpack_require__(/*! ./system/guid-generator */ "../common/dist/system/guid-generator.js");
function setupRuntimeConfigContainer(container) {
    container.bind(service_configuration_1.ServiceConfiguration).toSelf().inSingletonScope();
    container.bind(guid_generator_1.GuidGenerator).toSelf().inSingletonScope();
}
exports.setupRuntimeConfigContainer = setupRuntimeConfigContainer;
//# sourceMappingURL=setup-runtime-config-container.js.map

/***/ }),

/***/ "../common/dist/system/environment-settings.js":
/*!*****************************************************!*\
  !*** ../common/dist/system/environment-settings.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentSettings = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const common_ioc_types_1 = __webpack_require__(/*! ../common-ioc-types */ "../common/dist/common-ioc-types.js");
const system_1 = __webpack_require__(/*! ./system */ "../common/dist/system/system.js");
let EnvironmentSettings = class EnvironmentSettings {
    constructor(currentProcess) {
        this.currentProcess = currentProcess;
    }
    tryGetValue(key) {
        return this.currentProcess.env[key];
    }
    getValue(key) {
        const value = this.tryGetValue(key);
        if (system_1.System.isNullOrEmptyString(value)) {
            throw new Error(`Unable to get environment property value for ${key}`);
        }
        return value;
    }
};
EnvironmentSettings = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(common_ioc_types_1.commonIocTypes.Process)),
    __metadata("design:paramtypes", [Object])
], EnvironmentSettings);
exports.EnvironmentSettings = EnvironmentSettings;
//# sourceMappingURL=environment-settings.js.map

/***/ }),

/***/ "../common/dist/system/guid-generator.js":
/*!***********************************************!*\
  !*** ../common/dist/system/guid-generator.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuidGenerator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
// @ts-ignore
const uuid = __importStar(__webpack_require__(/*! uuid-with-v6 */ "uuid-with-v6"));
/**
 * UUID RFC 4122 https://tools.ietf.org/html/rfc4122
 */
let GuidGenerator = class GuidGenerator {
    /**
     * Creates new UUID version 6.
     */
    createGuid() {
        return uuid.v6();
    }
    /**
     * Creates UUID with the same UUID node part (the last 12 bytes) as base UUID.
     * @param baseGuid The UUID to match the UUID node with.
     */
    createGuidFromBaseGuid(baseGuid) {
        const guid = uuid.v6();
        const guidNode = this.getGuidNode(baseGuid);
        return `${guid.substr(0, 24)}${guidNode}`;
    }
    /**
     * Returns the UUID node part (the last 12 bytes).
     * @param guid The UUID to get node part from.
     */
    getGuidNode(guid) {
        return guid.replace(new RegExp('-', 'g'), '').substr(20, 12);
    }
    /**
     * Returns the UUID timestamp.
     * @param guid The UUID to get the timestamp part from.
     */
    getGuidTimestamp(guid) {
        const guidValue = guid.replace('-', '');
        if (guidValue.substr(13, 1) !== '6') {
            throw new Error('Only version 6 of UUID is supported.');
        }
        const timestampMilliseconds = BigInt(`0x${guidValue.substr(0, 12)}${guidValue.substr(14, 3)}`) / 10000n;
        const baseDate = BigInt(Math.abs(new Date(Date.UTC(1582, 9, 15)).valueOf()));
        return new Date(Number(timestampMilliseconds - baseDate));
    }
    /**
     * Returns if input string is a valid version 6 UUID.
     * @param guid The UUID to validate.
     */
    isValidV6Guid(guid) {
        const guidV6Regex = new RegExp(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-6[0-9a-fA-F]{3}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);
        return guidV6Regex.test(guid);
    }
};
GuidGenerator = __decorate([
    inversify_1.injectable()
], GuidGenerator);
exports.GuidGenerator = GuidGenerator;
//# sourceMappingURL=guid-generator.js.map

/***/ }),

/***/ "../common/dist/system/promise-utils.js":
/*!**********************************************!*\
  !*** ../common/dist/system/promise-utils.js ***!
  \**********************************************/
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
exports.PromiseUtils = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let PromiseUtils = class PromiseUtils {
    constructor(globalObj = global) {
        this.globalObj = globalObj;
    }
    async waitFor(fn, timeoutInMSec, onTimeoutCallback) {
        let timeoutHandle;
        let hasTimedOut = false;
        const timeoutPromise = new Promise((resolve) => {
            timeoutHandle = this.globalObj.setTimeout(() => {
                hasTimedOut = true;
                resolve();
            }, timeoutInMSec);
        });
        const racePromise = Promise.race([fn, timeoutPromise]);
        try {
            await racePromise;
        }
        finally {
            this.globalObj.clearTimeout(timeoutHandle);
        }
        if (hasTimedOut) {
            return onTimeoutCallback();
        }
        return fn;
    }
};
PromiseUtils = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object])
], PromiseUtils);
exports.PromiseUtils = PromiseUtils;
//# sourceMappingURL=promise-utils.js.map

/***/ }),

/***/ "../common/dist/system/retry-helper.js":
/*!*********************************************!*\
  !*** ../common/dist/system/retry-helper.js ***!
  \*********************************************/
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
exports.RetryHelper = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
async function defaultSleepFunction(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
let RetryHelper = class RetryHelper {
    constructor(sleepFunction = defaultSleepFunction) {
        this.sleepFunction = sleepFunction;
    }
    async executeWithRetries(action, onRetry, maxRetryCount, retryIntervalMilliseconds = 0) {
        let lastError;
        for (let i = 0; i < maxRetryCount; i += 1) {
            try {
                return await action();
            }
            catch (error) {
                lastError =
                    error instanceof Error ? error : { name: 'RetryError', message: JSON.stringify(error), stack: new Error().stack };
                if (i < maxRetryCount - 1) {
                    await onRetry(lastError);
                    if (retryIntervalMilliseconds > 0) {
                        await this.sleepFunction(retryIntervalMilliseconds * (i + 1));
                    }
                }
            }
        }
        throw lastError;
    }
};
RetryHelper = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Function])
], RetryHelper);
exports.RetryHelper = RetryHelper;
//# sourceMappingURL=retry-helper.js.map

/***/ }),

/***/ "../common/dist/system/system.js":
/*!***************************************!*\
  !*** ../common/dist/system/system.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const crypto = __importStar(__webpack_require__(/*! crypto */ "crypto"));
const utils = __importStar(__webpack_require__(/*! util */ "util"));
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const serialize_error_1 = __webpack_require__(/*! serialize-error */ "serialize-error");
/* eslint-disable @typescript-eslint/no-explicit-any */
var System;
(function (System) {
    function createInstanceIfNil(instance, factory) {
        if (lodash_1.isNil(instance)) {
            return factory();
        }
        return instance;
    }
    System.createInstanceIfNil = createInstanceIfNil;
    function isNullOrEmptyString(str) {
        return lodash_1.isNil(str) || str.length === 0;
    }
    System.isNullOrEmptyString = isNullOrEmptyString;
    function chunkArray(sourceArray, chunkSize) {
        const chunks = [];
        for (let index = 0; index < sourceArray.length; index += chunkSize) {
            chunks.push(sourceArray.slice(index, index + chunkSize));
        }
        return chunks;
    }
    System.chunkArray = chunkArray;
    async function wait(timeoutMillisecond) {
        await new Promise((resolve) => setTimeout(resolve, timeoutMillisecond));
    }
    System.wait = wait;
    function createRandomString(length = 32) {
        const bytes = length % 2 === 0 ? length / 2 : (length + 1) / 2;
        return crypto.randomBytes(bytes).toString('hex').substr(0, length);
    }
    System.createRandomString = createRandomString;
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    function serializeError(error) {
        return utils.inspect(serialize_error_1.serializeError(error), false, null);
    }
    System.serializeError = serializeError;
})(System = exports.System || (exports.System = {}));
//# sourceMappingURL=system.js.map

/***/ }),

/***/ "../common/dist/system/url.js":
/*!************************************!*\
  !*** ../common/dist/system/url.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const nodeUrl = __importStar(__webpack_require__(/*! url */ "url"));
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
var Url;
(function (Url) {
    function tryParseUrlString(url, absoluteUrlOnly = true) {
        try {
            const urlParsed = nodeUrl.parse(url);
            if (absoluteUrlOnly && lodash_1.isNil(urlParsed.protocol)) {
                return undefined;
            }
            return urlParsed;
        }
        catch (error) {
            return undefined;
        }
    }
    Url.tryParseUrlString = tryParseUrlString;
    function getRootUrl(url) {
        let rootUrl = url.trim();
        const lastSlashPos = rootUrl.lastIndexOf('/');
        rootUrl = rootUrl.substr(0, lastSlashPos + 1);
        return rootUrl;
    }
    Url.getRootUrl = getRootUrl;
    function hasQueryParameters(url) {
        return url.indexOf('?') !== -1;
    }
    Url.hasQueryParameters = hasQueryParameters;
})(Url = exports.Url || (exports.Url = {}));
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "../common/dist/web-requests/forever-agents.js":
/*!*****************************************************!*\
  !*** ../common/dist/web-requests/forever-agents.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForeverAgents = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const http = __importStar(__webpack_require__(/*! http */ "http"));
const https = __importStar(__webpack_require__(/*! https */ "https"));
function getForeverAgents(HttpAgent = http.Agent, HttpsAgent = https.Agent) {
    return {
        http: new HttpAgent({ keepAlive: true }),
        https: new HttpsAgent({ keepAlive: true }),
    };
}
exports.getForeverAgents = getForeverAgents;
//# sourceMappingURL=forever-agents.js.map

/***/ }),

/***/ "../common/dist/web-requests/serializable-response.js":
/*!************************************************************!*\
  !*** ../common/dist/web-requests/serializable-response.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSerializableResponse = void 0;
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
function getSerializableResponse(response) {
    const serializable = {
        statusCode: response.statusCode,
        body: response.body,
        headers: response.headers,
    };
    if (!lodash_1.isNil(response.request)) {
        const requestOptions = response.request.options;
        serializable.request = {
            uri: requestOptions.url,
            method: requestOptions.method,
            headers: requestOptions.headers,
        };
    }
    return serializable;
}
exports.getSerializableResponse = getSerializableResponse;
//# sourceMappingURL=serializable-response.js.map

/***/ }),

/***/ "../common/dist/why-node-running-logger.js":
/*!*************************************************!*\
  !*** ../common/dist/why-node-running-logger.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WhyNodeRunningLogger = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const wtfnode_1 = __webpack_require__(/*! wtfnode */ "wtfnode");
class WhyNodeRunningLogger {
    constructor(globalObj = global) {
        this.globalObj = globalObj;
    }
    static logHandles() {
        WhyNodeRunningLogger.logMessage('Start logging node open handles.');
        wtfnode_1.dump();
        WhyNodeRunningLogger.logMessage('Stop logging node open handles.');
    }
    static logMessage(message) {
        console.log(`[TraceNodeOpenHandles] [${new Date().toUTCString()}] ${message}`);
    }
    log() {
        WhyNodeRunningLogger.logHandles();
    }
    async logAfterSeconds(timeoutInSeconds) {
        return new Promise((resolve) => {
            this.globalObj.setTimeout(() => {
                WhyNodeRunningLogger.logMessage(`Logging after ${timeoutInSeconds}`);
                WhyNodeRunningLogger.logHandles();
                resolve();
            }, timeoutInSeconds * 1000);
        });
    }
}
exports.WhyNodeRunningLogger = WhyNodeRunningLogger;
//# sourceMappingURL=why-node-running-logger.js.map

/***/ }),

/***/ "../crawler/dist/apify/apify-resource-creator.js":
/*!*******************************************************!*\
  !*** ../crawler/dist/apify/apify-resource-creator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApifyResourceCreator = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const apify_1 = __importDefault(__webpack_require__(/*! apify */ "apify"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const apify_settings_1 = __webpack_require__(/*! ../apify/apify-settings */ "../crawler/dist/apify/apify-settings.js");
/* eslint-disable */
let ApifyResourceCreator = class ApifyResourceCreator {
    constructor(apify = apify_1.default, settingsHandler = apify_settings_1.apifySettingsHandler, filesystem = fs) {
        this.apify = apify;
        this.settingsHandler = settingsHandler;
        this.filesystem = filesystem;
        this.requestQueueName = 'scanRequests';
    }
    async createRequestQueue(baseUrl, clear, inputUrls) {
        if (clear === true) {
            this.clearRequestQueue();
        }
        const requestQueue = await this.apify.openRequestQueue(this.requestQueueName);
        if (baseUrl) {
            await requestQueue.addRequest({ url: baseUrl.trim() });
        }
        await this.addUrlsFromList(requestQueue, inputUrls);
        return requestQueue;
    }
    async addUrlsFromList(requestQueue, inputUrls) {
        if (inputUrls === undefined) {
            return Promise.resolve();
        }
        for (const url of inputUrls) {
            await requestQueue.addRequest({ url: url }, { forefront: true });
        }
    }
    clearRequestQueue() {
        const outputDir = this.settingsHandler.getApifySettings().APIFY_LOCAL_STORAGE_DIR;
        if (this.filesystem.existsSync(outputDir)) {
            this.filesystem.rmdirSync(outputDir, { recursive: true });
        }
    }
};
ApifyResourceCreator = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object, Object, Object])
], ApifyResourceCreator);
exports.ApifyResourceCreator = ApifyResourceCreator;
//# sourceMappingURL=apify-resource-creator.js.map

/***/ }),

/***/ "../crawler/dist/apify/apify-settings.js":
/*!***********************************************!*\
  !*** ../crawler/dist/apify/apify-settings.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.apifySettingsHandler = void 0;
exports.apifySettingsHandler = {
    setApifySettings(settings) {
        Object.keys(settings).forEach((key) => {
            if (settings[key] !== undefined) {
                process.env[`${key}`] = settings[key];
            }
        });
    },
    getApifySettings() {
        return {
            ...process.env,
        };
    },
};
//# sourceMappingURL=apify-settings.js.map

/***/ }),

/***/ "../crawler/dist/browser-components/active-elements-finder.js":
/*!********************************************************************!*\
  !*** ../crawler/dist/browser-components/active-elements-finder.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveElementsFinder = void 0;
const path = __importStar(__webpack_require__(/*! path */ "path"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const utilities = __importStar(__webpack_require__(/*! ../utility/crypto */ "../crawler/dist/utility/crypto.js"));
let ActiveElementsFinder = class ActiveElementsFinder {
    async getActiveElements(page, selectors) {
        const selector = selectors.join(',');
        await this.importLibToPage(page);
        const elements = await this.getPageActiveElements(page, selector);
        return elements.map((e) => {
            return { ...e, hash: utilities.generateHash(e.html, e.selector) };
        });
    }
    async getPageActiveElements(page, selector) {
        return page.evaluate((elementSelector) => {
            const activeElements = [];
            function visible(element) {
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
            }
            function getElementSelector(element) {
                try {
                    // @ts-ignore
                    return finder.getCssSelector(element);
                }
                catch {
                    return undefined;
                }
            }
            function findElements(document) {
                document.querySelectorAll(elementSelector).forEach((element) => {
                    if (visible(element) === true) {
                        const uniqueSelector = getElementSelector(element);
                        if (uniqueSelector !== undefined) {
                            const end = element.outerHTML.search(/>/);
                            const html = element.outerHTML.substr(0, end + 1);
                            activeElements.push({
                                html,
                                selector: uniqueSelector,
                            });
                        }
                    }
                });
                document.querySelectorAll('iframe,frame').forEach((frame) => {
                    if (frame.contentWindow !== undefined) {
                        let frameDocument;
                        // Skipping cross-origin frame
                        try {
                            frameDocument = frame.contentWindow.document;
                            // eslint-disable-next-line no-empty,@typescript-eslint/no-empty-function
                        }
                        catch { }
                        if (frameDocument !== undefined) {
                            findElements(frame.contentWindow.document);
                        }
                    }
                });
            }
            findElements(window.document);
            return activeElements;
        }, selector);
    }
    async importLibToPage(page) {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        const rootDir = path.dirname(__webpack_require__.c[__webpack_require__.s].filename || process.mainModule.filename);
        await page.addScriptTag({ path: path.resolve(rootDir, 'browser-imports.js') });
    }
};
ActiveElementsFinder = __decorate([
    inversify_1.injectable()
], ActiveElementsFinder);
exports.ActiveElementsFinder = ActiveElementsFinder;
//# sourceMappingURL=active-elements-finder.js.map

/***/ }),

/***/ "../crawler/dist/crawler.js":
/*!**********************************!*\
  !*** ../crawler/dist/crawler.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Crawler = void 0;
const setup_crawler_container_1 = __webpack_require__(/*! ./setup-crawler-container */ "../crawler/dist/setup-crawler-container.js");
const crawler_engine_1 = __webpack_require__(/*! ./crawler/crawler-engine */ "../crawler/dist/crawler/crawler-engine.js");
class Crawler {
    constructor(container) {
        this.container = container;
    }
    async crawl(crawlerRunOptions) {
        setup_crawler_container_1.registerCrawlerRunOptions(this.container, crawlerRunOptions);
        await this.container.get(crawler_engine_1.CrawlerEngine).start(crawlerRunOptions);
    }
}
exports.Crawler = Crawler;
//# sourceMappingURL=crawler.js.map

/***/ }),

/***/ "../crawler/dist/crawler/crawler-configuration.js":
/*!********************************************************!*\
  !*** ../crawler/dist/crawler/crawler-configuration.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerConfiguration = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const url = __importStar(__webpack_require__(/*! url */ "url"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const apify_settings_1 = __webpack_require__(/*! ../apify/apify-settings */ "../crawler/dist/apify/apify-settings.js");
const ioc_types_1 = __webpack_require__(/*! ../types/ioc-types */ "../crawler/dist/types/ioc-types.js");
let CrawlerConfiguration = class CrawlerConfiguration {
    constructor(crawlerRunOptions, settingsHandler = apify_settings_1.apifySettingsHandler) {
        this.crawlerRunOptions = crawlerRunOptions;
        this.settingsHandler = settingsHandler;
    }
    baseUrl() {
        return this.crawlerRunOptions.baseUrl;
    }
    axeSourcePath() {
        return this.crawlerRunOptions.axeSourcePath;
    }
    discoveryPatterns() {
        return this.getDiscoveryPattern(this.crawlerRunOptions.baseUrl, this.crawlerRunOptions.discoveryPatterns);
    }
    selectors() {
        return this.getDefaultSelectors(this.crawlerRunOptions.selectors);
    }
    snapshot() {
        return this.getSnapshot(this.crawlerRunOptions.snapshot, this.crawlerRunOptions.simulate);
    }
    maxRequestsPerCrawl() {
        return this.getMaxRequestsPerCrawl(this.crawlerRunOptions.maxRequestsPerCrawl);
    }
    crawl() {
        var _a;
        return (_a = this.crawlerRunOptions.crawl) !== null && _a !== void 0 ? _a : false;
    }
    setDefaultApifySettings() {
        this.settingsHandler.setApifySettings(this.getDefaultApifySettings());
    }
    setLocalOutputDir(outputDir) {
        this.settingsHandler.setApifySettings({ APIFY_LOCAL_STORAGE_DIR: outputDir });
    }
    setMemoryMBytes(memoryMBytes) {
        this.settingsHandler.setApifySettings({ APIFY_MEMORY_MBYTES: memoryMBytes === null || memoryMBytes === void 0 ? void 0 : memoryMBytes.toString() });
    }
    setSilentMode(silentMode) {
        this.settingsHandler.setApifySettings({ APIFY_HEADLESS: silentMode === undefined ? undefined : silentMode ? '1' : '0' });
    }
    setChromePath(chromePath) {
        this.settingsHandler.setApifySettings({ APIFY_CHROME_EXECUTABLE_PATH: chromePath });
    }
    getMaxRequestsPerCrawl(maxRequestsPerCrawl) {
        return maxRequestsPerCrawl === undefined || maxRequestsPerCrawl <= 0 ? 100 : maxRequestsPerCrawl;
    }
    getSnapshot(snapshot, simulation) {
        return snapshot ? true : simulation !== null && simulation !== void 0 ? simulation : false;
    }
    getDefaultSelectors(selectors) {
        return selectors === undefined || selectors.length === 0 ? ['button'] : selectors;
    }
    getDefaultDiscoveryPattern(baseUrl) {
        if (this.crawl() || baseUrl) {
            const baseUrlObj = url.parse(baseUrl);
            return [`http[s?]://${baseUrlObj.host}${baseUrlObj.path}[.*]`];
        }
        return [];
    }
    getDiscoveryPattern(baseUrl, discoveryPatterns) {
        return discoveryPatterns !== null && discoveryPatterns !== void 0 ? discoveryPatterns : this.getDefaultDiscoveryPattern(baseUrl);
    }
    getDefaultApifySettings() {
        const currentSettings = this.settingsHandler.getApifySettings();
        return {
            APIFY_HEADLESS: '1',
            APIFY_LOCAL_STORAGE_DIR: lodash_1.isEmpty(currentSettings.APIFY_LOCAL_STORAGE_DIR)
                ? './ai_scan_cli_output'
                : currentSettings.APIFY_LOCAL_STORAGE_DIR,
        };
    }
};
CrawlerConfiguration = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.iocTypes.CrawlerRunOptions)),
    __metadata("design:paramtypes", [Object, Object])
], CrawlerConfiguration);
exports.CrawlerConfiguration = CrawlerConfiguration;
//# sourceMappingURL=crawler-configuration.js.map

/***/ }),

/***/ "../crawler/dist/crawler/crawler-engine.js":
/*!*************************************************!*\
  !*** ../crawler/dist/crawler/crawler-engine.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerEngine = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ioc_types_1 = __webpack_require__(/*! ../types/ioc-types */ "../crawler/dist/types/ioc-types.js");
const crawler_configuration_1 = __webpack_require__(/*! ./crawler-configuration */ "../crawler/dist/crawler/crawler-configuration.js");
const crawler_factory_1 = __webpack_require__(/*! ./crawler-factory */ "../crawler/dist/crawler/crawler-factory.js");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
/* eslint-disable @typescript-eslint/consistent-type-assertions */
let CrawlerEngine = class CrawlerEngine {
    constructor(pageProcessorFactory, requestQueueProvider, crawlerFactory, crawlerConfiguration) {
        this.pageProcessorFactory = pageProcessorFactory;
        this.requestQueueProvider = requestQueueProvider;
        this.crawlerFactory = crawlerFactory;
        this.crawlerConfiguration = crawlerConfiguration;
    }
    async start(crawlerRunOptions) {
        var _a;
        this.crawlerConfiguration.setDefaultApifySettings();
        this.crawlerConfiguration.setLocalOutputDir(crawlerRunOptions.localOutputDir);
        this.crawlerConfiguration.setMemoryMBytes(crawlerRunOptions.memoryMBytes);
        this.crawlerConfiguration.setSilentMode(crawlerRunOptions.silentMode);
        const puppeteerDefaultOptions = ['--disable-dev-shm-usage'];
        const pageProcessor = this.pageProcessorFactory();
        const puppeteerCrawlerOptions = {
            handlePageTimeoutSecs: 300,
            requestQueue: await this.requestQueueProvider(),
            handlePageFunction: pageProcessor.pageHandler,
            gotoFunction: pageProcessor.gotoFunction,
            handleFailedRequestFunction: pageProcessor.pageErrorProcessor,
            maxRequestsPerCrawl: this.crawlerConfiguration.maxRequestsPerCrawl(),
            launchPuppeteerOptions: {
                args: puppeteerDefaultOptions,
                defaultViewport: {
                    width: 1920,
                    height: 1080,
                    deviceScaleFactor: 1,
                },
            },
        };
        if (!lodash_1.isEmpty(crawlerRunOptions.chromePath)) {
            puppeteerCrawlerOptions.launchPuppeteerOptions = {
                ...puppeteerCrawlerOptions.launchPuppeteerOptions,
                useChrome: true,
            };
            // this.crawlerConfiguration.setChromePath(crawlerRunOptions.chromePath);
        }
        if (crawlerRunOptions.debug === true) {
            this.crawlerConfiguration.setSilentMode(false);
            puppeteerCrawlerOptions.handlePageTimeoutSecs = 3600;
            puppeteerCrawlerOptions.gotoTimeoutSecs = 3600;
            puppeteerCrawlerOptions.maxConcurrency = 1;
            puppeteerCrawlerOptions.sessionPoolOptions = {
                sessionOptions: {
                    ...(_a = puppeteerCrawlerOptions.sessionPoolOptions) === null || _a === void 0 ? void 0 : _a.sessionOptions,
                    maxAgeSecs: 3600,
                },
            };
            puppeteerCrawlerOptions.launchPuppeteerOptions = {
                ...puppeteerCrawlerOptions.launchPuppeteerOptions,
                args: ['--auto-open-devtools-for-tabs', ...puppeteerDefaultOptions],
            };
            puppeteerCrawlerOptions.puppeteerPoolOptions = {
                puppeteerOperationTimeoutSecs: 3600,
                instanceKillerIntervalSecs: 3600,
                killInstanceAfterSecs: 3600,
                maxOpenPagesPerInstance: 1,
            };
        }
        const crawler = this.crawlerFactory.createPuppeteerCrawler(puppeteerCrawlerOptions);
        await crawler.run();
    }
};
CrawlerEngine = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.iocTypes.PageProcessorFactory)),
    __param(1, inversify_1.inject(ioc_types_1.iocTypes.ApifyRequestQueueProvider)),
    __param(2, inversify_1.inject(crawler_factory_1.CrawlerFactory)),
    __param(3, inversify_1.inject(crawler_configuration_1.CrawlerConfiguration)),
    __metadata("design:paramtypes", [Function, Function, crawler_factory_1.CrawlerFactory,
        crawler_configuration_1.CrawlerConfiguration])
], CrawlerEngine);
exports.CrawlerEngine = CrawlerEngine;
//# sourceMappingURL=crawler-engine.js.map

/***/ }),

/***/ "../crawler/dist/crawler/crawler-factory.js":
/*!**************************************************!*\
  !*** ../crawler/dist/crawler/crawler-factory.js ***!
  \**************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerFactory = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const apify_1 = __importDefault(__webpack_require__(/*! apify */ "apify"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let CrawlerFactory = class CrawlerFactory {
    constructor(apify = apify_1.default) {
        this.apify = apify;
    }
    createPuppeteerCrawler(options) {
        return new this.apify.PuppeteerCrawler(options);
    }
};
CrawlerFactory = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object])
], CrawlerFactory);
exports.CrawlerFactory = CrawlerFactory;
//# sourceMappingURL=crawler-factory.js.map

/***/ }),

/***/ "../crawler/dist/global-overrides.js":
/*!*******************************************!*\
  !*** ../crawler/dist/global-overrides.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any, , @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function overrideCheckPrototypeUtilsFunc(exports) {
    const originalFunc = exports.checkParamPrototypeOrThrow;
    exports.checkParamPrototypeOrThrow = function (...args) {
        if (args[3] === 'Apify.RequestQueue') {
            return true;
        }
        else {
            return originalFunc(...args);
        }
    };
    return exports;
}
function overrideExports(moduleName, exports) {
    if (moduleName === 'apify-shared/utilities') {
        return overrideCheckPrototypeUtilsFunc(exports);
    }
    return exports;
}
const moduleRef = __webpack_require__(/*! module */ "module");
moduleRef.prototype.require = new Proxy(moduleRef.prototype.require, {
    apply(target, thisArg, argumentsList) {
        const moduleName = argumentsList[0];
        const exports = Reflect.apply(target, thisArg, argumentsList);
        return overrideExports(moduleName, exports);
    },
});
moduleRef._resolveFilename = new Proxy(moduleRef._resolveFilename, {
    apply(target, thisArg, argumentsList) {
        const moduleName = argumentsList[0];
        let path = Reflect.apply(target, thisArg, argumentsList);
        if (moduleName.startsWith('@uifabric/styling')) {
            if (__webpack_require__(/*! os */ "os").type() === 'Windows_NT') {
                path = path.replace('\\lib\\', '\\lib-commonjs\\');
            }
            else {
                path = path.replace('/lib/', '/lib-commonjs/');
            }
        }
        return path;
    },
});
//# sourceMappingURL=global-overrides.js.map

/***/ }),

/***/ "../crawler/dist/index.js":
/*!********************************!*\
  !*** ../crawler/dist/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbScanResultReader = exports.setupCrawlerContainer = exports.Crawler = void 0;
// eslint-disable-next-line import/no-unassigned-import
__webpack_require__(/*! ./global-overrides */ "../crawler/dist/global-overrides.js");
var crawler_1 = __webpack_require__(/*! ./crawler */ "../crawler/dist/crawler.js");
Object.defineProperty(exports, "Crawler", { enumerable: true, get: function () { return crawler_1.Crawler; } });
var setup_crawler_container_1 = __webpack_require__(/*! ./setup-crawler-container */ "../crawler/dist/setup-crawler-container.js");
Object.defineProperty(exports, "setupCrawlerContainer", { enumerable: true, get: function () { return setup_crawler_container_1.setupCrawlerContainer; } });
__exportStar(__webpack_require__(/*! ./level-storage/storage-documents */ "../crawler/dist/level-storage/storage-documents.js"), exports);
var db_scan_result_reader_1 = __webpack_require__(/*! ./scan-result-providers/db-scan-result-reader */ "../crawler/dist/scan-result-providers/db-scan-result-reader.js");
Object.defineProperty(exports, "DbScanResultReader", { enumerable: true, get: function () { return db_scan_result_reader_1.DbScanResultReader; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../crawler/dist/level-storage/data-base.js":
/*!**************************************************!*\
  !*** ../crawler/dist/level-storage/data-base.js ***!
  \**************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = exports.genericKey = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
/* eslint-disable @typescript-eslint/tslint/config */
const encoding_down_1 = __importDefault(__webpack_require__(/*! encoding-down */ "encoding-down"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const leveldown_1 = __importDefault(__webpack_require__(/*! leveldown */ "leveldown"));
const levelup_1 = __importDefault(__webpack_require__(/*! levelup */ "levelup"));
const ioc_types_1 = __webpack_require__(/*! ../types/ioc-types */ "../crawler/dist/types/ioc-types.js");
const crypto_1 = __webpack_require__(/*! ../utility/crypto */ "../crawler/dist/utility/crypto.js");
/* eslint-enable @typescript-eslint/tslint/config */
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.genericKey = 'genericKey';
let DataBase = class DataBase {
    constructor(db, levelupObj = levelup_1.default, leveldownObj = leveldown_1.default, encodeObj = encoding_down_1.default) {
        this.db = db;
        this.levelupObj = levelupObj;
        this.leveldownObj = leveldownObj;
        this.encodeObj = encodeObj;
    }
    [Symbol.asyncIterator]() {
        return this;
    }
    async next() {
        var _a, _b;
        if (this.iterator === undefined) {
            await this.openDb();
            this.iterator = this.db.createReadStream()[Symbol.asyncIterator]();
        }
        let key;
        let nextData;
        do {
            nextData = await this.iterator.next();
            key = (_a = nextData === null || nextData === void 0 ? void 0 : nextData.value) === null || _a === void 0 ? void 0 : _a.key;
        } while ((nextData === null || nextData === void 0 ? void 0 : nextData.done) !== true && (key.type !== 'scanResult' || ((_b = nextData.value) === null || _b === void 0 ? void 0 : _b.value) === undefined));
        if (nextData.done !== true) {
            return {
                done: false,
                value: nextData.value.value,
            };
        }
        else {
            this.iterator = undefined;
            return {
                done: true,
                value: undefined,
            };
        }
    }
    async addScanResult(key, value) {
        const dbKey = { type: 'scanResult', key: key };
        await this.addItem(dbKey, value);
    }
    async addScanMetadata(scanMetadata) {
        var _a;
        const dbKey = { type: 'scanMetadata', key: crypto_1.generateHash((_a = scanMetadata.baseUrl) !== null && _a !== void 0 ? _a : exports.genericKey) };
        await this.addItem(dbKey, scanMetadata);
    }
    async getScanMetadata(baseUrl) {
        await this.openDb();
        const dbKey = { type: 'scanMetadata', key: crypto_1.generateHash(baseUrl !== null && baseUrl !== void 0 ? baseUrl : exports.genericKey) };
        const value = await this.db.get(dbKey);
        return value;
    }
    async openDb(outputDir = process.env.APIFY_LOCAL_STORAGE_DIR) {
        if (this.db === undefined) {
            this.db = this.levelupObj(this.encodeObj(this.leveldownObj(`${outputDir}/database`), { valueEncoding: 'json', keyEncoding: 'json' }));
        }
        if (this.db.isClosed()) {
            await this.db.open();
        }
    }
    async addItem(key, value) {
        await this.openDb();
        await this.db.put(key, value);
    }
};
DataBase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.iocTypes.LevelUp)), __param(0, inversify_1.optional()),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], DataBase);
exports.DataBase = DataBase;
//# sourceMappingURL=data-base.js.map

/***/ }),

/***/ "../crawler/dist/level-storage/storage-documents.js":
/*!**********************************************************!*\
  !*** ../crawler/dist/level-storage/storage-documents.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=storage-documents.js.map

/***/ }),

/***/ "../crawler/dist/page-operations/accessibility-scan-operation.js":
/*!***********************************************************************!*\
  !*** ../crawler/dist/page-operations/accessibility-scan-operation.js ***!
  \***********************************************************************/
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
exports.AccessibilityScanOperation = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const page_scanner_1 = __webpack_require__(/*! ../scanners/page-scanner */ "../crawler/dist/scanners/page-scanner.js");
const report_generator_1 = __webpack_require__(/*! ../reports/report-generator */ "../crawler/dist/reports/report-generator.js");
const local_blob_store_1 = __webpack_require__(/*! ../storage/local-blob-store */ "../crawler/dist/storage/local-blob-store.js");
let AccessibilityScanOperation = class AccessibilityScanOperation {
    constructor(scanner, reportGenerator, blobStore) {
        this.scanner = scanner;
        this.reportGenerator = reportGenerator;
        this.blobStore = blobStore;
    }
    async run(page, id, axeSourcePath) {
        const axeResults = await this.scanner.scan(page, axeSourcePath);
        const report = this.reportGenerator.generateReport(axeResults, page.url(), await page.title());
        await this.blobStore.setValue(`${id}.axe`, axeResults);
        await this.blobStore.setValue(`${id}.report`, report.asHTML(), { contentType: 'text/html' });
        if (axeResults.violations.length > 0) {
            console.log(`Found ${axeResults.violations.length} accessibility issues on page ${page.url()}`);
        }
        return axeResults;
    }
};
AccessibilityScanOperation = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(page_scanner_1.PageScanner)),
    __param(1, inversify_1.inject(report_generator_1.ReportGenerator)),
    __param(2, inversify_1.inject(local_blob_store_1.LocalBlobStore)),
    __metadata("design:paramtypes", [page_scanner_1.PageScanner,
        report_generator_1.ReportGenerator, Object])
], AccessibilityScanOperation);
exports.AccessibilityScanOperation = AccessibilityScanOperation;
//# sourceMappingURL=accessibility-scan-operation.js.map

/***/ }),

/***/ "../crawler/dist/page-operations/click-element-operation.js":
/*!******************************************************************!*\
  !*** ../crawler/dist/page-operations/click-element-operation.js ***!
  \******************************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickElementOperation = void 0;
const apify_1 = __importDefault(__webpack_require__(/*! apify */ "apify"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let ClickElementOperation = class ClickElementOperation {
    constructor(enqueueLinksByClickingElementsExt = apify_1.default.utils
        .puppeteer.enqueueLinksByClickingElements) {
        this.enqueueLinksByClickingElementsExt = enqueueLinksByClickingElementsExt;
    }
    async click(page, selector, requestQueue, discoveryPatterns) {
        let navigated = false;
        let navigationUrl;
        await this.enqueueLinksByClickingElementsExt({
            page,
            requestQueue,
            selector,
            pseudoUrls: discoveryPatterns,
            transformRequestFunction: (request) => {
                navigated = true;
                navigationUrl = request.url;
                console.log(`Click on element with selector '${selector}' from page ${page.url()} resulted navigation to URL ${request.url}`);
                return request;
            },
        });
        return { clickAction: navigated ? 'navigation' : 'page-action', navigationUrl };
    }
};
ClickElementOperation = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object])
], ClickElementOperation);
exports.ClickElementOperation = ClickElementOperation;
//# sourceMappingURL=click-element-operation.js.map

/***/ }),

/***/ "../crawler/dist/page-operations/enqueue-active-elements-operation.js":
/*!****************************************************************************!*\
  !*** ../crawler/dist/page-operations/enqueue-active-elements-operation.js ***!
  \****************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnqueueActiveElementsOperation = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const active_elements_finder_1 = __webpack_require__(/*! ../browser-components/active-elements-finder */ "../crawler/dist/browser-components/active-elements-finder.js");
/* eslint-disable @typescript-eslint/no-var-requires, import/no-internal-modules, @typescript-eslint/no-require-imports,  */
const apifyUtilities = __webpack_require__(/*! apify-shared/utilities */ "apify-shared/utilities");
let EnqueueActiveElementsOperation = class EnqueueActiveElementsOperation {
    constructor(activeElementFinder) {
        this.activeElementFinder = activeElementFinder;
    }
    async find(page, selectors, requestQueue) {
        const url = page.url();
        const elements = await this.activeElementFinder.getActiveElements(page, selectors);
        await Promise.all(elements.map(async (e) => {
            const uniqueKey = `${apifyUtilities.normalizeUrl(url, false)}#${e.hash}`;
            const userData = {
                operationType: 'click',
                data: e,
            };
            await requestQueue.addRequest({ url, uniqueKey, userData });
        }));
        if (elements.length > 0) {
            console.log(`Discovered ${elements.length} active elements on page ${url}`);
        }
    }
};
EnqueueActiveElementsOperation = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(active_elements_finder_1.ActiveElementsFinder)),
    __metadata("design:paramtypes", [active_elements_finder_1.ActiveElementsFinder])
], EnqueueActiveElementsOperation);
exports.EnqueueActiveElementsOperation = EnqueueActiveElementsOperation;
//# sourceMappingURL=enqueue-active-elements-operation.js.map

/***/ }),

/***/ "../crawler/dist/page-processors/classic-page-processor.js":
/*!*****************************************************************!*\
  !*** ../crawler/dist/page-processors/classic-page-processor.js ***!
  \*****************************************************************/
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
exports.ClassicPageProcessor = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const page_processor_base_1 = __webpack_require__(/*! ./page-processor-base */ "../crawler/dist/page-processors/page-processor-base.js");
/* eslint-disable no-invalid-this */
let ClassicPageProcessor = class ClassicPageProcessor extends page_processor_base_1.PageProcessorBase {
    constructor() {
        super(...arguments);
        this.processPage = async ({ page, request }) => {
            var _a;
            console.log(`Processing page ${page.url()}`);
            await this.enqueueLinks(page);
            const axeResults = await this.accessibilityScanOp.run(page, request.id, this.crawlerConfiguration.axeSourcePath());
            const issueCount = ((_a = axeResults === null || axeResults === void 0 ? void 0 : axeResults.violations) === null || _a === void 0 ? void 0 : _a.length) > 0 ? axeResults.violations.reduce((a, b) => a + b.nodes.length, 0) : 0;
            await this.saveSnapshot(page, request.id);
            await this.pushScanData({ id: request.id, url: request.url, succeeded: true, issueCount });
            await this.saveScanResult(request, issueCount);
        };
    }
};
ClassicPageProcessor = __decorate([
    inversify_1.injectable()
], ClassicPageProcessor);
exports.ClassicPageProcessor = ClassicPageProcessor;
//# sourceMappingURL=classic-page-processor.js.map

/***/ }),

/***/ "../crawler/dist/page-processors/page-processor-base.js":
/*!**************************************************************!*\
  !*** ../crawler/dist/page-processors/page-processor-base.js ***!
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageProcessorBase = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const apify_1 = __importDefault(__webpack_require__(/*! apify */ "apify"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const scanner_global_library_1 = __webpack_require__(/*! scanner-global-library */ "../scanner-global-library/dist/index.js");
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
const crawler_configuration_1 = __webpack_require__(/*! ../crawler/crawler-configuration */ "../crawler/dist/crawler/crawler-configuration.js");
const data_base_1 = __webpack_require__(/*! ../level-storage/data-base */ "../crawler/dist/level-storage/data-base.js");
const accessibility_scan_operation_1 = __webpack_require__(/*! ../page-operations/accessibility-scan-operation */ "../crawler/dist/page-operations/accessibility-scan-operation.js");
const local_blob_store_1 = __webpack_require__(/*! ../storage/local-blob-store */ "../crawler/dist/storage/local-blob-store.js");
const local_data_store_1 = __webpack_require__(/*! ../storage/local-data-store */ "../crawler/dist/storage/local-data-store.js");
const store_types_1 = __webpack_require__(/*! ../storage/store-types */ "../crawler/dist/storage/store-types.js");
const ioc_types_1 = __webpack_require__(/*! ../types/ioc-types */ "../crawler/dist/types/ioc-types.js");
let PageProcessorBase = class PageProcessorBase {
    constructor(accessibilityScanOp, dataStore, blobStore, dataBase, pageNavigator, requestQueueProvider, crawlerConfiguration, enqueueLinksExt = apify_1.default.utils.enqueueLinks, saveSnapshotExt = apify_1.default.utils.puppeteer.saveSnapshot) {
        this.accessibilityScanOp = accessibilityScanOp;
        this.dataStore = dataStore;
        this.blobStore = blobStore;
        this.dataBase = dataBase;
        this.pageNavigator = pageNavigator;
        this.requestQueueProvider = requestQueueProvider;
        this.crawlerConfiguration = crawlerConfiguration;
        this.enqueueLinksExt = enqueueLinksExt;
        this.saveSnapshotExt = saveSnapshotExt;
        /**
         * Timeout in which page navigation needs to finish, in seconds.
         */
        this.gotoTimeoutMsecs = 30000;
        this.pageRenderingTimeoutMsecs = 5000;
        /**
         * Function that is called to process each request.
         */
        this.pageHandler = async (inputs) => {
            try {
                await this.processPage(inputs);
            }
            catch (err) {
                await this.pushScanData({ succeeded: false, id: inputs.request.id, url: inputs.request.url });
                await this.logPageError(inputs.request, err);
                await this.saveRunError(inputs.request, err);
                // Throw the error so Apify puts it back into the queue to retry
                throw err;
            }
        };
        /**
         * Overrides the function that opens the page in Puppeteer.
         * Return the result of Puppeteer's [page.goto()](https://pptr.dev/#?product=Puppeteer&show=api-pagegotourl-options) function.
         */
        this.gotoFunction = async (inputs) => {
            let navigationError;
            let runError;
            try {
                return await this.pageNavigator.navigate(inputs.request.url, inputs.page, async (browserError, error) => {
                    if (error !== undefined) {
                        throw error;
                    }
                    else {
                        navigationError = browserError;
                    }
                });
            }
            catch (err) {
                await this.pushScanData({ succeeded: false, id: inputs.request.id, url: inputs.request.url });
                await this.logPageError(inputs.request, err);
                runError = err;
                // Throw the error so Apify puts it back into the queue to retry
                throw err;
            }
            finally {
                if (runError !== undefined) {
                    await this.saveRunError(inputs.request, runError);
                }
                else if (navigationError !== undefined) {
                    await this.saveBrowserError(inputs.request, navigationError);
                }
                else {
                    await this.saveScanMetadata(inputs.request.url, await inputs.page.title());
                }
            }
        };
        /**
         * This function is called when the crawling of a request failed after several reties
         */
        this.pageErrorProcessor = async ({ request, error }) => {
            const scanData = {
                id: request.id,
                url: request.url,
                succeeded: false,
                context: request.userData,
                error: JSON.stringify(error),
                requestErrors: request.errorMessages,
                issueCount: 0,
            };
            await this.dataStore.pushData(scanData);
            await this.pushScanData({ succeeded: false, id: request.id, url: request.url });
            await this.logPageError(request, error);
            await this.saveRunError(request, error);
        };
        this.baseUrl = this.crawlerConfiguration.baseUrl();
        this.snapshot = this.crawlerConfiguration.snapshot();
        this.discoveryLinks = this.crawlerConfiguration.crawl();
        this.discoveryPatterns = this.crawlerConfiguration.discoveryPatterns();
    }
    async saveSnapshot(page, id) {
        if (this.snapshot) {
            await this.saveSnapshotExt(page, {
                key: `${id}.screenshot`,
                saveHtml: false,
                keyValueStoreName: store_types_1.scanResultStorageName,
            });
        }
    }
    async enqueueLinks(page) {
        if (!this.discoveryLinks) {
            return [];
        }
        const requestQueue = await this.requestQueueProvider();
        const enqueued = await this.enqueueLinksExt({
            page,
            requestQueue,
            pseudoUrls: this.discoveryPatterns,
        });
        console.log(`Discovered ${enqueued.length} links on page ${page.url()}`);
        return enqueued;
    }
    async pushScanData(scanData) {
        await this.blobStore.setValue(`${scanData.id}.data`, scanData);
    }
    async saveRunError(request, error) {
        await this.dataBase.addScanResult(request.id, {
            id: request.id,
            url: request.url,
            scanState: 'runError',
            error: error !== undefined ? common_1.System.serializeError(error) : undefined,
        });
    }
    async saveBrowserError(request, error) {
        await this.dataBase.addScanResult(request.id, {
            id: request.id,
            url: request.url,
            scanState: 'browserError',
            error: error !== undefined ? JSON.stringify(error) : undefined,
        });
    }
    async saveScanResult(request, issueCount, selector) {
        // add CSS selector of simulated element as URL bookmark part
        const url = selector === undefined ? request.url : `${request.url}#selector|${selector}`;
        await this.dataBase.addScanResult(request.id, {
            id: request.id,
            url,
            scanState: issueCount > 0 ? 'fail' : 'pass',
            issueCount,
        });
    }
    async saveScanMetadata(url, pageTitle) {
        // save metadata for any url first to support the case when base url is not processed
        if ((this.baseUrl && this.baseUrl === url) || !this.scanMetadataSaved) {
            await this.dataBase.addScanMetadata({
                baseUrl: this.baseUrl,
                basePageTitle: this.baseUrl === url ? pageTitle : '',
                userAgent: this.pageNavigator.pageConfigurator.getUserAgent(),
            });
            this.scanMetadataSaved = true;
        }
    }
    async logBrowserFailure(request, browserError) {
        await this.blobStore.setValue(`${request.id}.browser.err`, `${browserError.stack}`, { contentType: 'text/plain' });
    }
    async logPageError(request, error) {
        await this.blobStore.setValue(`${request.id}.err`, `${error.stack}`, { contentType: 'text/plain' });
    }
};
PageProcessorBase = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(accessibility_scan_operation_1.AccessibilityScanOperation)),
    __param(1, inversify_1.inject(local_data_store_1.LocalDataStore)),
    __param(2, inversify_1.inject(local_blob_store_1.LocalBlobStore)),
    __param(3, inversify_1.inject(data_base_1.DataBase)),
    __param(4, inversify_1.inject(scanner_global_library_1.PageNavigator)),
    __param(5, inversify_1.inject(ioc_types_1.iocTypes.ApifyRequestQueueProvider)),
    __param(6, inversify_1.inject(crawler_configuration_1.CrawlerConfiguration)),
    __metadata("design:paramtypes", [accessibility_scan_operation_1.AccessibilityScanOperation, Object, Object, data_base_1.DataBase,
        scanner_global_library_1.PageNavigator, Function, crawler_configuration_1.CrawlerConfiguration, Object, Object])
], PageProcessorBase);
exports.PageProcessorBase = PageProcessorBase;
//# sourceMappingURL=page-processor-base.js.map

/***/ }),

/***/ "../crawler/dist/page-processors/simulator-page-processor.js":
/*!*******************************************************************!*\
  !*** ../crawler/dist/page-processors/simulator-page-processor.js ***!
  \*******************************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimulatorPageProcessor = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const apify_1 = __importDefault(__webpack_require__(/*! apify */ "apify"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const scanner_global_library_1 = __webpack_require__(/*! scanner-global-library */ "../scanner-global-library/dist/index.js");
const crawler_configuration_1 = __webpack_require__(/*! ../crawler/crawler-configuration */ "../crawler/dist/crawler/crawler-configuration.js");
const data_base_1 = __webpack_require__(/*! ../level-storage/data-base */ "../crawler/dist/level-storage/data-base.js");
const accessibility_scan_operation_1 = __webpack_require__(/*! ../page-operations/accessibility-scan-operation */ "../crawler/dist/page-operations/accessibility-scan-operation.js");
const click_element_operation_1 = __webpack_require__(/*! ../page-operations/click-element-operation */ "../crawler/dist/page-operations/click-element-operation.js");
const enqueue_active_elements_operation_1 = __webpack_require__(/*! ../page-operations/enqueue-active-elements-operation */ "../crawler/dist/page-operations/enqueue-active-elements-operation.js");
const local_blob_store_1 = __webpack_require__(/*! ../storage/local-blob-store */ "../crawler/dist/storage/local-blob-store.js");
const local_data_store_1 = __webpack_require__(/*! ../storage/local-data-store */ "../crawler/dist/storage/local-data-store.js");
const ioc_types_1 = __webpack_require__(/*! ../types/ioc-types */ "../crawler/dist/types/ioc-types.js");
const page_processor_base_1 = __webpack_require__(/*! ./page-processor-base */ "../crawler/dist/page-processors/page-processor-base.js");
/* eslint-disable no-invalid-this */
let SimulatorPageProcessor = class SimulatorPageProcessor extends page_processor_base_1.PageProcessorBase {
    constructor(accessibilityScanOp, dataStore, blobStore, dataBase, enqueueActiveElementsOp, clickElementOp, pageNavigator, requestQueueProvider, crawlerConfiguration, enqueueLinksExt = apify_1.default.utils.enqueueLinks, saveSnapshotExt = apify_1.default.utils.puppeteer.saveSnapshot) {
        super(accessibilityScanOp, dataStore, blobStore, dataBase, pageNavigator, requestQueueProvider, crawlerConfiguration, enqueueLinksExt, saveSnapshotExt);
        this.accessibilityScanOp = accessibilityScanOp;
        this.dataStore = dataStore;
        this.blobStore = blobStore;
        this.dataBase = dataBase;
        this.enqueueActiveElementsOp = enqueueActiveElementsOp;
        this.clickElementOp = clickElementOp;
        this.pageNavigator = pageNavigator;
        this.requestQueueProvider = requestQueueProvider;
        this.crawlerConfiguration = crawlerConfiguration;
        this.enqueueLinksExt = enqueueLinksExt;
        this.saveSnapshotExt = saveSnapshotExt;
        this.processPage = async ({ page, request }) => {
            var _a, _b;
            const operation = request.userData;
            const requestQueue = await this.requestQueueProvider();
            if (operation.operationType === undefined || operation.operationType === 'no-op') {
                console.log(`Processing page ${page.url()}`);
                await this.enqueueLinks(page);
                await this.enqueueActiveElementsOp.find(page, this.selectors, requestQueue);
                const axeResults = await this.accessibilityScanOp.run(page, request.id, this.crawlerConfiguration.axeSourcePath());
                const issueCount = ((_a = axeResults === null || axeResults === void 0 ? void 0 : axeResults.violations) === null || _a === void 0 ? void 0 : _a.length) > 0 ? axeResults.violations.reduce((a, b) => a + b.nodes.length, 0) : 0;
                await this.saveSnapshot(page, request.id);
                await this.pushScanData({ succeeded: true, id: request.id, url: request.url, issueCount: issueCount });
                await this.saveScanResult(request, issueCount);
            }
            else if (operation.operationType === 'click') {
                const activeElement = operation.data;
                console.log(`Processing page ${page.url()} with simulation click on element with selector '${activeElement.selector}'`);
                const operationResult = await this.clickElementOp.click(page, activeElement.selector, requestQueue, this.discoveryPatterns);
                let issueCount;
                if (operationResult.clickAction === 'page-action') {
                    await this.enqueueLinks(page);
                    const axeResults = await this.accessibilityScanOp.run(page, request.id, this.crawlerConfiguration.axeSourcePath());
                    issueCount = ((_b = axeResults === null || axeResults === void 0 ? void 0 : axeResults.violations) === null || _b === void 0 ? void 0 : _b.length) > 0 ? axeResults.violations.reduce((a, b) => a + b.nodes.length, 0) : 0;
                    await this.saveSnapshot(page, request.id);
                    await this.saveScanResult(request, issueCount, activeElement.selector);
                }
                await this.pushScanData({
                    id: request.id,
                    url: request.url,
                    succeeded: true,
                    activatedElement: {
                        ...activeElement,
                        clickAction: operationResult.clickAction,
                        navigationUrl: operationResult.navigationUrl,
                    },
                    issueCount: issueCount,
                });
            }
        };
        this.selectors = this.crawlerConfiguration.selectors();
    }
};
SimulatorPageProcessor = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(accessibility_scan_operation_1.AccessibilityScanOperation)),
    __param(1, inversify_1.inject(local_data_store_1.LocalDataStore)),
    __param(2, inversify_1.inject(local_blob_store_1.LocalBlobStore)),
    __param(3, inversify_1.inject(data_base_1.DataBase)),
    __param(4, inversify_1.inject(enqueue_active_elements_operation_1.EnqueueActiveElementsOperation)),
    __param(5, inversify_1.inject(click_element_operation_1.ClickElementOperation)),
    __param(6, inversify_1.inject(scanner_global_library_1.PageNavigator)),
    __param(7, inversify_1.inject(ioc_types_1.iocTypes.ApifyRequestQueueProvider)),
    __param(8, inversify_1.inject(crawler_configuration_1.CrawlerConfiguration)),
    __metadata("design:paramtypes", [accessibility_scan_operation_1.AccessibilityScanOperation, Object, Object, data_base_1.DataBase,
        enqueue_active_elements_operation_1.EnqueueActiveElementsOperation,
        click_element_operation_1.ClickElementOperation,
        scanner_global_library_1.PageNavigator, Function, crawler_configuration_1.CrawlerConfiguration, Object, Object])
], SimulatorPageProcessor);
exports.SimulatorPageProcessor = SimulatorPageProcessor;
//# sourceMappingURL=simulator-page-processor.js.map

/***/ }),

/***/ "../crawler/dist/reports/report-generator.js":
/*!***************************************************!*\
  !*** ../crawler/dist/reports/report-generator.js ***!
  \***************************************************/
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
exports.ReportGenerator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ioc_types_1 = __webpack_require__(/*! ../types/ioc-types */ "../crawler/dist/types/ioc-types.js");
let ReportGenerator = class ReportGenerator {
    constructor(reporterFactory) {
        this.reporterFactory = reporterFactory;
    }
    generateReport(axeResults, url, title) {
        const reporter = this.reporterFactory();
        return reporter.fromAxeResult({
            results: axeResults,
            serviceName: 'Accessibility Insights CLI',
            description: `Automated report for accessibility scan of URL ${url}`,
            scanContext: {
                pageTitle: title,
            },
        });
    }
};
ReportGenerator = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.iocTypes.ReporterFactory)),
    __metadata("design:paramtypes", [Function])
], ReportGenerator);
exports.ReportGenerator = ReportGenerator;
//# sourceMappingURL=report-generator.js.map

/***/ }),

/***/ "../crawler/dist/scan-result-providers/db-scan-result-reader.js":
/*!**********************************************************************!*\
  !*** ../crawler/dist/scan-result-providers/db-scan-result-reader.js ***!
  \**********************************************************************/
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
exports.DbScanResultReader = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const data_base_1 = __webpack_require__(/*! ../level-storage/data-base */ "../crawler/dist/level-storage/data-base.js");
const local_blob_store_1 = __webpack_require__(/*! ../storage/local-blob-store */ "../crawler/dist/storage/local-blob-store.js");
/* eslint-disable @typescript-eslint/no-explicit-any */
let DbScanResultReader = class DbScanResultReader {
    constructor(dataBase, blobStore) {
        this.dataBase = dataBase;
        this.blobStore = blobStore;
    }
    [Symbol.asyncIterator]() {
        return this;
    }
    async next() {
        let nextData;
        do {
            nextData = await this.dataBase.next();
        } while ((nextData === null || nextData === void 0 ? void 0 : nextData.done) !== true && (nextData === null || nextData === void 0 ? void 0 : nextData.value) === undefined);
        if (nextData.done !== true) {
            const axeResults = await this.getAxeResults(nextData.value.id);
            const scanResult = {
                ...nextData.value,
                axeResults,
            };
            return {
                done: false,
                value: scanResult,
            };
        }
        else {
            return {
                done: true,
                value: undefined,
            };
        }
    }
    async getScanMetadata(baseUrl) {
        const scanMetadata = await this.dataBase.getScanMetadata(baseUrl);
        if (scanMetadata.baseUrl === undefined) {
            scanMetadata.baseUrl = baseUrl;
        }
        return scanMetadata;
    }
    async getAxeResults(id) {
        return (await this.blobStore.getValue(`${id}.axe`));
    }
};
DbScanResultReader = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(data_base_1.DataBase)),
    __param(1, inversify_1.inject(local_blob_store_1.LocalBlobStore)),
    __metadata("design:paramtypes", [data_base_1.DataBase, Object])
], DbScanResultReader);
exports.DbScanResultReader = DbScanResultReader;
//# sourceMappingURL=db-scan-result-reader.js.map

/***/ }),

/***/ "../crawler/dist/scanners/page-scanner.js":
/*!************************************************!*\
  !*** ../crawler/dist/scanners/page-scanner.js ***!
  \************************************************/
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
exports.PageScanner = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const scanner_global_library_1 = __webpack_require__(/*! scanner-global-library */ "../scanner-global-library/dist/index.js");
let PageScanner = class PageScanner {
    constructor(axePuppeteerFactory) {
        this.axePuppeteerFactory = axePuppeteerFactory;
    }
    async scan(page, axeSourcePath) {
        const axePuppeteer = await this.axePuppeteerFactory.createAxePuppeteer(page, axeSourcePath);
        return axePuppeteer.analyze();
    }
};
PageScanner = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(scanner_global_library_1.AxePuppeteerFactory)),
    __metadata("design:paramtypes", [scanner_global_library_1.AxePuppeteerFactory])
], PageScanner);
exports.PageScanner = PageScanner;
//# sourceMappingURL=page-scanner.js.map

/***/ }),

/***/ "../crawler/dist/setup-crawler-container.js":
/*!**************************************************!*\
  !*** ../crawler/dist/setup-crawler-container.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCrawlerRunOptions = exports.setupCrawlerContainer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const accessibility_insights_report_1 = __webpack_require__(/*! accessibility-insights-report */ "accessibility-insights-report");
const apify_resource_creator_1 = __webpack_require__(/*! ./apify/apify-resource-creator */ "../crawler/dist/apify/apify-resource-creator.js");
const data_base_1 = __webpack_require__(/*! ./level-storage/data-base */ "../crawler/dist/level-storage/data-base.js");
const classic_page_processor_1 = __webpack_require__(/*! ./page-processors/classic-page-processor */ "../crawler/dist/page-processors/classic-page-processor.js");
const simulator_page_processor_1 = __webpack_require__(/*! ./page-processors/simulator-page-processor */ "../crawler/dist/page-processors/simulator-page-processor.js");
const ioc_types_1 = __webpack_require__(/*! ./types/ioc-types */ "../crawler/dist/types/ioc-types.js");
function setupCrawlerContainer(container) {
    container.bind(data_base_1.DataBase).toSelf().inSingletonScope();
    container.bind(ioc_types_1.iocTypes.ReporterFactory).toConstantValue(accessibility_insights_report_1.reporterFactory);
    setupSingletonProvider(ioc_types_1.iocTypes.ApifyRequestQueueProvider, container, async (context) => {
        const apifyResourceCreator = context.container.get(apify_resource_creator_1.ApifyResourceCreator);
        const crawlerRunOptions = context.container.get(ioc_types_1.iocTypes.CrawlerRunOptions);
        return apifyResourceCreator.createRequestQueue(crawlerRunOptions.baseUrl, crawlerRunOptions.restartCrawl, crawlerRunOptions.inputUrls);
    });
    container
        .bind(ioc_types_1.iocTypes.PageProcessorFactory)
        .toFactory((context) => {
        const crawlerRunOptions = context.container.get(ioc_types_1.iocTypes.CrawlerRunOptions);
        return () => {
            if (crawlerRunOptions.simulate) {
                return context.container.get(simulator_page_processor_1.SimulatorPageProcessor);
            }
            else {
                return context.container.get(classic_page_processor_1.ClassicPageProcessor);
            }
        };
    });
    return container;
}
exports.setupCrawlerContainer = setupCrawlerContainer;
function registerCrawlerRunOptions(container, crawlerRunOptions) {
    container.bind(ioc_types_1.iocTypes.CrawlerRunOptions).toConstantValue(crawlerRunOptions);
}
exports.registerCrawlerRunOptions = registerCrawlerRunOptions;
function setupSingletonProvider(key, container, factory) {
    let singletonInstancePromise;
    container.bind(key).toProvider((context) => {
        return async () => {
            if (singletonInstancePromise === undefined) {
                singletonInstancePromise = factory(context);
            }
            return singletonInstancePromise;
        };
    });
}
//# sourceMappingURL=setup-crawler-container.js.map

/***/ }),

/***/ "../crawler/dist/storage/local-blob-store.js":
/*!***************************************************!*\
  !*** ../crawler/dist/storage/local-blob-store.js ***!
  \***************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalBlobStore = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const apify_1 = __importDefault(__webpack_require__(/*! apify */ "apify"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ioc_types_1 = __webpack_require__(/*! ../types/ioc-types */ "../crawler/dist/types/ioc-types.js");
const store_types_1 = __webpack_require__(/*! ./store-types */ "../crawler/dist/storage/store-types.js");
/* eslint-disable @typescript-eslint/ban-types */
let LocalBlobStore = class LocalBlobStore {
    constructor(keyValueStore, apifyObj = apify_1.default) {
        this.keyValueStore = keyValueStore;
        this.apifyObj = apifyObj;
    }
    async setValue(key, value, options) {
        await this.open();
        await this.keyValueStore.setValue(key, value, options);
    }
    async getValue(key) {
        await this.open();
        return this.keyValueStore.getValue(key);
    }
    async open(storeName = store_types_1.scanResultStorageName) {
        if (this.keyValueStore === undefined) {
            this.keyValueStore = await this.apifyObj.openKeyValueStore(storeName);
        }
    }
};
LocalBlobStore = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.iocTypes.ApifyKeyValueStore)), __param(0, inversify_1.optional()),
    __metadata("design:paramtypes", [apify_1.default.KeyValueStore, Object])
], LocalBlobStore);
exports.LocalBlobStore = LocalBlobStore;
//# sourceMappingURL=local-blob-store.js.map

/***/ }),

/***/ "../crawler/dist/storage/local-data-store.js":
/*!***************************************************!*\
  !*** ../crawler/dist/storage/local-data-store.js ***!
  \***************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDataStore = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const apify_1 = __importDefault(__webpack_require__(/*! apify */ "apify"));
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const ioc_types_1 = __webpack_require__(/*! ../types/ioc-types */ "../crawler/dist/types/ioc-types.js");
const store_types_1 = __webpack_require__(/*! ./store-types */ "../crawler/dist/storage/store-types.js");
let LocalDataStore = class LocalDataStore {
    constructor(datasetStore, apifyObj = apify_1.default) {
        this.datasetStore = datasetStore;
        this.apifyObj = apifyObj;
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    async pushData(data) {
        await this.open();
        await this.datasetStore.pushData(data);
    }
    async open(storeName = store_types_1.scanResultStorageName) {
        if (this.datasetStore === undefined) {
            this.datasetStore = await this.apifyObj.openDataset(storeName);
        }
    }
};
LocalDataStore = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.iocTypes.ApifyDataset)), __param(0, inversify_1.optional()),
    __metadata("design:paramtypes", [apify_1.default.Dataset, Object])
], LocalDataStore);
exports.LocalDataStore = LocalDataStore;
//# sourceMappingURL=local-data-store.js.map

/***/ }),

/***/ "../crawler/dist/storage/store-types.js":
/*!**********************************************!*\
  !*** ../crawler/dist/storage/store-types.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanResultStorageName = void 0;
exports.scanResultStorageName = 'scan-results';
//# sourceMappingURL=store-types.js.map

/***/ }),

/***/ "../crawler/dist/types/ioc-types.js":
/*!******************************************!*\
  !*** ../crawler/dist/types/ioc-types.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.iocTypes = void 0;
exports.iocTypes = {
    ReporterFactory: 'ReporterFactory',
    CrawlerRunOptions: 'CrawlerRunOptions',
    PageProcessorFactory: 'Factory<PageProcessor>',
    ApifyRequestQueueProvider: 'Provider<ApifyRequestQueue>',
    ApifyKeyValueStore: 'ApifyKeyValueStore',
    ApifyDataset: 'ApifyDataset',
    LevelUp: 'levelup.LevelUp',
};
//# sourceMappingURL=ioc-types.js.map

/***/ }),

/***/ "../crawler/dist/utility/crypto.js":
/*!*****************************************!*\
  !*** ../crawler/dist/utility/crypto.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = void 0;
function generateHash(...values) {
    const hashSeed = values.join('|').toLowerCase();
    const sha = __webpack_require__(/*! sha.js */ "sha.js");
    return sha('sha256')
        .update(hashSeed)
        .digest('base64')
        .replace(/(\+|\/|=)/g, '')
        .substr(0, 15);
}
exports.generateHash = generateHash;
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ "../logger/dist/app-insights-logger-client.js":
/*!****************************************************!*\
  !*** ../logger/dist/app-insights-logger-client.js ***!
  \****************************************************/
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
exports.AppInsightsLoggerClient = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const base_app_insights_logger_client_1 = __webpack_require__(/*! ./base-app-insights-logger-client */ "../logger/dist/base-app-insights-logger-client.js");
const logger_types_1 = __webpack_require__(/*! ./logger-types */ "../logger/dist/logger-types.js");
let AppInsightsLoggerClient = class AppInsightsLoggerClient extends base_app_insights_logger_client_1.BaseAppInsightsLoggerClient {
    constructor(appInsightsObject, currentProcess) {
        super();
        this.appInsightsObject = appInsightsObject;
        this.currentProcess = currentProcess;
    }
    async setup(baseProperties) {
        this.appInsightsObject
            .setup()
            .setAutoCollectConsole(true)
            .setAutoCollectExceptions(true)
            .setAutoCollectRequests(true)
            .setAutoCollectDependencies(true)
            .setAutoDependencyCorrelation(true);
        // this should be set after calling setup
        this.appInsightsObject.defaultClient.commonProperties = {
            ...this.getBatchProperties(),
            ...baseProperties,
        };
        this.appInsightsObject.start();
        this.telemetryClient = this.appInsightsObject.defaultClient;
        this.initialized = true;
    }
    getBatchProperties() {
        const batchProperties = {
            batchAccountName: this.currentProcess.env.AZ_BATCH_ACCOUNT_NAME,
            batchPoolId: this.currentProcess.env.AZ_BATCH_POOL_ID,
            batchJobId: this.currentProcess.env.AZ_BATCH_JOB_ID,
            batchTaskId: this.currentProcess.env.AZ_BATCH_TASK_ID,
            batchNodeId: this.currentProcess.env.AZ_BATCH_NODE_ID,
        };
        return lodash_1.omitBy(batchProperties, lodash_1.isNil);
    }
};
AppInsightsLoggerClient = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(logger_types_1.loggerTypes.AppInsights)),
    __param(1, inversify_1.inject(logger_types_1.loggerTypes.Process)),
    __metadata("design:paramtypes", [Object, Object])
], AppInsightsLoggerClient);
exports.AppInsightsLoggerClient = AppInsightsLoggerClient;
//# sourceMappingURL=app-insights-logger-client.js.map

/***/ }),

/***/ "../logger/dist/base-app-insights-logger-client.js":
/*!*********************************************************!*\
  !*** ../logger/dist/base-app-insights-logger-client.js ***!
  \*********************************************************/
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
exports.BaseAppInsightsLoggerClient = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const applicationinsights_1 = __webpack_require__(/*! applicationinsights */ "applicationinsights");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const logger_1 = __webpack_require__(/*! ./logger */ "../logger/dist/logger.js");
let BaseAppInsightsLoggerClient = class BaseAppInsightsLoggerClient {
    constructor() {
        this.initialized = false;
    }
    isInitialized() {
        return this.initialized;
    }
    trackMetric(name, value) {
        this.telemetryClient.trackMetric({
            name: name,
            value: value,
            properties: { ...this.getCommonProperties() },
        });
    }
    trackEvent(name, properties, measurements) {
        this.telemetryClient.trackEvent({ name: name, properties: lodash_1.merge(this.getCommonProperties(), properties), measurements });
    }
    log(message, logLevel, properties) {
        const severity = this.getAppInsightsSeverityLevel(logLevel);
        this.telemetryClient.trackTrace({
            message: this.setMessageSource(message),
            severity: severity,
            properties: lodash_1.merge(this.getCommonProperties(), properties),
        });
    }
    trackAvailability(name, telemetry) {
        this.telemetryClient.trackAvailability({
            name: name,
            success: telemetry.success,
            message: telemetry.message,
            duration: telemetry.duration,
            runLocation: telemetry.runLocation,
            id: telemetry.id,
            measurements: telemetry.measurements,
            properties: telemetry.properties,
        });
    }
    trackException(error) {
        this.telemetryClient.trackException({ exception: error, properties: { ...this.getCommonProperties() } });
    }
    async flush() {
        return new Promise((resolve) => {
            this.telemetryClient.flush({
                callback: () => {
                    resolve();
                },
            });
        });
    }
    setCommonProperties(properties) {
        this.telemetryClient.commonProperties = {
            ...this.telemetryClient.commonProperties,
            ...properties,
        };
    }
    getCommonProperties() {
        return {
            ...this.telemetryClient.commonProperties,
        };
    }
    setMessageSource(message) {
        const source = this.getCommonProperties().source;
        return source !== undefined ? `[${source}] ${message}` : message;
    }
    getAppInsightsSeverityLevel(logLevel) {
        switch (logLevel) {
            case logger_1.LogLevel.info:
                return applicationinsights_1.Contracts.SeverityLevel.Information;
            case logger_1.LogLevel.error:
                return applicationinsights_1.Contracts.SeverityLevel.Error;
            case logger_1.LogLevel.verbose:
                return applicationinsights_1.Contracts.SeverityLevel.Verbose;
            case logger_1.LogLevel.warn:
                return applicationinsights_1.Contracts.SeverityLevel.Warning;
            default:
                throw new Error(`Unknown log level '${logLevel}'`);
        }
    }
};
BaseAppInsightsLoggerClient = __decorate([
    inversify_1.injectable()
], BaseAppInsightsLoggerClient);
exports.BaseAppInsightsLoggerClient = BaseAppInsightsLoggerClient;
//# sourceMappingURL=base-app-insights-logger-client.js.map

/***/ }),

/***/ "../logger/dist/base-console-logger-client.js":
/*!****************************************************!*\
  !*** ../logger/dist/base-console-logger-client.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseConsoleLoggerClient = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const utils = __importStar(__webpack_require__(/*! util */ "util"));
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __importDefault(__webpack_require__(/*! lodash */ "lodash"));
const moment_1 = __importDefault(__webpack_require__(/*! moment */ "moment"));
const logger_1 = __webpack_require__(/*! ./logger */ "../logger/dist/logger.js");
const logger_types_1 = __webpack_require__(/*! ./logger-types */ "../logger/dist/logger-types.js");
let BaseConsoleLoggerClient = class BaseConsoleLoggerClient {
    constructor(serviceConfig, consoleObject) {
        this.serviceConfig = serviceConfig;
        this.consoleObject = consoleObject;
        this.initialized = false;
    }
    async setup(baseProperties) {
        this.baseProperties = baseProperties;
        this.isConsoleLogEnabled = (await this.serviceConfig.getConfigValue('logConfig')).logInConsole;
        this.initialized = true;
    }
    trackMetric(name, value) {
        this.executeInDebugMode(() => {
            this.logInConsole(`[Metric]`, `${name}: ${value}`, this.getPrintablePropertiesString());
        });
    }
    trackEvent(name, properties, measurements) {
        this.executeInDebugMode(() => {
            this.logInConsole(`[Event][${name}]`, this.getPrintableMeasurementsString(measurements), this.getPrintablePropertiesString(properties));
        });
    }
    // eslint-disable-next-line no-empty,@typescript-eslint/no-empty-function
    trackAvailability(name, telemetry) { }
    log(message, logLevel, properties) {
        this.executeInDebugMode(() => {
            this.logInConsole(`[Trace][${logger_1.LogLevel[logLevel]}]`, message, this.getPrintablePropertiesString(properties));
        });
    }
    trackException(error) {
        this.executeInDebugMode(() => {
            this.logInConsole(`[Exception]`, common_1.System.serializeError(error), this.getPrintablePropertiesString());
        });
    }
    // eslint-disable-next-line no-empty,@typescript-eslint/no-empty-function
    async flush() { }
    setCommonProperties(properties) {
        this.baseProperties = { ...this.baseProperties, ...properties };
    }
    getCommonProperties() {
        return this.baseProperties;
    }
    getPrintablePropertiesString(properties) {
        const allProperties = { ...this.baseProperties, ...this.getPropertiesToAddToEvent(), ...properties };
        return lodash_1.default.isEmpty(allProperties) ? '' : `${this.getPrintableString(allProperties)}`;
    }
    getPrintableMeasurementsString(measurements) {
        return lodash_1.default.isEmpty(measurements) ? '' : `${this.getPrintableString(measurements)}`;
    }
    executeInDebugMode(action) {
        if (this.isConsoleLogEnabled) {
            action();
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPrintableString(obj) {
        return utils.inspect(obj, { depth: null });
    }
    logInConsole(tag, message, properties) {
        this.consoleObject.log(`[${moment_1.default.utc().toISOString()}]${tag} ${message}\n${properties}`.trim());
    }
};
BaseConsoleLoggerClient = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(common_1.ServiceConfiguration)),
    __param(1, inversify_1.inject(logger_types_1.loggerTypes.Console)),
    __metadata("design:paramtypes", [common_1.ServiceConfiguration, Object])
], BaseConsoleLoggerClient);
exports.BaseConsoleLoggerClient = BaseConsoleLoggerClient;
//# sourceMappingURL=base-console-logger-client.js.map

/***/ }),

/***/ "../logger/dist/console-logger-client.js":
/*!***********************************************!*\
  !*** ../logger/dist/console-logger-client.js ***!
  \***********************************************/
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
exports.ConsoleLoggerClient = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const base_console_logger_client_1 = __webpack_require__(/*! ./base-console-logger-client */ "../logger/dist/base-console-logger-client.js");
let ConsoleLoggerClient = class ConsoleLoggerClient extends base_console_logger_client_1.BaseConsoleLoggerClient {
    getPropertiesToAddToEvent() {
        return {};
    }
};
ConsoleLoggerClient = __decorate([
    inversify_1.injectable()
], ConsoleLoggerClient);
exports.ConsoleLoggerClient = ConsoleLoggerClient;
//# sourceMappingURL=console-logger-client.js.map

/***/ }),

/***/ "../logger/dist/context-aware-app-insights-logger-client.js":
/*!******************************************************************!*\
  !*** ../logger/dist/context-aware-app-insights-logger-client.js ***!
  \******************************************************************/
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
exports.ContextAwareAppInsightsLoggerClient = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const applicationinsights_1 = __webpack_require__(/*! applicationinsights */ "applicationinsights");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const app_insights_logger_client_1 = __webpack_require__(/*! ./app-insights-logger-client */ "../logger/dist/app-insights-logger-client.js");
const base_app_insights_logger_client_1 = __webpack_require__(/*! ./base-app-insights-logger-client */ "../logger/dist/base-app-insights-logger-client.js");
let ContextAwareAppInsightsLoggerClient = class ContextAwareAppInsightsLoggerClient extends base_app_insights_logger_client_1.BaseAppInsightsLoggerClient {
    constructor(globalLoggerClient) {
        super();
        this.globalLoggerClient = globalLoggerClient;
    }
    async setup(baseProperties) {
        this.telemetryClient = new applicationinsights_1.TelemetryClient();
        this.telemetryClient.commonProperties = {
            ...baseProperties,
        };
        if (!this.globalLoggerClient.isInitialized()) {
            await this.globalLoggerClient.setup();
        }
        this.initialized = true;
    }
    isInitialized() {
        return super.isInitialized() && this.globalLoggerClient.isInitialized();
    }
    getCommonProperties() {
        var _a;
        return lodash_1.merge(this.globalLoggerClient.getCommonProperties(), (_a = this.telemetryClient) === null || _a === void 0 ? void 0 : _a.commonProperties);
    }
};
ContextAwareAppInsightsLoggerClient = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(app_insights_logger_client_1.AppInsightsLoggerClient)),
    __metadata("design:paramtypes", [app_insights_logger_client_1.AppInsightsLoggerClient])
], ContextAwareAppInsightsLoggerClient);
exports.ContextAwareAppInsightsLoggerClient = ContextAwareAppInsightsLoggerClient;
//# sourceMappingURL=context-aware-app-insights-logger-client.js.map

/***/ }),

/***/ "../logger/dist/context-aware-console-logger-client.js":
/*!*************************************************************!*\
  !*** ../logger/dist/context-aware-console-logger-client.js ***!
  \*************************************************************/
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
exports.ContextAwareConsoleLoggerClient = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const base_console_logger_client_1 = __webpack_require__(/*! ./base-console-logger-client */ "../logger/dist/base-console-logger-client.js");
const console_logger_client_1 = __webpack_require__(/*! ./console-logger-client */ "../logger/dist/console-logger-client.js");
const logger_types_1 = __webpack_require__(/*! ./logger-types */ "../logger/dist/logger-types.js");
let ContextAwareConsoleLoggerClient = class ContextAwareConsoleLoggerClient extends base_console_logger_client_1.BaseConsoleLoggerClient {
    constructor(serviceConfig, consoleObject, rootLoggerClient) {
        super(serviceConfig, consoleObject);
        this.rootLoggerClient = rootLoggerClient;
    }
    getPropertiesToAddToEvent() {
        return { ...this.rootLoggerClient.getCommonProperties() };
    }
};
ContextAwareConsoleLoggerClient = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(common_1.ServiceConfiguration)),
    __param(1, inversify_1.inject(logger_types_1.loggerTypes.Console)),
    __param(2, inversify_1.inject(console_logger_client_1.ConsoleLoggerClient)),
    __metadata("design:paramtypes", [common_1.ServiceConfiguration, Object, console_logger_client_1.ConsoleLoggerClient])
], ContextAwareConsoleLoggerClient);
exports.ContextAwareConsoleLoggerClient = ContextAwareConsoleLoggerClient;
//# sourceMappingURL=context-aware-console-logger-client.js.map

/***/ }),

/***/ "../logger/dist/context-aware-logger.js":
/*!**********************************************!*\
  !*** ../logger/dist/context-aware-logger.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextAwareLogger = void 0;
const logger_1 = __webpack_require__(/*! ./logger */ "../logger/dist/logger.js");
class ContextAwareLogger extends logger_1.Logger {
    constructor(loggerClients, currentProcess) {
        super(loggerClients, currentProcess);
    }
}
exports.ContextAwareLogger = ContextAwareLogger;
//# sourceMappingURL=context-aware-logger.js.map

/***/ }),

/***/ "../logger/dist/global-logger.js":
/*!***************************************!*\
  !*** ../logger/dist/global-logger.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalLogger = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const logger_1 = __webpack_require__(/*! ./logger */ "../logger/dist/logger.js");
class GlobalLogger extends logger_1.Logger {
    constructor(loggerClients, currentProcess, initializationTimeout = 5000) {
        super(loggerClients, currentProcess, initializationTimeout);
    }
}
exports.GlobalLogger = GlobalLogger;
//# sourceMappingURL=global-logger.js.map

/***/ }),

/***/ "../logger/dist/index.js":
/*!*******************************!*\
  !*** ../logger/dist/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLoggerClient = exports.registerContextAwareLoggerToContainer = exports.registerLoggerToContainer = exports.loggerTypes = exports.ContextAwareLogger = exports.GlobalLogger = exports.LogLevel = exports.Logger = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var logger_1 = __webpack_require__(/*! ./logger */ "../logger/dist/logger.js");
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return logger_1.Logger; } });
Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function () { return logger_1.LogLevel; } });
var global_logger_1 = __webpack_require__(/*! ./global-logger */ "../logger/dist/global-logger.js");
Object.defineProperty(exports, "GlobalLogger", { enumerable: true, get: function () { return global_logger_1.GlobalLogger; } });
var context_aware_logger_1 = __webpack_require__(/*! ./context-aware-logger */ "../logger/dist/context-aware-logger.js");
Object.defineProperty(exports, "ContextAwareLogger", { enumerable: true, get: function () { return context_aware_logger_1.ContextAwareLogger; } });
var logger_types_1 = __webpack_require__(/*! ./logger-types */ "../logger/dist/logger-types.js");
Object.defineProperty(exports, "loggerTypes", { enumerable: true, get: function () { return logger_types_1.loggerTypes; } });
var register_logger_to_container_1 = __webpack_require__(/*! ./register-logger-to-container */ "../logger/dist/register-logger-to-container.js");
Object.defineProperty(exports, "registerLoggerToContainer", { enumerable: true, get: function () { return register_logger_to_container_1.registerLoggerToContainer; } });
Object.defineProperty(exports, "registerContextAwareLoggerToContainer", { enumerable: true, get: function () { return register_logger_to_container_1.registerContextAwareLoggerToContainer; } });
var console_logger_client_1 = __webpack_require__(/*! ./console-logger-client */ "../logger/dist/console-logger-client.js");
Object.defineProperty(exports, "ConsoleLoggerClient", { enumerable: true, get: function () { return console_logger_client_1.ConsoleLoggerClient; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../logger/dist/logger-types.js":
/*!**************************************!*\
  !*** ../logger/dist/logger-types.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerTypes = void 0;
exports.loggerTypes = {
    AppInsights: 'AppInsights',
    Process: 'Process',
    Console: 'Console',
    DotEnvConfig: 'DotEnvConfig',
};
//# sourceMappingURL=logger-types.js.map

/***/ }),

/***/ "../logger/dist/logger.js":
/*!********************************!*\
  !*** ../logger/dist/logger.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.LogLevel = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
const verror_1 = __webpack_require__(/*! verror */ "verror");
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["info"] = 0] = "info";
    LogLevel[LogLevel["warn"] = 1] = "warn";
    LogLevel[LogLevel["verbose"] = 2] = "verbose";
    LogLevel[LogLevel["error"] = 3] = "error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Logger {
    constructor(loggerClients, currentProcess, initializationTimeout = 5000) {
        this.loggerClients = loggerClients;
        this.currentProcess = currentProcess;
        this.initializationTimeout = initializationTimeout;
        this.initialized = false;
        this.isDebugEnabled = false;
    }
    async setup(baseProperties) {
        if (this.initialized === true) {
            return;
        }
        await this.initializeClients(baseProperties);
        this.isDebugEnabled = /--debug|--inspect/i.test(this.currentProcess.execArgv.join(' '));
        this.initialized = true;
    }
    setCommonProperties(properties) {
        this.ensureInitialized();
        this.invokeLoggerClient((client) => client.setCommonProperties(properties));
    }
    trackMetric(name, value = 1) {
        this.ensureInitialized();
        this.invokeLoggerClient((client) => client.trackMetric(name, value));
    }
    trackEvent(name, properties, measurements) {
        this.ensureInitialized();
        this.invokeLoggerClient((client) => client.trackEvent(name, properties, measurements));
    }
    trackAvailability(name, telemetry) {
        this.ensureInitialized();
        this.invokeLoggerClient((client) => client.trackAvailability(name, telemetry));
    }
    trackException(error) {
        this.ensureInitialized();
        this.invokeLoggerClient((client) => client.trackException(error));
    }
    log(message, logLevel, properties) {
        this.ensureInitialized();
        this.invokeLoggerClient((client) => client.log(message, logLevel, properties));
    }
    logInfo(message, properties) {
        this.log(message, LogLevel.info, properties);
    }
    logVerbose(message, properties) {
        if (this.isDebugEnabled) {
            this.log(message, LogLevel.verbose, properties);
        }
    }
    logWarn(message, properties) {
        this.log(message, LogLevel.warn, properties);
    }
    logError(message, properties) {
        this.log(message, LogLevel.error, properties);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    trackExceptionAny(underlyingErrorData, message) {
        const parsedErrorObject = underlyingErrorData instanceof Error ? underlyingErrorData : new Error(common_1.System.serializeError(underlyingErrorData));
        this.trackException(new verror_1.VError(parsedErrorObject, message));
    }
    async flush() {
        this.ensureInitialized();
        await this.invokeLoggerClientAsync(async (client) => client.flush());
    }
    invokeLoggerClient(action) {
        this.loggerClients.map(action);
    }
    async invokeLoggerClientAsync(action) {
        await Promise.all(this.loggerClients.map(async (client) => action(client)));
    }
    async initializeClients(baseProperties) {
        const threshold = new Date().valueOf() + this.initializationTimeout;
        while (this.loggerClients.some((client) => !client.initialized) && new Date().valueOf() <= threshold) {
            this.invokeLoggerClientAsync(async (client) => client.setup(baseProperties));
            await common_1.System.wait(100);
        }
        if (this.loggerClients.some((client) => !client.initialized)) {
            throw new Error(`Failed to initialize logger clients: ${this.loggerClients
                .filter((client) => !client.initialized)
                .map((client) => client === null || client === void 0 ? void 0 : client.constructor.name)
                .join(', ')}`);
        }
    }
    ensureInitialized() {
        if (this.initialized === true) {
            return;
        }
        throw new Error(`The logger instance is not initialized. Ensure the setup() method is invoked by derived class implementation. ${new Error().stack}`);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map

/***/ }),

/***/ "../logger/dist/register-logger-to-container.js":
/*!******************************************************!*\
  !*** ../logger/dist/register-logger-to-container.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerContextAwareLoggerToContainer = exports.registerLoggerToContainer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const appInsights = __importStar(__webpack_require__(/*! applicationinsights */ "applicationinsights"));
const dotenv = __importStar(__webpack_require__(/*! dotenv */ "dotenv"));
const app_insights_logger_client_1 = __webpack_require__(/*! ./app-insights-logger-client */ "../logger/dist/app-insights-logger-client.js");
const console_logger_client_1 = __webpack_require__(/*! ./console-logger-client */ "../logger/dist/console-logger-client.js");
const context_aware_app_insights_logger_client_1 = __webpack_require__(/*! ./context-aware-app-insights-logger-client */ "../logger/dist/context-aware-app-insights-logger-client.js");
const context_aware_console_logger_client_1 = __webpack_require__(/*! ./context-aware-console-logger-client */ "../logger/dist/context-aware-console-logger-client.js");
const context_aware_logger_1 = __webpack_require__(/*! ./context-aware-logger */ "../logger/dist/context-aware-logger.js");
const global_logger_1 = __webpack_require__(/*! ./global-logger */ "../logger/dist/global-logger.js");
const logger_types_1 = __webpack_require__(/*! ./logger-types */ "../logger/dist/logger-types.js");
function registerLoggerToContainer(container) {
    registerLoggerDependenciesToContainer(container);
    registerGlobalLoggerToContainer(container);
    registerContextAwareLoggerToContainer(container);
}
exports.registerLoggerToContainer = registerLoggerToContainer;
function registerContextAwareLoggerToContainer(container) {
    container.bind(context_aware_app_insights_logger_client_1.ContextAwareAppInsightsLoggerClient).toSelf().inSingletonScope();
    container.bind(context_aware_console_logger_client_1.ContextAwareConsoleLoggerClient).toSelf().inSingletonScope();
    container
        .bind(context_aware_logger_1.ContextAwareLogger)
        .toDynamicValue((context) => {
        const appInsightsLoggerClient = context.container.get(context_aware_app_insights_logger_client_1.ContextAwareAppInsightsLoggerClient);
        const consoleLoggerClient = context.container.get(context_aware_console_logger_client_1.ContextAwareConsoleLoggerClient);
        return new context_aware_logger_1.ContextAwareLogger([appInsightsLoggerClient, consoleLoggerClient], context.container.get(logger_types_1.loggerTypes.Process));
    })
        .inSingletonScope();
}
exports.registerContextAwareLoggerToContainer = registerContextAwareLoggerToContainer;
function registerGlobalLoggerToContainer(container) {
    container
        .bind(global_logger_1.GlobalLogger)
        .toDynamicValue((context) => {
        const appInsightsLoggerClient = context.container.get(app_insights_logger_client_1.AppInsightsLoggerClient);
        const consoleLoggerClient = context.container.get(console_logger_client_1.ConsoleLoggerClient);
        return new global_logger_1.GlobalLogger([appInsightsLoggerClient, consoleLoggerClient], context.container.get(logger_types_1.loggerTypes.Process));
    })
        .inSingletonScope();
}
function registerLoggerDependenciesToContainer(container) {
    container.bind(logger_types_1.loggerTypes.AppInsights).toConstantValue(appInsights);
    container.bind(logger_types_1.loggerTypes.Process).toConstantValue(process);
    container.bind(app_insights_logger_client_1.AppInsightsLoggerClient).toSelf().inSingletonScope();
    container.bind(console_logger_client_1.ConsoleLoggerClient).toSelf().inSingletonScope();
    container.bind(logger_types_1.loggerTypes.DotEnvConfig).toConstantValue(dotenv.config());
    container.bind(logger_types_1.loggerTypes.Console).toConstantValue(console);
}
//# sourceMappingURL=register-logger-to-container.js.map

/***/ }),

/***/ "../scanner-global-library/dist/factories/axe-puppeteer-factory.js":
/*!*************************************************************************!*\
  !*** ../scanner-global-library/dist/factories/axe-puppeteer-factory.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxePuppeteerFactory = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const puppeteer_1 = __webpack_require__(/*! @axe-core/puppeteer */ "@axe-core/puppeteer");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const rule_exclusion_1 = __webpack_require__(/*! ./rule-exclusion */ "../scanner-global-library/dist/factories/rule-exclusion.js");
let AxePuppeteerFactory = class AxePuppeteerFactory {
    constructor(ruleExclusion = new rule_exclusion_1.RuleExclusion(), fileSystemObj = fs) {
        this.ruleExclusion = ruleExclusion;
        this.fileSystemObj = fileSystemObj;
    }
    async createAxePuppeteer(page, contentSourcePath) {
        if (!lodash_1.isEmpty(contentSourcePath)) {
            // eslint-disable-next-line security/detect-non-literal-fs-filename
            const content = this.fileSystemObj.readFileSync(contentSourcePath);
            return new puppeteer_1.AxePuppeteer(page, content.toString()).disableRules(this.ruleExclusion.accessibilityRuleExclusionList);
        }
        return new puppeteer_1.AxePuppeteer(page).disableRules(this.ruleExclusion.accessibilityRuleExclusionList);
    }
};
AxePuppeteerFactory = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [rule_exclusion_1.RuleExclusion, Object])
], AxePuppeteerFactory);
exports.AxePuppeteerFactory = AxePuppeteerFactory;
//# sourceMappingURL=axe-puppeteer-factory.js.map

/***/ }),

/***/ "../scanner-global-library/dist/factories/rule-exclusion.js":
/*!******************************************************************!*\
  !*** ../scanner-global-library/dist/factories/rule-exclusion.js ***!
  \******************************************************************/
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
exports.RuleExclusion = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let RuleExclusion = class RuleExclusion {
    constructor() {
        this.accessibilityRuleExclusionList = [
            'accesskeys',
            'aria-allowed-role',
            'css-orientation-lock',
            'empty-heading',
            'focus-order-semantics',
            'form-field-multiple-labels',
            'frame-tested',
            'frame-title-unique',
            'heading-order',
            'hidden-content',
            'identical-links-same-purpose',
            'image-redundant-alt',
            'label-content-name-mismatch',
            'label-title-only',
            'landmark-banner-is-top-level',
            'landmark-complementary-is-top-level',
            'landmark-contentinfo-is-top-level',
            'landmark-main-is-top-level',
            'landmark-no-duplicate-banner',
            'landmark-no-duplicate-contentinfo',
            'landmark-no-duplicate-main',
            'landmark-one-main',
            'landmark-unique',
            'link-in-text-block',
            'meta-viewport',
            'meta-viewport-large',
            'no-autoplay-audio',
            'p-as-heading',
            'page-has-heading-one',
            'region',
            'scope-attr-valid',
            'skip-link',
            'tabindex',
            'table-duplicate-name',
            'table-fake-caption',
            'td-has-header',
        ];
    }
};
RuleExclusion = __decorate([
    inversify_1.injectable()
], RuleExclusion);
exports.RuleExclusion = RuleExclusion;
//# sourceMappingURL=rule-exclusion.js.map

/***/ }),

/***/ "../scanner-global-library/dist/index.js":
/*!***********************************************!*\
  !*** ../scanner-global-library/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNavigator = exports.WebDriver = exports.Page = exports.AxePuppeteerFactory = exports.PageResponseProcessor = exports.PageHandler = exports.PageConfigurator = exports.registerScannerToContainer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
var register_scanner_to_container_1 = __webpack_require__(/*! ./register-scanner-to-container */ "../scanner-global-library/dist/register-scanner-to-container.js");
Object.defineProperty(exports, "registerScannerToContainer", { enumerable: true, get: function () { return register_scanner_to_container_1.registerScannerToContainer; } });
var page_configurator_1 = __webpack_require__(/*! ./page-configurator */ "../scanner-global-library/dist/page-configurator.js");
Object.defineProperty(exports, "PageConfigurator", { enumerable: true, get: function () { return page_configurator_1.PageConfigurator; } });
var page_handler_1 = __webpack_require__(/*! ./page-handler */ "../scanner-global-library/dist/page-handler.js");
Object.defineProperty(exports, "PageHandler", { enumerable: true, get: function () { return page_handler_1.PageHandler; } });
var page_response_processor_1 = __webpack_require__(/*! ./page-response-processor */ "../scanner-global-library/dist/page-response-processor.js");
Object.defineProperty(exports, "PageResponseProcessor", { enumerable: true, get: function () { return page_response_processor_1.PageResponseProcessor; } });
var axe_puppeteer_factory_1 = __webpack_require__(/*! ./factories/axe-puppeteer-factory */ "../scanner-global-library/dist/factories/axe-puppeteer-factory.js");
Object.defineProperty(exports, "AxePuppeteerFactory", { enumerable: true, get: function () { return axe_puppeteer_factory_1.AxePuppeteerFactory; } });
var page_1 = __webpack_require__(/*! ./page */ "../scanner-global-library/dist/page.js");
Object.defineProperty(exports, "Page", { enumerable: true, get: function () { return page_1.Page; } });
var web_driver_1 = __webpack_require__(/*! ./web-driver */ "../scanner-global-library/dist/web-driver.js");
Object.defineProperty(exports, "WebDriver", { enumerable: true, get: function () { return web_driver_1.WebDriver; } });
var page_navigator_1 = __webpack_require__(/*! ./page-navigator */ "../scanner-global-library/dist/page-navigator.js");
Object.defineProperty(exports, "PageNavigator", { enumerable: true, get: function () { return page_navigator_1.PageNavigator; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../scanner-global-library/dist/page-configurator.js":
/*!***********************************************************!*\
  !*** ../scanner-global-library/dist/page-configurator.js ***!
  \***********************************************************/
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
exports.PageConfigurator = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let PageConfigurator = class PageConfigurator {
    getUserAgent() {
        return this.userAgent;
    }
    async configurePage(page) {
        await page.setBypassCSP(true);
        await page.setViewport({
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
        });
        await this.setUserAgent(page);
    }
    async setUserAgent(page) {
        const browser = page.browser();
        this.userAgent = (await browser.userAgent()).replace('HeadlessChrome', 'Chrome');
        await page.setUserAgent(this.userAgent);
    }
};
PageConfigurator = __decorate([
    inversify_1.injectable()
], PageConfigurator);
exports.PageConfigurator = PageConfigurator;
//# sourceMappingURL=page-configurator.js.map

/***/ }),

/***/ "../scanner-global-library/dist/page-handler.js":
/*!******************************************************!*\
  !*** ../scanner-global-library/dist/page-handler.js ***!
  \******************************************************/
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
exports.PageHandler = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const logger_1 = __webpack_require__(/*! logger */ "../logger/dist/index.js");
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
let PageHandler = class PageHandler {
    constructor(logger) {
        this.logger = logger;
    }
    async waitForPageToCompleteRendering(page, timeoutMsecs, checkIntervalMsecs = 200) {
        var _a, _b;
        const maxCheckCount = timeoutMsecs / checkIntervalMsecs;
        const minCheckBreakCount = 3;
        let checkCount = 0;
        let continuousStableCheckCount = 0;
        let lastCheckPageHtmlContentSize = 0;
        let pageHasStableContent = false;
        let pageHtmlContentSize = 0;
        while (checkCount < maxCheckCount) {
            try {
                // Page evaluation may fail because of a navigation
                pageHtmlContentSize = await page.evaluate(() => document.body.innerHTML.length);
            }
            catch (error) {
                pageHtmlContentSize = 0;
                (_a = this.logger) === null || _a === void 0 ? void 0 : _a.logError(`Page evaluation failed.`, { error: common_1.System.serializeError(error) });
            }
            if (lastCheckPageHtmlContentSize !== 0 && pageHtmlContentSize === lastCheckPageHtmlContentSize) {
                continuousStableCheckCount += 1;
            }
            else {
                continuousStableCheckCount = 0;
            }
            lastCheckPageHtmlContentSize = pageHtmlContentSize;
            if (continuousStableCheckCount >= minCheckBreakCount) {
                pageHasStableContent = true;
                break;
            }
            await page.waitFor(checkIntervalMsecs);
            checkCount += 1;
        }
        if (pageHasStableContent !== true) {
            (_b = this.logger) === null || _b === void 0 ? void 0 : _b.logWarn(`Page did not complete full rendering after ${timeoutMsecs / 1000} seconds.`);
        }
    }
};
PageHandler = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(logger_1.GlobalLogger)), __param(0, inversify_1.optional()),
    __metadata("design:paramtypes", [logger_1.GlobalLogger])
], PageHandler);
exports.PageHandler = PageHandler;
//# sourceMappingURL=page-handler.js.map

/***/ }),

/***/ "../scanner-global-library/dist/page-navigator.js":
/*!********************************************************!*\
  !*** ../scanner-global-library/dist/page-navigator.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageNavigator = void 0;
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const page_configurator_1 = __webpack_require__(/*! ./page-configurator */ "../scanner-global-library/dist/page-configurator.js");
const page_response_processor_1 = __webpack_require__(/*! ./page-response-processor */ "../scanner-global-library/dist/page-response-processor.js");
const page_handler_1 = __webpack_require__(/*! ./page-handler */ "../scanner-global-library/dist/page-handler.js");
let PageNavigator = class PageNavigator {
    constructor(pageConfigurator, pageResponseProcessor, pageRenderingHandler) {
        this.pageConfigurator = pageConfigurator;
        this.pageResponseProcessor = pageResponseProcessor;
        this.pageRenderingHandler = pageRenderingHandler;
        // The total page navigation timeout should correlate with Batch scan task 'max wall-clock time' constrain
        // Refer to service configuration TaskRuntimeConfig.taskTimeoutInMinutes property
        this.gotoTimeoutMsecs = 60000;
        this.pageRenderingTimeoutMsecs = 10000;
    }
    async navigate(url, page, onNavigationError = () => Promise.resolve()) {
        // Configure page settings before navigating to URL
        await this.pageConfigurator.configurePage(page);
        let response;
        try {
            response = await page.goto(url, {
                waitUntil: 'networkidle0',
                timeout: this.gotoTimeoutMsecs,
            });
        }
        catch (err) {
            const navigationError = this.pageResponseProcessor.getNavigationError(err);
            onNavigationError(navigationError, err);
            return undefined;
        }
        if (response === undefined) {
            onNavigationError({
                errorType: 'NavigationError',
                message: 'Unable to get a page response from the browser.',
                stack: new Error().stack,
            });
            return undefined;
        }
        // Validate HTTP response
        const responseError = this.pageResponseProcessor.getResponseError(response);
        if (responseError !== undefined) {
            onNavigationError(responseError);
            return undefined;
        }
        await this.pageRenderingHandler.waitForPageToCompleteRendering(page, this.pageRenderingTimeoutMsecs);
        return response;
    }
};
PageNavigator = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(page_configurator_1.PageConfigurator)),
    __param(1, inversify_1.inject(page_response_processor_1.PageResponseProcessor)),
    __param(2, inversify_1.inject(page_handler_1.PageHandler)),
    __metadata("design:paramtypes", [page_configurator_1.PageConfigurator,
        page_response_processor_1.PageResponseProcessor,
        page_handler_1.PageHandler])
], PageNavigator);
exports.PageNavigator = PageNavigator;
//# sourceMappingURL=page-navigator.js.map

/***/ }),

/***/ "../scanner-global-library/dist/page-response-processor.js":
/*!*****************************************************************!*\
  !*** ../scanner-global-library/dist/page-response-processor.js ***!
  \*****************************************************************/
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
exports.PageResponseProcessor = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
let PageResponseProcessor = class PageResponseProcessor {
    getResponseError(response, error = new Error()) {
        if (!response.ok()) {
            return {
                errorType: 'HttpErrorCode',
                statusCode: response.status(),
                statusText: response.statusText(),
                message: 'Page returned an unsuccessful response code',
                stack: error.stack,
            };
        }
        if (!this.isHtmlContentType(response)) {
            const contentType = this.getContentType(response.headers());
            return {
                errorType: 'InvalidContentType',
                message: `Content type: ${contentType}`,
                stack: error.stack,
            };
        }
        return undefined;
    }
    getNavigationError(error) {
        const errorMessage = error.message;
        const browserError = {
            errorType: 'NavigationError',
            message: errorMessage,
            stack: error.stack,
        };
        if (/TimeoutError: Navigation Timeout Exceeded:/i.test(errorMessage)) {
            browserError.errorType = 'UrlNavigationTimeout';
        }
        else if (errorMessage.includes('net::ERR_CERT_AUTHORITY_INVALID') || errorMessage.includes('SSL_ERROR_UNKNOWN')) {
            browserError.errorType = 'SslError';
        }
        else if (errorMessage.includes('net::ERR_CONNECTION_REFUSED') || errorMessage.includes('NS_ERROR_CONNECTION_REFUSED')) {
            browserError.errorType = 'ResourceLoadFailure';
        }
        else if (errorMessage.includes('Cannot navigate to invalid URL') || errorMessage.includes('Invalid url')) {
            browserError.errorType = 'InvalidUrl';
        }
        else if (errorMessage.includes('net::ERR_ABORTED') || errorMessage.includes('NS_BINDING_ABORTED')) {
            browserError.errorType = 'EmptyPage';
        }
        else if (errorMessage.includes('net::ERR_NAME_NOT_RESOLVED')) {
            browserError.errorType = 'UrlNotResolved';
        }
        return browserError;
    }
    isHtmlContentType(response) {
        const contentType = this.getContentType(response.headers());
        return contentType !== undefined && contentType.indexOf('text/html') !== -1;
    }
    getContentType(headers) {
        // All header names are lower-case in puppeteer API
        return headers['content-type'];
    }
};
PageResponseProcessor = __decorate([
    inversify_1.injectable()
], PageResponseProcessor);
exports.PageResponseProcessor = PageResponseProcessor;
//# sourceMappingURL=page-response-processor.js.map

/***/ }),

/***/ "../scanner-global-library/dist/page.js":
/*!**********************************************!*\
  !*** ../scanner-global-library/dist/page.js ***!
  \**********************************************/
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
exports.Page = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const logger_1 = __webpack_require__(/*! logger */ "../logger/dist/index.js");
const axe_puppeteer_factory_1 = __webpack_require__(/*! ./factories/axe-puppeteer-factory */ "../scanner-global-library/dist/factories/axe-puppeteer-factory.js");
const web_driver_1 = __webpack_require__(/*! ./web-driver */ "../scanner-global-library/dist/web-driver.js");
const page_navigator_1 = __webpack_require__(/*! ./page-navigator */ "../scanner-global-library/dist/page-navigator.js");
let Page = class Page {
    constructor(webDriver, axePuppeteerFactory, pageNavigator, logger) {
        this.webDriver = webDriver;
        this.axePuppeteerFactory = axePuppeteerFactory;
        this.pageNavigator = pageNavigator;
        this.logger = logger;
    }
    get userAgent() {
        return this.pageNavigator.pageConfigurator.getUserAgent();
    }
    async create(browserExecutablePath) {
        this.browser = await this.webDriver.launch(browserExecutablePath);
        this.page = await this.browser.newPage();
    }
    async scanForA11yIssues(url, contentSourcePath) {
        let scanResults;
        const response = await this.pageNavigator.navigate(url, this.page, async (browserError) => {
            var _a;
            (_a = this.logger) === null || _a === void 0 ? void 0 : _a.logError('Page navigation error', { browserError: common_1.System.serializeError(browserError) });
            scanResults = { error: browserError, pageResponseCode: browserError.statusCode };
        });
        if ((scanResults === null || scanResults === void 0 ? void 0 : scanResults.error) !== undefined) {
            return scanResults;
        }
        return this.scanPageForIssues(response, contentSourcePath);
    }
    async close() {
        if (this.webDriver !== undefined) {
            await this.webDriver.close();
        }
    }
    async scanPageForIssues(response, contentSourcePath) {
        var _a, _b;
        const axePuppeteer = await this.axePuppeteerFactory.createAxePuppeteer(this.page, contentSourcePath);
        let axeResults;
        try {
            axeResults = await axePuppeteer.analyze();
        }
        catch (error) {
            (_a = this.logger) === null || _a === void 0 ? void 0 : _a.logError('Axe core engine error', { browserError: common_1.System.serializeError(error), url: this.page.url() });
            return { error: `Axe core engine error. ${common_1.System.serializeError(error)}`, scannedUrl: this.page.url() };
        }
        const scanResults = {
            results: axeResults,
            pageTitle: await this.page.title(),
            browserSpec: await this.browser.version(),
            pageResponseCode: response.status(),
        };
        if (response.request().redirectChain().length > 0) {
            (_b = this.logger) === null || _b === void 0 ? void 0 : _b.logWarn(`Scanning performed on redirected page`, { redirectedUrl: axeResults.url });
            scanResults.scannedUrl = axeResults.url;
        }
        return scanResults;
    }
};
Page = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(web_driver_1.WebDriver)),
    __param(1, inversify_1.inject(axe_puppeteer_factory_1.AxePuppeteerFactory)),
    __param(2, inversify_1.inject(page_navigator_1.PageNavigator)),
    __param(3, inversify_1.inject(logger_1.GlobalLogger)), __param(3, inversify_1.optional()),
    __metadata("design:paramtypes", [web_driver_1.WebDriver,
        axe_puppeteer_factory_1.AxePuppeteerFactory,
        page_navigator_1.PageNavigator,
        logger_1.GlobalLogger])
], Page);
exports.Page = Page;
//# sourceMappingURL=page.js.map

/***/ }),

/***/ "../scanner-global-library/dist/register-scanner-to-container.js":
/*!***********************************************************************!*\
  !*** ../scanner-global-library/dist/register-scanner-to-container.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.registerScannerToContainer = void 0;
const axe_puppeteer_factory_1 = __webpack_require__(/*! ./factories/axe-puppeteer-factory */ "../scanner-global-library/dist/factories/axe-puppeteer-factory.js");
function registerScannerToContainer(container) {
    container.bind(axe_puppeteer_factory_1.AxePuppeteerFactory).toSelf().inSingletonScope();
    return container;
}
exports.registerScannerToContainer = registerScannerToContainer;
//# sourceMappingURL=register-scanner-to-container.js.map

/***/ }),

/***/ "../scanner-global-library/dist/web-driver.js":
/*!****************************************************!*\
  !*** ../scanner-global-library/dist/web-driver.js ***!
  \****************************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebDriver = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const logger_1 = __webpack_require__(/*! logger */ "../logger/dist/index.js");
const puppeteer_1 = __importDefault(__webpack_require__(/*! puppeteer */ "puppeteer"));
let WebDriver = class WebDriver {
    constructor(logger, puppeteer = puppeteer_1.default) {
        this.logger = logger;
        this.puppeteer = puppeteer;
    }
    async launch(browserExecutablePath) {
        var _a;
        this.browser = await this.puppeteer.launch({
            executablePath: browserExecutablePath,
            headless: true,
            args: ['--disable-dev-shm-usage'],
            defaultViewport: {
                width: 1920,
                height: 1080,
                deviceScaleFactor: 1,
            },
        });
        (_a = this.logger) === null || _a === void 0 ? void 0 : _a.logInfo('Chromium browser instance started.');
        return this.browser;
    }
    async close() {
        var _a;
        if (this.browser !== undefined) {
            await this.browser.close();
            (_a = this.logger) === null || _a === void 0 ? void 0 : _a.logInfo('Chromium browser instance stopped.');
        }
    }
};
WebDriver = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(logger_1.GlobalLogger)), __param(0, inversify_1.optional()),
    __metadata("design:paramtypes", [logger_1.Logger, Object])
], WebDriver);
exports.WebDriver = WebDriver;
//# sourceMappingURL=web-driver.js.map

/***/ }),

/***/ "./src/crawler/ai-crawler.ts":
/*!***********************************!*\
  !*** ./src/crawler/ai-crawler.ts ***!
  \***********************************/
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
exports.AICrawler = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
const accessibility_insights_crawler_1 = __webpack_require__(/*! accessibility-insights-crawler */ "../crawler/dist/index.js");
const axe_result_converter_1 = __webpack_require__(/*! axe-result-converter */ "../axe-result-converter/dist/index.js");
let AICrawler = class AICrawler {
    constructor(crawler, scanResultReader, axeResultsReducer) {
        this.crawler = crawler;
        this.scanResultReader = scanResultReader;
        this.axeResultsReducer = axeResultsReducer;
    }
    async crawl(crawlerRunOptions) {
        try {
            await this.crawler.crawl(crawlerRunOptions);
            let combinedAxeResult = await this.combineAxeResults();
            combinedAxeResult.scanMetadata = await this.scanResultReader.getScanMetadata(crawlerRunOptions.baseUrl);
            return combinedAxeResult;
        }
        catch (error) {
            console.log(error, `An error occurred while scanning/crawling website page ${crawlerRunOptions.baseUrl}`);
            return { error: common_1.System.serializeError(error) };
        }
        finally {
            console.log(`Accessibility scanning/crawling of URL ${crawlerRunOptions.baseUrl} completed`);
        }
    }
    async combineAxeResults() {
        const combinedAxeResults = {
            violations: new axe_result_converter_1.AxeScanResultsHashable(),
            passes: new axe_result_converter_1.AxeScanResultsHashable(),
            incomplete: new axe_result_converter_1.AxeScanResultsHashable(),
            inapplicable: new axe_result_converter_1.AxeScanResultsHashable(),
        };
        const urlCount = {
            total: 0,
            failed: 0,
            passed: 0,
        };
        for await (const scanResult of this.scanResultReader) {
            urlCount.total++;
            if (scanResult.scanState === 'pass') {
                urlCount.passed++;
            }
            else if (scanResult.scanState === 'fail') {
                urlCount.failed++;
            }
            if (scanResult.axeResults) {
                this.axeResultsReducer.reduce(combinedAxeResults, scanResult.axeResults);
            }
        }
        return {
            urlCount,
            combinedAxeResults,
        };
    }
};
AICrawler = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(accessibility_insights_crawler_1.Crawler)),
    __param(1, inversify_1.inject(accessibility_insights_crawler_1.DbScanResultReader)),
    __param(2, inversify_1.inject(axe_result_converter_1.AxeResultsReducer)),
    __metadata("design:paramtypes", [accessibility_insights_crawler_1.Crawler, Object, axe_result_converter_1.AxeResultsReducer])
], AICrawler);
exports.AICrawler = AICrawler;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCliContainer = exports.AICrawler = exports.AIScanner = void 0;
var ai_scanner_1 = __webpack_require__(/*! ./scanner/ai-scanner */ "./src/scanner/ai-scanner.ts");
Object.defineProperty(exports, "AIScanner", { enumerable: true, get: function () { return ai_scanner_1.AIScanner; } });
var ai_crawler_1 = __webpack_require__(/*! ./crawler/ai-crawler */ "./src/crawler/ai-crawler.ts");
Object.defineProperty(exports, "AICrawler", { enumerable: true, get: function () { return ai_crawler_1.AICrawler; } });
var setup_cli_container_1 = __webpack_require__(/*! ./setup-cli-container */ "./src/setup-cli-container.ts");
Object.defineProperty(exports, "setupCliContainer", { enumerable: true, get: function () { return setup_cli_container_1.setupCliContainer; } });


/***/ }),

/***/ "./src/scanner/ai-scanner.ts":
/*!***********************************!*\
  !*** ./src/scanner/ai-scanner.ts ***!
  \***********************************/
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
exports.AIScanner = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const inversify_1 = __webpack_require__(/*! inversify */ "inversify");
const scanner_global_library_1 = __webpack_require__(/*! scanner-global-library */ "../scanner-global-library/dist/index.js");
const common_1 = __webpack_require__(/*! common */ "../common/dist/index.js");
let AIScanner = class AIScanner {
    constructor(page) {
        this.page = page;
    }
    async scan(url, chromePath, sourcePath) {
        try {
            console.log(`Starting accessibility scanning of URL ${url}`);
            await this.page.create(chromePath);
            return await this.page.scanForA11yIssues(url, sourcePath);
        }
        catch (error) {
            console.log(error, `An error occurred while scanning website page ${url}`);
            return { error: common_1.System.serializeError(error) };
        }
        finally {
            await this.page.close();
            console.log(`Accessibility scanning of URL ${url} completed`);
        }
    }
    getUserAgent() {
        return this.page.userAgent;
    }
};
AIScanner = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(scanner_global_library_1.Page)),
    __metadata("design:paramtypes", [scanner_global_library_1.Page])
], AIScanner);
exports.AIScanner = AIScanner;


/***/ }),

/***/ "./src/setup-cli-container.ts":
/*!************************************!*\
  !*** ./src/setup-cli-container.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCliContainer = void 0;
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
const accessibility_insights_crawler_1 = __webpack_require__(/*! accessibility-insights-crawler */ "../crawler/dist/index.js");
const inversify = __importStar(__webpack_require__(/*! inversify */ "inversify"));
function setupCliContainer(container = new inversify.Container({ autoBindInjectable: true })) {
    accessibility_insights_crawler_1.setupCrawlerContainer(container);
    container.bind(accessibility_insights_crawler_1.Crawler).toConstantValue(new accessibility_insights_crawler_1.Crawler(container));
    return container;
}
exports.setupCliContainer = setupCliContainer;


/***/ }),

/***/ "@axe-core/puppeteer":
/*!**************************************!*\
  !*** external "@axe-core/puppeteer" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@axe-core/puppeteer");

/***/ }),

/***/ "@sindresorhus/fnv1a":
/*!**************************************!*\
  !*** external "@sindresorhus/fnv1a" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sindresorhus/fnv1a");

/***/ }),

/***/ "accessibility-insights-report":
/*!************************************************!*\
  !*** external "accessibility-insights-report" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("accessibility-insights-report");

/***/ }),

/***/ "apify":
/*!************************!*\
  !*** external "apify" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apify");

/***/ }),

/***/ "apify-shared/utilities":
/*!*****************************************!*\
  !*** external "apify-shared/utilities" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apify-shared/utilities");

/***/ }),

/***/ "applicationinsights":
/*!**************************************!*\
  !*** external "applicationinsights" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("applicationinsights");

/***/ }),

/***/ "convict":
/*!**************************!*\
  !*** external "convict" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("convict");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "encoding-down":
/*!********************************!*\
  !*** external "encoding-down" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("encoding-down");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "leveldown":
/*!****************************!*\
  !*** external "leveldown" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("leveldown");

/***/ }),

/***/ "levelup":
/*!**************************!*\
  !*** external "levelup" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("levelup");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "module":
/*!*************************!*\
  !*** external "module" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("puppeteer");

/***/ }),

/***/ "raw-body":
/*!***************************!*\
  !*** external "raw-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("raw-body");

/***/ }),

/***/ "serialize-error":
/*!**********************************!*\
  !*** external "serialize-error" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-error");

/***/ }),

/***/ "sha.js":
/*!*************************!*\
  !*** external "sha.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sha.js");

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

/***/ "uuid-with-v6":
/*!*******************************!*\
  !*** external "uuid-with-v6" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid-with-v6");

/***/ }),

/***/ "verror":
/*!*************************!*\
  !*** external "verror" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("verror");

/***/ }),

/***/ "wtfnode":
/*!**************************!*\
  !*** external "wtfnode" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wtfnode");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map