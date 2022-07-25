const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Create 'style' nodes from JS strings
          'Style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to css
          'sass-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: 9000,
  },
};
