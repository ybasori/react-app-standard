/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    port: 5000,
    open: true,
    hot: true,
    static: "./public",
    client: {
      overlay: false,
    },
  },
  output: {
    clean: true,
    publicPath: "/js",
  },
  plugins: [new BundleAnalyzerPlugin()],
});
