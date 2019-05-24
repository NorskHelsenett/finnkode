const path = require('path');
const glob = require('glob');
const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './src/_js/master.js'
    },
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                  },
            {
                loader: "css-loader",
            },  {
                loader: "sass-loader",
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};