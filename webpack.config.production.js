const resolve = require('path').resolve;
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractStyles = new ExtractTextPlugin('styles.css');

module.exports = {
  devtool: 'source-map',
  entry: {
    client: resolve(__dirname, './src/client')
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    extractStyles,
    new HtmlWebpackPlugin({
      title: 'Me Blog',
      template: './src/index.ejs',
      chunks: ['client'],
      filename: 'index.html'
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: extractStyles.extract({
        fallback: "style-loader",
        use: [{
          loader: "css-loader",
          options: {
            modules: true
          }          
        }, {
          loader: 'postcss-loader'
        }]
      })
    }, {
      test: /\.jsx?$/,
      use: [
        'babel-loader',
      ],
      exclude: /node_modules/
    }]
  }
};
