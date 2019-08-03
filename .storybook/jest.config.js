const path = require('path');
const { defaults } = require('jest-config');

module.exports = {
    ...defaults,
    rootDir: path.join(__dirname, '..'),
    setupFiles: ['<rootDir>/.storybook/register-context.js'],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        "^.+\\.(svg|css|less|scss)$": "identity-obj-proxy"
    }
};
