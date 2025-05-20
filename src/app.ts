import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { logger } from "./app/utils/Logger";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const message = "🎉 Portfolio DB connected successfully!";
  const statusCode = 200;

  res.status(statusCode).json({
    success: true,
    statusCode,
    message,
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Sorry, can't find that!",
  });
});
export default app;
