// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import 'reflect-metadata';

import { setupIocContainer } from './ioc/setup-ioc-container';
import { Logger } from './logger/logger';
import { Scanner } from './scanner/scanner';

(async () => {
    const container = setupIocContainer();
    const logger = container.get(Logger);
    await logger.setup();

    const scanner = container.get(Scanner);
    await scanner.scan();
})().catch((error) => {
    console.log('Exception thrown in action: ', error);
    process.exit(1);
});


const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function ls() {
  const { stdout, stderr } = await exec('ai-scan --url https://github.com/ --crawl true --restart');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
}
ls();