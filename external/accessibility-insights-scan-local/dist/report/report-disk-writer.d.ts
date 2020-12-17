/// <reference types="node" />
import * as fs from 'fs';
import * as path from 'path';
import { ReportFormats } from './report-formats';
export declare class ReportDiskWriter {
    private readonly fileSystemObj;
    private readonly pathObj;
    constructor(fileSystemObj?: typeof fs, pathObj?: typeof path);
    writeToDirectory(directory: string, fileName: string, format: ReportFormats, content: string): string;
    private ensureDirectory;
}
