import { BaseTelemetryProperties } from './base-telemetry-properties';
import { LoggerClient, LogLevel } from './logger-client';
import { LoggerProperties } from './logger-properties';
export declare class ConsoleLoggerClient implements LoggerClient {
    private readonly consoleObject;
    private baseProperties?;
    constructor(consoleObject: typeof console);
    setup(baseProperties?: BaseTelemetryProperties): Promise<void>;
    log(message: string, logLevel: LogLevel, properties?: {
        [name: string]: string;
    }): void;
    trackException(error: Error): void;
    setCustomProperties(properties: LoggerProperties): void;
    private getPrintablePropertiesString;
    private getPrintableString;
    private logInConsole;
}
