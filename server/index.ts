require("dotenv").config();

import path from "path";
import express from "express";
import { createDevServer } from "./dev-server";

const { PORT, HOST, NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

const bootstrap = async () => {
  const app = express();

  app.use(express.static(path.resolve("build/client")));

  if (isDev) {
    await createDevServer(app);
  }

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("build", "client", "index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });
};

bootstrap();
