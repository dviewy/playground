import webpack from "webpack";

require("dotenv").config();
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const { NODE_ENV } = process.env;

module.exports = {
  mode: NODE_ENV === "development" ? "development" : "production",
  target: "node",
  entry: "./server/index.ts",
  output: {
    path: path.resolve("build", "server"),
    filename: "index.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
      },
    ],
  },
} as webpack.Configuration;
