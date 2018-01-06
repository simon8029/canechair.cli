const path = require("path");
const Webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackConfigHelper = require('./helper');
const WebpackMerge = require('webpack-merge');

const Paths = {
  src: path.join(process.cwd(), "src"),
  dist: path.join(process.cwd(), "dist"),
};

const Settings = WebpackMerge([
  {
    entry: {
      app: Paths.src,
    },
    output: {
      path: Paths.dist,
      filename: "[name].js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.template.ejs',
        inject: 'body',
      }),
      new Webpack.NamedModulesPlugin()
    ],
    node: {
      fs: "empty"
    }
  },
  WebpackConfigHelper.transformJavaScript({ include: Paths.src })
]);

module.exports = {
  Settings,
  Paths
};
