const path = require('path');
let webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:5000/'  //公开访问目录
  },
  devServer: {
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'hostVar',
      filename: 'remoteEntry.js', //构建出的文件名
      remotes: {
        // remoteVar 全局变量名
        remote: 'remoteVar@http://localhost:8080/remoteEntry.js'
      },
      exposes: {
        './Sliders': './src/Sliders'
      },
      shared: ['react', 'react-dom']
    })
  ]
}