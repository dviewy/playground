require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: ["./client/index.tsx"],
  output: {
    path: path.resolve("build", "client"),
    filename: "bundle/main.js",
    publicPath: "/",
  },
  devtool: "eval-source-map",
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            // prettier-ignore
            plugins: [isDev && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      app: path.resolve("client", "app"),
      entities: path.resolve("client", "entities"),
      features: path.resolve("client", "features"),
      pages: path.resolve("client", "pages"),
      processes: path.resolve("client", "processes"),
      shared: path.resolve("client", "shared"),
      widgets: path.resolve("client", "widgets"),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./client/index.html",
      inject: "body",
    }),
    new webpack.HotModuleReplacementPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
