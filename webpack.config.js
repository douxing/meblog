const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    filename: 'bundle.js'
    // diff point compared to production
    // useless 'cause it is rendered in memory
    // path: path.resolve(__dirname, 'dist'),
    // publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Me Blog Dev',
      template: './src/index.ejs'
      // default value
      // filename: 'index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx?$/,
      use: [
        'babel-loader',
      ],
      exclude: /node_modules/
    }]
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: './dist',
    historyApiFallback: true,
    hot: true
  }
};
