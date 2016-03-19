var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devtool: 'source-map',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].bundle.js',
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader?modules" },
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') }
    ]
  }
};

module.exports = config;
