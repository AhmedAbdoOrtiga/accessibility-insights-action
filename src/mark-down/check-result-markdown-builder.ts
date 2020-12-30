// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { injectable } from 'inversify';

import { brand } from '../content/strings';
import { bold, footerSeparator, heading, link, listItem, productTitle, sectionSeparator } from '../utils/markdown-formatter';
import { CombinedReportParameters } from 'accessibility-insights-report';

@injectable()
export class CheckResultMarkdownBuilder {
    public errorContent = (): string => {
        const lines = [
            heading(`${productTitle()}: Something went wrong`, 3),
            sectionSeparator(),

            `You can review the log to troubleshoot the issue. Fix it and re-run the workflow to run the automated accessibility checks again.`,
            sectionSeparator(),
        ];

        return this.scanResultDetails(lines.join(''));
    };

    public content = (combinedReportParameters: CombinedReportParameters): string => {
        const passedChecks = combinedReportParameters.results.resultsByRule.passed.length;
        const inapplicableChecks = combinedReportParameters.results.resultsByRule.notApplicable.length;
        const failedChecks = combinedReportParameters.results.resultsByRule.failed.reduce((a, b) => a + b.failed.length, 0);

        const lines = [
            heading(`${productTitle()}`, 3),
            // sectionSeparator(),
            listItem(`${bold(`Rules: `)}${failedChecks} check(s) failed, ${passedChecks} check(s) passed, and ${inapplicableChecks} were not applicable`),
            // sectionSeparator(),
            // sectionSeparator(),
            listItem(
                `${bold(`URLs: `)}${combinedReportParameters.results.urlResults.failedUrls} URL(s) failed, ${combinedReportParameters.results.urlResults.passedUrls} URL(s) passed, and ${combinedReportParameters.results.urlResults.unscannableUrls} were not scannable`,
            ),
            sectionSeparator(),

            this.downloadArtifacts(),
        ];

        return this.scanResultDetails(lines.join(''), this.scanResultFooter(combinedReportParameters));
    };

    private readonly scanResultDetails = (scanResult: string, footer?: string): string => {
        const lines = [scanResult, sectionSeparator(), footerSeparator(), sectionSeparator(), footer];

        return lines.join('');
    };

    private readonly scanResultFooter = (combinedReportParameters: CombinedReportParameters): string => {
        const axeVersion = combinedReportParameters.axeVersion;
        const axeCoreUrl = `https://github.com/dequelabs/axe-core/releases/tag/v${axeVersion}`;
        const axeLink = link(axeCoreUrl, `axe-core ${axeVersion}`);

        return `This scan used ${axeLink} with ${combinedReportParameters.userAgent}.`;
    };



    private readonly downloadArtifacts = () => {
        return listItem(`Download the ${bold(brand)} artifact to view the detailed results of these checks`);
    };
}
