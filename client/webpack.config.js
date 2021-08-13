require("dotenv").config();
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const { NODE_ENV } = process.env;

module.exports = {
  mode: NODE_ENV === "development" ? "development" : "production",
  entry: "./client/index.js",
  output: {
    path: path.resolve("build", "client"),
    filename: "static/js/index.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/index.html",
      inject: "body",
    }),
  ],
};
