const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devtool: false,
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:8080/'  //公开访问目录
  },
  devServer: {
    port: 8080
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
      name: 'remoteVar',  // 向外暴露的全局变量名
      filename: 'remoteEntry.js', //构建出的文件名
      exposes: {  // 暴露出给外部使用的组件
        './NewsList': './src/NewsListdevelop'
      },
      shared: ['react', 'react-dom']
    })
  ]
}
