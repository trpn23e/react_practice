const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const mode = process.env.NODE_ENV || 'development';

const devConfiguration = {
  mode: 'development',
  devtool: (mode === 'development') ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      { 
        test: /\.html$/,
        loader: "html-loader",
        options: { minimize: false }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(mode) })
  ],
  devServer: {
    host : '127.0.0.1',
    compress: false,
    hot : true,
    inline: true,
    historyApiFallback: true,
    port: 3000,
    open : true,
    // 기본은 3000 포트로 요청이 들어오지만 proxy를 통해 5000 포트로 요청을 전달한다
    proxy: {
      '**': {
        target: 'http://localhost:5000',
        secure: false
      }
    }
  }
}

module.exports = merge.smart(baseConfig, devConfiguration)