const css_loader = {
    test: /\.css$/,
    use: [
        'style-loader',
        'css-loader?modules&localIdentName=[local]'
    ]
};

module.exports = css_loader;
