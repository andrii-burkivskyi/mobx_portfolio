
const svg_loader = {
    test: /\.svg$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'svg-inline-loader',
        }
    ]
};

module.exports = svg_loader;
