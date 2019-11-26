const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
})