const CommonConfig = require('./common');
const WebpackConfigHelper = require('./helper');
const WebpackMerge = require('webpack-merge');

const DevelopmentConfig = WebpackMerge([
  {
    devServer: {
      stats: "errors-only",
      host: process.env.HOST,
      port: 8029,
      overlay: {
        errors: true,
        warnings: true
      }
    }
  },
  WebpackConfigHelper.setFreeVariable("process.env.NODE_ENV", "development"),
  WebpackConfigHelper.loadCSS(),
  WebpackConfigHelper.loadImages(),
  WebpackConfigHelper.generateSourceMaps({ type: "cheap-module-eval-source-map" }),
  { output: { devtoolModuleFilenameTemplate: "webpack:///[absolute-resource-path]" } }

]);

module.exports = WebpackMerge(CommonConfig.Settings, DevelopmentConfig);
