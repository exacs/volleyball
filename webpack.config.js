/**
 * Webpack base config file
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin({ filename: '[name].css' })

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractCSS.extract([
          'css-loader',
          'sass-loader'
        ])
      }
    ]
  },

  plugins: [
    extractCSS
  ]
}
