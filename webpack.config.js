const path = require('path');

module.exports = {
  mode: 'development', 
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [
        {
          loader: path.resolve(__dirname, './loader/replaceLoader.js'),
        },
        {
          loader: path.resolve(__dirname, './loader/replaceLoaderAsync.js'),
          options: {
            name: 'kksk'
          }
        }
      ]
    }]
  }
}