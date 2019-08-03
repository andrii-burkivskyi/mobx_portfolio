const nameOf = require('ts-nameof');

const ts_loader = {
    test: /\.tsx?$/,
    use: [
        {
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                getCustomTransformers: () => ({ before: [nameOf] }),
            }
        }
    ]
};

module.exports = ts_loader;