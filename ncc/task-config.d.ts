/// <reference types="node" />
import * as actionCore from '@actions/core';
import * as process from 'process';
export declare class TaskConfig {
    private readonly processObj;
    private readonly actionCoreObj;
    constructor(processObj: typeof process, actionCoreObj?: typeof actionCore);
    getReportOutDir(): string;
    getSiteDir(): string;
    getScanUrlRelativePath(): string;
    getToken(): string;
    getChromePath(): string;
    getRunId(): number;
}
