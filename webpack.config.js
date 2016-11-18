'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: "./src/js/main.js",

    output: {
        path: "./dist",
        filename: "app.js"
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/, loader: "babel-loader"
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin()
    ]
};