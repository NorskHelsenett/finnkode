const path = require("path");
const glob = require("glob");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "./src/js/master.js",
        "code-system": "./src/js/code-system.js",
        search: "./src/js/search.js"
    },
    mode: "development",
    output: {
        filename: "[name].js",
        path: __dirname + "/dist/js/",
        sourceMapFilename: "./maps/[name].js.map"
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: "css-loader",
                    options: {sourceMap: true}
                }, {
                    loader: "sass-loader",
                    options: {sourceMap: true}
                }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/[name].css"
        })
    ]
};