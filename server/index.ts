import express, { Request, Response } from "express";
const app = express();

const { HOST, PORT } = process.env;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!!!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
