const path = require('path');

const devServer = {
    host: '0.0.0.0',
    port: 3333,
    contentBase: path.resolve(__dirname, '..', 'public'),
    historyApiFallback: true
};

module.exports = devServer;
