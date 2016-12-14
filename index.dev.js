/**
 * Script to start the Server in Development mode.
 */
require('babel-register')
const webpack = require('webpack')
const webpackDev = require('webpack-dev-middleware')
const webpackHot = require('webpack-hot-middleware')
const webpackClient = require('./webpack.config.client.js')
const webpackBase = require('./webpack.config.js')
const mapValues = require('lodash/fp/mapValues')
const http = require('http')
const path = require('path')
const appFactory = require('./server/http').default
const socketio = require('./server/io').default
const data = require('./server/data').default

const PORT = process.env.PORT || 3000
const app = appFactory(data)
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
    rules: [
      { test: /\.js$/, use: ['react-hot-loader/webpack', 'babel-loader'], exclude: /node_modules/ },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]

  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
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

server.listen(PORT, function () {
  console.log('Listening to port ', PORT)
})

socketio(server, data)
