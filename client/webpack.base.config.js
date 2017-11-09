var path = require("path")

module.exports = {
  context: __dirname,

  // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs
  entry: './src/js/index',

  output: {
    path: path.resolve('./assets/bundles/'),
    filename: "[name]-[hash].js",
  },

  plugins: [],

  module: {
    loaders: [],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}

