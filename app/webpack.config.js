const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", {
          loader: "sass-loader",
          options: {
            sassOptions: {
              quietDeps: true, // Suppress Sass warnings
            }
          }
        }],

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  ignoreWarnings: [/sass-loader/, /Deprecation Warning/], // Suppress Sass warnings globally
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./list.html",
      filename: "list.html",
      chunks: ["index"],
    }),
  ],
  devServer: {
    static: "./dist",
    port: 9000,
  },
};
