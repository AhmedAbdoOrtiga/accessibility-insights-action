import * as express from 'express';
import * as getPort from 'get-port';
import * as serveStatic from 'serve-static';
import { Logger } from './logger/logger';
import { TaskConfig } from './task-config';
export declare class LocalFileServer {
    private readonly taskConfig;
    private readonly logger;
    private readonly getPortFunc;
    private readonly expressFunc;
    private readonly serveStaticFunc;
    private server;
    private startServerPromise;
    constructor(taskConfig: TaskConfig, logger: Logger, getPortFunc: typeof getPort, expressFunc: typeof express, serveStaticFunc: typeof serveStatic);
    start(): Promise<string>;
    stop(): void;
    private startServer;
}
