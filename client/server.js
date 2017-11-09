var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.local.config');

var host = '127.0.0.1';
var port = 3000;

// Override the default host:port for serving static files by passing the deired host:port.
// e.g., run `node server.js 10.0.1.4:3000`
if (process.argv.length > 2) {
    hostPort = process.argv[2];
    var arr = hostPort.split(':');
    host = arr[0];
    port = arr[1];

    console.log(`Using ${host}:${port} to serve static resources.`);
}

config.entry = [
    `webpack-dev-server/client?http://${host}:${port}`,
    'webpack/hot/only-dev-server',
    './src/js/index',
];

// Tell Django {% render_bundle 'file_name' %} should load from
config.output.publicPath = `http://${host}:${port}/assets/bundles/`;

// Run a webpack-dev-server to bath compile and serve  bundles.
new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true
}).listen(port, '0.0.0.0', function(err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at 0.0.0.0:3000');
});
