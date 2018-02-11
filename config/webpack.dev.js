const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const { rootPath } = require('./helpers')

const devConfig = {
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: 'app.js',
    path: rootPath('public'),
    publicPath: '/'
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500,
    ignored: /node_modules/
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: rootPath('src/index.html'),
      inject: 'body'
    }),
    new ExtractTextPlugin('css/styles.css')
  ],
  devServer: {
    contentBase: rootPath('public'),
    publicPath: '',
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true,
    inline: true
  }
}

module.exports = webpackMerge(commonConfig, devConfig)
