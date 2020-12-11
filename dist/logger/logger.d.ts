/// <reference types="node" />
import { LoggerClient, LogLevel } from './logger-client';
export declare class Logger {
    protected readonly loggerClients: LoggerClient[];
    protected readonly currentProcess: typeof process;
    protected initialized: boolean;
    protected isDebugEnabled: boolean;
    constructor(loggerClients: LoggerClient[], currentProcess: typeof process);
    setup(baseProperties?: {
        [property: string]: string;
    }): Promise<void>;
    log(message: string, logLevel: LogLevel, properties?: {
        [name: string]: string;
    }): void;
    logInfo(message: string, properties?: {
        [name: string]: string;
    }): void;
    logVerbose(message: string, properties?: {
        [name: string]: string;
    }): void;
    logWarn(message: string, properties?: {
        [name: string]: string;
    }): void;
    logError(message: string, properties?: {
        [name: string]: string;
    }): void;
    trackException(error: Error): void;
    trackExceptionAny(underlyingErrorData: unknown | Error, message: string): void;
    private invokeLoggerClient;
    private ensureInitialized;
}
