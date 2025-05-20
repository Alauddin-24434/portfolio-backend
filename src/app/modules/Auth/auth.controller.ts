import { request } from "express";

import { Request, Response, NextFunction } from "express";
import { catchAsyncHandler } from "../../middleware/catchAsyncHandeller";
import { createUser } from "./auth.services";

const craeteUserControlelller = catchAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await createUser(req.body);
    

  }
);
