const farkPlugin = require('./webpack/plugin/fark-plugin');
const path = require('path')

module.exports = {
  mode: "production",
  entry: [
    './webpack/index.js',
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'fark-loader',
        options: {
          text:'1'
        }
      },
    ]
  },
  stats: {
    assets: false,
    builtAt: false,
    modules: false,
    entrypoints: false
  },
  resolveLoader: {
    modules: ['./node_modules', './webpack/loader'] // 配置loader的查找目录
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  plugins: [
    new farkPlugin()
  ]
};
