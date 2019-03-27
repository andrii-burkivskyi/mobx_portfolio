const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE_ENV === 'production';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const AUTOPREFIXER_BROWSERS = [
    'Android 2.3',
    'Android >= 4',
    'Chrome >= 35',
    'Firefox >= 31',
    'Explorer >= 9',
    'iOS >= 7',
    'Opera >= 12',
    'Safari >= 7.1'
];

module.exports = {
    entry: ['@babel/polyfill', './src/client.tsx'],

    output: {
        path: path.resolve(__dirname, 'public', 'build'),
        publicPath: '/build/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.sass', '.scss']
    },

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "eval-source-map",

    module: {
        rules: [{
                test: /\.(j|t)sx?$/,
                exclude: /\/node_modules\//,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        browsers: "last 2 versions"
                                    }
                                }
                            ],
                            "@babel/preset-typescript",
                            "@babel/preset-react"
                        ],
                        plugins: [
                            ["@babel/plugin-syntax-dynamic-import"],
                            ["@babel/plugin-proposal-export-default-from"],
                            ["@babel/plugin-proposal-decorators", {
                                legacy: true
                            }],
                            ["@babel/plugin-proposal-class-properties", {
                                loose: true
                            }],
                            "react-hot-loader/babel"
                        ]
                    }
                }
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /\/node_modules\//,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[name]--[local]&minimize',
                    {
                        loader: 'postcss-loader',
                        options: {
                            parser: 'postcss-scss',
                            plugins: (bundler) => [
                                require('postcss-import')({
                                    addDependencyTo: bundler
                                }),
                                require('precss')(),
                                require('autoprefixer')({
                                    browsers: AUTOPREFIXER_BROWSERS
                                })
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?modules&localIdentName=[local]'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 50,
            maxInitialRequests: 3,
            automaticNameDelimiter: '-',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -20
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },

    plugins: [
        // new BundleAnalyzerPlugin(),
        // new WebpackNotifierPlugin({ title: 'Webpack' }),
        new ForkTsCheckerWebpackPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en\-gb/),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
    ],

    devServer: {
        host: '0.0.0.0',
        port: 3333,
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: true
    }
};

if (IS_PRODUCTION) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            },
            output: {
                comments: false
            }
        })
    );
}