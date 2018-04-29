const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const { rootPath } = require('./helpers')

const prodConfig = {
  devtool: 'inline-source-map',
  entry: [
    './src/index.jsx'
  ],
  output: {
    filename: 'app-[hash].js',
    path: rootPath('dist'),
    publicPath: '/a-site/dist'
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg)$/,
        use: 'url-loader?limit=10000&name=[name]-[hash].[ext]&publicPath=/a-site/dist&outputPath=assets/images/'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: rootPath('src/index.html'),
      inject: 'body'
      // favicon: rootPath('src/assets/images/nodejs.png')
    }),
    new ExtractTextPlugin('css/styles-[hash].css')
  ]
}

module.exports = webpackMerge(commonConfig, prodConfig)
