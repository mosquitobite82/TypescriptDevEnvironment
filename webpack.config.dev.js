let path = require('path');
let webpack = require('webpack');

let rootPath = path.resolve(__dirname);

let config = {
  devtool: 'inline-source-map',
  entry: [ path.join(rootPath, 'src/index.ts') ],
  output: {
    path: path.join(rootPath, 'dist/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};

module.exports = config;
