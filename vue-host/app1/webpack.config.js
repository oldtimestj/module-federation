const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const packagePath = path.join(path.resolve('./'), 'package.json')
const { dependencies } = require(packagePath)
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  devtool: false,
  entry: './src/main.js',
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
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
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    }),
    new ModuleFederationPlugin({
      // 提供给其他服务加载的文件
      filename: "remoteEntry.js",
      // 唯一ID，用于标记当前服务
      name: "app1",
      library: { type: "var", name: "app1" },
      remotes: {
        // remoteVar 全局变量名
        remote: 'remoteVar@http://localhost:8080/remoteEntry.js',
        host: 'hostVar@http://localhost:5000/remoteEntry.js',
      },
      // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
      exposes: {
        './Header': "./src/components/Header.vue",
      },
    })
  ]
}