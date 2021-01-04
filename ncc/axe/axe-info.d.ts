import 'reflect-metadata';
import * as Axe from 'axe-core';
export declare class AxeInfo {
    private readonly axe;
    constructor(axe?: typeof Axe);
    get version(): string;
}
