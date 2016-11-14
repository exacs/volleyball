/**
 * Webpack config file to generate SERVER files for production
 *
 * Compiles "server/" into "build.js".
 */

const path = require('path')
const webpack = require('webpack')
const base = require('./webpack.config.js')
const fs = require('fs')

// Specific setup for node.js execution environments
let nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => { nodeModules[mod] = 'commonjs ' + mod })

module.exports = {
  context: path.join(__dirname),
  entry: './index.pro.js',
  target: 'node',

  output: {
    path: path.join(__dirname),
    filename: 'build.js'
  },

  externals: nodeModules,

  resolve: Object.assign({}, base.resolve),

  module: base.module,

  plugins: base.plugins.concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ])
}
