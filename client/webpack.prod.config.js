var config = require('./webpack.base.config.js');
var BundleTracker = require('webpack-bundle-tracker');
var webpack = require('webpack');

// Output the distruction to asserts/dist
config.output.path = require('path').resolve('./assets/dist');
config.output.publicPath = "/static/dist/"

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats-prod.json'}),

  // removes a lots of debugging code in React
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    },
  }),

  // minifies codes
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),

  // keeps hashes consistent between compilations
  // new webpack.optimize.OccurenceOrderPlugin(),
]);

config.module.loaders.push({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader?presets[]=es2015,presets[]=react',
})

module.exports = config;

