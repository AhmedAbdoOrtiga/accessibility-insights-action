// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { CombinedScanResult } from 'accessibility-insights-scan-local';
import { inject, injectable } from 'inversify';

import { CheckResultMarkdownBuilder } from './check-result-markdown-builder';
import { CombinedReportParameters } from 'accessibility-insights-report';

@injectable()
export class AxeMarkdownConvertor {
    constructor(@inject(CheckResultMarkdownBuilder) private readonly checkResultMarkdownBuilder: CheckResultMarkdownBuilder) {}

    public convert(combinedReportParameters: CombinedReportParameters): string {
        return this.checkResultMarkdownBuilder.content(combinedReportParameters);
    }

    public getErrorMarkdown(): string {
        return this.checkResultMarkdownBuilder.errorContent();
    }
}
