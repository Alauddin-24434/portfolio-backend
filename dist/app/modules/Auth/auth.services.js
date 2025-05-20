"use strict";
// services/auth/auth.services.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const AppError_1 = require("../../Error/AppError");
const generateTokens_1 = require("../../utils/generateTokens");
const auth_model_1 = require("./auth.model");
const createUser = (userInput) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield auth_model_1.UserModel.findOne({ email: userInput.email });
    if (existingUser) {
        throw new AppError_1.AppError("User already exists with this email", 400);
    }
    const newUser = yield auth_model_1.UserModel.create(userInput);
    const { accessToken, refreshToken } = (0, generateTokens_1.generateTokens)(newUser._id);
    return {
        user: newUser,
        accessToken,
        refreshToken,
    };
});
exports.createUser = createUser;
const loginUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield auth_model_1.UserModel.findOne({ email });
    if (!user) {
        throw new AppError_1.AppError("Invalid email or password", 401);
    }
    const isMatch = yield user.comparePassword(password);
    if (!isMatch) {
        throw new AppError_1.AppError("Invalid email or password", 401);
    }
    const { accessToken, refreshToken } = (0, generateTokens_1.generateTokens)(user._id);
    return {
        user,
        accessToken,
        refreshToken,
    };
});
exports.loginUser = loginUser;
