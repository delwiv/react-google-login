const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    demo: [
      'webpack/hot/dev-server',
      './demo/index.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['', '.js'],
  },
  devServer: {
    contentBase: './demo',
    historyApiFallback: true,
    compress: false,
    host: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
  },
};
