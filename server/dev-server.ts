import { Express } from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";

export const createDevServer = async (app: Express) => {
  // @ts-ignore
  const { default: config } = await import("./../client/webpack.config");
  const compiler = webpack(config);

  webpackDevMiddleware(compiler, {
    writeToDisk: (filePath) =>
      [".html"].some((path) => filePath.includes(path)),
  });
};
