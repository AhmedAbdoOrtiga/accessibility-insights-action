// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import 'reflect-metadata';

import { setupIocContainer } from './ioc/setup-ioc-container';
import { Logger } from './logger/logger';
import { Scanner } from './scanner/scanner';
import { isEmpty } from 'lodash';

(async () => {
    var util = require('util');
    var exec = util.promisify(require('child_process').exec);
    const { stdout, stderr } = await exec(`npm install -g leveldown`);

    if (!isEmpty(stderr)) {
        console.log('couldn\'t install external dependencies')
        throw Error(stderr);
    }

    console.log(stdout);
    const container = setupIocContainer();
    const logger = container.get(Logger);
    await logger.setup();

    const scanner = container.get(Scanner);
    await scanner.scan();
})().catch((error) => {
    console.log('Exception thrown in action: ', error);
    process.exit(1);
});
