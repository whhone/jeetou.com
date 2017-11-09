var config = require('./webpack.base.config.js');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');


config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    // don't reload if there is an error
    new webpack.NoErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
];

// to transform JSX into JS
config.module.loaders = [{ 
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loaders: [
        'react-hot',
        'babel-loader?presets[]=es2015,presets[]=react',
    ],
}];

module.exports = config;

