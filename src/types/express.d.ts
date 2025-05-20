import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      file?: {
        path?: string;
        [key: string]: any;
      };
    }
  }
}
