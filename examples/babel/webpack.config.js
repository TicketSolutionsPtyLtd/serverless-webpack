module.exports = {
  entry: './handler.js',
  target: 'node',
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  }
};
