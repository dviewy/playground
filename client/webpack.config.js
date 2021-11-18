require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const { NODE_ENV } = process.env;

module.exports = {
  mode: NODE_ENV === "development" ? "development" : "production",
  entry: ["react-hot-loader/patch", "./client/index.tsx"],
  output: {
    path: path.resolve(__dirname, "../client"),
    filename: "main.js",
    publicPath: "/",
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/index.html",
      inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
