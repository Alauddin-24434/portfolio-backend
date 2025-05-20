import { NextFunction, Request, Response } from "express";
import { AppError } from "../Error/AppError";
import { envVariable } from "../config";

export const globalError = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";

  const stack = envVariable.NODE_ENV === "development" ? err.stack : undefined;

  res.status(statusCode).json({
    sucess: false,
    statusCode,
    message,
    ...(stack && { stack }), 
  });
};
