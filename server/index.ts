import path from "path";
import express from "express";
import { createDevServer } from "./dev-server";

const { HOST, PORT, NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

const bootstrap = async () => {
  const app = express();

  if (isDev) {
    await createDevServer(app);
  }

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });
};

bootstrap();
