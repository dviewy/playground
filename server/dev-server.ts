import { Express } from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

export const createDevServer = async (app: Express) => {
  // @ts-ignore
  const { default: config } = await import("./../client/webpack.config");
  config.entry.unshift("webpack-hot-middleware/client");
  const compiler = webpack(config);
  const publicPath = config.output.publicPath;

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath,
      writeToDisk: (filePath) => filePath.includes(".html"),
    })
  );

  app.use(webpackHotMiddleware(compiler));
};
