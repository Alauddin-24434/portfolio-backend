import { Request, Response, NextFunction, RequestHandler } from "express";

export const catchAsyncHandler = (
  asyncFunction: RequestHandler
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(asyncFunction(req, res, next)).catch(next);
  };
};
