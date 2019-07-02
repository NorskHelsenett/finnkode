const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        master: "./src/js/master.js",
        "code-system": "./src/js/code-system.js",
        search: "./src/js/search.js"
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    mode: "development",
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist/assets/js'),
        sourceMapFilename: "./maps/[name].js.map"
    },
    devtool: "source-map"
};