// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import 'reflect-metadata';

import { setupIocContainer } from './ioc/setup-ioc-container';
import { Logger } from './logger/logger';
import { Crawler } from './crawler/crawler';

(async () => {
    const container = setupIocContainer();
    const logger = container.get(Logger);
    await logger.setup();

    const crawler = container.get(Crawler);
    await crawler.run();
})().catch((error) => {
    console.log('Exception thrown in action: ', error);
    process.exit(1);
});
