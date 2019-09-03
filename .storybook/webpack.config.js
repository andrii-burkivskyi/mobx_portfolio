const resolve = require('../webpack/resolve.js');

const ts_loader = require('../webpack/ts-loader-config.js');
const svg_loader = require('../webpack/svg-loader-config.js');
const scss_loader = require('../webpack/scss-loader-config.js');
const css_loader = require('../webpack/css-loader-config.js');

module.exports = async ({ config, mode }) => {
    return {
        ...config,
        resolve,

        watchOptions: { aggregateTimeout: 100 },

        devtool: "eval-source-map",
        externals: /\@storybook\/addon\-storyshots/,
        module: {
            ...config.module,
            rules: [
                ts_loader,
                svg_loader,
                scss_loader,
                css_loader
            ]
        }
    };
}