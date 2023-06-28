import webpack from "webpack";

require("dotenv").config();
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: ["./client/index.tsx"],
  output: {
    path: path.resolve("build", "client"),
    filename: "main.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "esbuild-loader",
        options: { target: "es2015" },
      },
    ],
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      ["~app"]: path.resolve("client", "app"),
      ["~entities"]: path.resolve("client", "entities"),
      ["~features"]: path.resolve("client", "features"),
      ["~pages"]: path.resolve("client", "pages"),
      ["~processes"]: path.resolve("client", "processes"),
      ["~shared"]: path.resolve("client", "shared"),
      ["~widgets"]: path.resolve("client", "widgets"),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/index.html",
      inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
} as webpack.Configuration;
