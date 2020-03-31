/**
 * 1.关于node以及各种工具自带的服务器还不太理解
 * 2.CleanWebpackPlugin、ExtractTextPlugin的作用不太明白
 * 3.还有babel的使用不懂 .babelrc到底要怎么配置？
 * 4.对于npm以及node的理解深度不够
 * 5.对与各种工具的开发环境和生产环境的配置不太理解
 * 6.webpack的工作流程是怎样的？
 */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: "development",
  devtool: "inline-source-map",
  entry: ["./src/index.js"],
  output: { path: path.resolve(__dirname, "dist"),
            filename: "bundle.js",
            publicPath: "/"
          },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader", normally used to embed the styles inline in the html document.
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ],
      },             
       {test: /\.js$/, 
        exclude: /(node_modules|bower_components)/, 
        use: ["babel-loader"]},        
       {test: /\.json$/,
        exclude: /(node_modules|bower_components)/,
        use: ["raw-loader", "json-loader"]},
       {test: /\.(png|jpg|gif|svg|ico|jpeg)$/,
        exclude: /node_modules/,
        use: [{loader: "url-loader", options: {limit: 8192, outputPath: "images/", name: "[hash:8][name].[ext]"}}]},
        {test: /\.(otf|ttf|eot|woff|woff2)$/,
         loader: "file-loader",
         options: {name: "[path]/[name].[ext]"}}
    ]
          },
  plugins: [new HtmlWebpackPlugin({filename: "index.html", template: "./public/index.html"}),
            new CleanWebpackPlugin(),
            new UglifyJsPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin("style.css"),
          ],
  devServer: {host: "127.0.0.1",
              port: "9002",
              contentBase: "./dist",
              hot: true,
              open: true}
};

module.exports = config;