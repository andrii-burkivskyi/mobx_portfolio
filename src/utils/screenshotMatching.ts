import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { logger } from '@storybook/node-logger';

const React = require('react');
const path = require('path');
const fs = require('fs');

// Image snapshots
// We do screenshots against the static build of the storybook.
// For this test to be meaningful, you must build the static version of the storybook *before* running this test suite.
const pathToStorybookStatic = path.join(__dirname, '../..', 'storybook-static');

export const runStoryshotsTest = (suite: string, storyKindRegex: RegExp) => {
    if (!fs.existsSync(pathToStorybookStatic)) {
        logger.error(
            'You are running image snapshots without having the static build of storybook. Please run "yarn run build-storybook" before running tests.'
        );
    } else {
        initStoryshots({
            suite,
            storyKindRegex,
            framework: 'react',
            test: imageSnapshot({
                storybookUrl: `file://${pathToStorybookStatic}`
            }),
        });
    }
}
