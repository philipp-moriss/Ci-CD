import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { sum } from "./sum/sum";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 10000;

app.get("/", (req: Request, res: Response) => {
  const sumResult = sum(10, 10);
  res.send(`Hello World + ${sumResult}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
