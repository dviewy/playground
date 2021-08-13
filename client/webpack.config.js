require("dotenv").config();
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const { NODE_ENV } = process.env;

module.exports = {
  mode: NODE_ENV === "development" ? "development" : "production",
  entry: "./client/index.ts",
  output: {
    path: path.resolve("build", "client"),
    filename: "static/js/index.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/index.html",
      inject: "body",
    }),
  ],
};
