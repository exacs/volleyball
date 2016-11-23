/**
 * Script to start the Server in Development mode.
 *
 * Do not use in Production
 */

require('babel-register')
const webpack = require('webpack')
const webpackDev = require('webpack-dev-middleware')
const webpackHot = require('webpack-hot-middleware')
const webpackClient = require('./webpack.config.client.js')
const webpackBase = require('./webpack.config.js')
const mapValues = require('lodash/fp/mapValues')

const http = require('http')
const express = require('express')
const path = require('path')
const app = require('./server').default
const socketio = require('./server/io').default

const PORT = process.env.PORT || 3000
const server = http.Server(app)

const config = {
  context: path.join(__dirname, 'client'),
  entry: mapValues(path => [
    'webpack-hot-middleware/client',
    'webpack/hot/dev-server',
    path
  ])(webpackClient.entry),

  output: {
    path: path.join(__dirname, 'public/build'),
    publicPath: '/static/build',
    filename: '[name].js'
  },

  resolve: Object.assign({}, webpackBase.resolve),

  module: {
    rules: webpackBase.module.rules.map(rule =>
      rule.test === '/.js$' ? {
        test: rule.test,
        use: ['react-hot'].concat(rule.use),
        exclude: rule.exclude
      } : rule
    )
  },

  plugins: webpackBase.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ])
}

const compiler = webpack(config)
const options = {
  noInfo: true,
  publicPath: config.output.publicPath,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300
    // poll: true,
  }
}

app.use(webpackDev(compiler, options))
app.use(webpackHot(compiler))
app.use('/static', express.static('public'))

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})

socketio(server)
