import { NextFunction, Request, Response } from "express";
import { AppError } from "../Error/AppError";
import { envVariable } from "../config";
import { logger } from "../utils/Logger";
import mongoose from "mongoose";
import { loggers } from "winston";

export const globalError = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
   let statusCode =err.statusCode || 500;
  let message = err.message || "Something went wrong!";
  let errorSources;
  

  // Handle Mongoose ValidationError
  if (err instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    errorSources = Object.values(err.errors).map((val: any) => ({
      field: val.path,
      message: val.message,
    }));
    message = "Validation failed";
  }

  const stack = envVariable.NODE_ENV === "development" ? err.stack : undefined;

  res.status(statusCode).json({
    sucess: false,
    statusCode,
    errorSources,
    message,
    ...(stack && { stack }), 
  });
};
