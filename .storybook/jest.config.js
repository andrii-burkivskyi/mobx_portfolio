const path = require('path');
const { defaults } = require('jest-config');

module.exports = {
    ...defaults,
    globals: {
        "ts-jest": {
            tsConfigFile: "tsconfig.json",
            enableTsDiagnostics: true
        }
    },
    rootDir: path.join(__dirname, '..'),
    setupFiles: ['<rootDir>/.storybook/register-context.js'],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleDirectories: [
        ".",
        "src",
        "node_modules"
    ],
    moduleFileExtensions: ['ts', 'tsx', ...defaults.moduleFileExtensions],
    moduleNameMapper: {
        "^.+\\.(svg|css|less|scss)$": "identity-obj-proxy",
    }
};
