'use strict'
var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV || 'development';
var config = {
    entry: {
        bundle: path.join(__dirname, 'client/js/index')
    },
    output: {
        path: path.join(__dirname, 'client/dist/'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.modernizrrc$/, loader: 'modernizr'}
        ]
    },
    resolve: {
        extensions: ['', '.js'],
        alias: {
            masonry: 'masonry-layout',
            isotope: 'isotope-layout',
            modernizr$: path.resolve(__dirname, "path/to/.modernizrrc")
        }
    },
    quiet: false,
    noInfo: false,
    stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true,
                drop_console: true
            },
            excludes: {},
            beautify: false,
            comments: false,
        })
    ]
};
module.exports = config;
