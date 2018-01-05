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
    },

    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
      "react": "React",
      "react-dom": "ReactDOM"
    }
  },
  WebpackConfigHelper.transformJavaScript({ include: Paths.src })
]);

module.exports = {
  Settings,
  Paths
};
