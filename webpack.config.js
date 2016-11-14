/**
 * Webpack base config file
 */
module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ }
    ]
  },

  plugins: []
}
