import Webpack from 'webpack';
import Path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    Path.resolve(__dirname, 'src/index'),
  ],
  target: 'web',
  output: {
    path: Path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    })
  ],
  module: {
    loaders: [
      { test: /\.js/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
}
