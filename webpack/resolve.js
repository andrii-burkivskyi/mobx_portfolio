const path = require("path");

const resolve = {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.svg', '.sass', '.scss'],
    alias: {
        components: path.join(__dirname, "../src/components"),
        assets: path.join(__dirname, "../src/assets"),
        containers: path.join(__dirname, "../src/containers"),
        core: path.join(__dirname, "../src/core"),
        pages: path.join(__dirname, "../src/pages"),
        utils: path.join(__dirname, "../src/utils"),
    }
};

module.exports = resolve;
