// controllers/auth/auth.controller.ts

import { Request, Response, NextFunction } from "express";
import { catchAsyncHandler } from "../../middleware/catchAsyncHandeller";

import { setTokensToCookie } from "../../utils/setTokensToCookie";
import { createUser, loginUser } from "./auth.services";

export const createUserController = catchAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user, accessToken, refreshToken } = await createUser(req.body);

    setTokensToCookie(res, accessToken, refreshToken);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  }
);

export const loginUserController = catchAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const { user, accessToken, refreshToken } = await loginUser(email, password);

    setTokensToCookie(res, accessToken, refreshToken);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user,
    });
  }
);
