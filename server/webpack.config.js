require("dotenv").config();
const path = require("path");
const nodeExternals = require("webpack-node-externals");

const { NODE_ENV } = process.env;

module.exports = {
  entry: "./server/index.ts",
  mode: NODE_ENV === "development" ? "development" : "production",
  target: "node",
  output: {
    path: path.resolve(__dirname, "../build/server"),
    filename: "index.js",
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
};
