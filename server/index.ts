import path from "path";
import express, { Request, Response } from "express";
import { createDevServer } from "./dev-server";

const { HOST, PORT, NODE_ENV } = process.env;
const isDev = NODE_ENV === "development";

const bootstrap = async () => {
  const app = express();
  app.use(express.static(path.resolve(__dirname, "..", "client")));

  if (isDev) {
    await createDevServer(app);
  }

  app.get("*", (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });
};

bootstrap();
