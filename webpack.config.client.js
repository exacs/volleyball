/**
 * Webpack config file to generate CLIENT files
 *
 * Compiles "client/" into "public/bundle.js"
 */
const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.config.js')

module.exports = {
  context: path.join(__dirname, 'client'),
  entry: {
    index: './index',
    referee: './referee'
  },

  output: {
    path: path.join(__dirname, 'public/build'),
    filename: '[name].js'
  },

  resolve: Object.assign({}, base.resolve),

  module: {
    rules: base.module.rules
  },

  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ])
}
