// services/auth/auth.services.ts

import { AppError } from "../../Error/AppError";
import { generateTokens } from "../../utils/generateTokens";
import { IUser } from "./auth.inteface";
import { UserModel } from "./auth.model";


export const createUser = async (userInput: IUser) => {
  const existingUser = await UserModel.findOne({ email: userInput.email });
  if (existingUser) {
    throw new AppError("User already exists with this email", 400);
  }

  const newUser = await UserModel.create(userInput);

  const { accessToken, refreshToken } = generateTokens(newUser._id as string);

  return {
    user: newUser,
    accessToken,
    refreshToken,
  };
};

export const loginUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  const { accessToken, refreshToken } = generateTokens(user._id as string);

  return {
    user,
    accessToken,
    refreshToken,
  };
};
