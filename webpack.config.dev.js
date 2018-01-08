const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname);
const distFolder = path.join(rootPath, 'dist');
const sourceFolder = path.join(rootPath, 'src');

let config = {
  devtool: 'inline-source-map',
  entry: [ path.join(rootPath, 'src/index.ts') ],
  output: {
    path: distFolder,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: [ 'style-loader' , 'css-loader', 'sass-loader']},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      inject: true
    })
  ],
  devServer: {
    contentBase: distFolder,
    compress: true,
    port: 9000
  }
};

module.exports = config;
