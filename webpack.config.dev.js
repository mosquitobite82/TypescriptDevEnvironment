const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dartSass = require('sass');

const rootPath = path.resolve(__dirname);
const distFolder = path.join(rootPath, 'dist');
const sourceFolder = path.join(rootPath, 'src');

let config = {
  mode: 'development',
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
      { test: /\.scss$/, 
        use: [
          'style-loader', 
          'css-loader', 
          { 
            loader: 'sass-loader',
            options: {
              implementation: dartSass
            } 
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    static: {
      directory: distFolder,
      serveIndex: true,
      watch: true,
    },
    compress: true,
    port: 9000,
    hot: true
  }
};

module.exports = config;
