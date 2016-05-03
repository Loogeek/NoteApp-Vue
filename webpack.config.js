module.exports = {
  devtool: '#cheap-module-source-map',
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  module: {
    preLoaders: [
      {
        test: /.vue$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
      {
        test: /.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  }
}
