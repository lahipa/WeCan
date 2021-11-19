const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = (env) => {
  return {
    context: __dirname,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
    },
    resolve: {
      extensions: ["", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_module/,
          use: "babel-loader",
        },
        {
          test: /\.css?$/,
          use: [
            MiniCssExtractPlugin.loader,
            // "style-loader",
            "css-loader",
            "postcss-loader"
          ],
        },
        {
          test: /\.(png|j?g|svg|gif)?$/,
          use: "file-loader",
        },
      ],
    },
    // plugins: [
    //   new HtmlWebPackPlugin({
    //     template: path.resolve(__dirname, "public/index.html"),
    //     filename: "index.html",
    //   }),
    // ],
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        favicon: path.resolve(__dirname, "public/favicon.ico"),
        filename: "index.html",
        minify: {
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new MiniCssExtractPlugin(),
    ],
  };
};
