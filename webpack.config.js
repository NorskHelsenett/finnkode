const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: {
        main: "./src/js/master.js",
        "code-system": "./src/js/code-system.js",
        search: "./src/js/search.js"
    },
    resolve: {
        extensions: ['.js', '.scss']
    },
    // plugins: [{
    //         test: /\.(sa|sc|c)ss$/,
    //         use: [
    //             {
    //                 loader: MiniCssExtractPlugin.loader
    //             },
    //             {
    //                 loader: "css-loader"
    //             },
    //             {
    //                 loader: 'postcss-loader'
    //             },
    //             {
    //                 loader: "sass-loader"
    //             }]
    // }],
    mode: "development",
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist/js'),
        sourceMapFilename: "./maps/[name].js.map"
    },
    devtool: "inline-source-map"
};