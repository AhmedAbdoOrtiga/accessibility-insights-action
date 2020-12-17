import { ScanArguments } from '../scan-arguments';
export interface CommandRunner {
    runCommand(scanArguments: ScanArguments): Promise<void>;
}
