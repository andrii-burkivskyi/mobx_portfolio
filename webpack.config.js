const path = require('path');

const plugins = require('./webpack/plugins.js');
const optimization = require('./webpack/optimization.js');
const resolve = require('./webpack/resolve.js');
const devServer = require('./webpack/devServer.js');

const ts_loader = require('./webpack/ts-loader-config.js');
const svg_loader = require('./webpack/svg-loader-config.js');
const scss_loader = require('./webpack/scss-loader-config.js');
const css_loader = require('./webpack/css-loader-config.js');

const config =  {
    entry: './src/client.tsx',

    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        publicPath: '/build/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve,

    watchOptions: { aggregateTimeout: 100 },

    devtool: "eval-source-map",

    module: {
        rules: [
            ts_loader,
            svg_loader,
            scss_loader,
            css_loader
        ]
    },
    optimization,

    plugins,

    devServer 
};

module.exports = config;