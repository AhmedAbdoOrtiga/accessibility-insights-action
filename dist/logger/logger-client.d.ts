import { LoggerProperties } from './logger-properties';
export declare enum LogLevel {
    info = 0,
    warn = 1,
    verbose = 2,
    error = 3
}
export interface LoggerClient {
    setup(baseProperties?: {
        [index: string]: string;
    }): Promise<void>;
    log(message: string, logLevel: LogLevel, properties?: {
        [name: string]: string;
    }): void;
    trackException(error: Error): void;
    setCustomProperties(properties: LoggerProperties): void;
}
