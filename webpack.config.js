'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: "./js/main.js",

    output: {
        path: "./js-compiled",
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
        new ExtractTextPlugin("style.css")
    ]
};