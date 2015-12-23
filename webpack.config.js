var path    = require('path');
// var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main'
  ],
  output: {
      publicPath: '/dist',
      filename: 'dist/main.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      loader: "babel-loader",

      // Skip any files outside of your project's `src` directory
      include: [
        path.resolve(__dirname, "src"),
      ],

      // Only run `.js` files through Babel
      test: /\.js?$/,

      // Options to configure babel with
      query: {
        plugins: ['transform-runtime'],
        presets: ['es2015'],
      }
    }]
  },
  debug: true
};