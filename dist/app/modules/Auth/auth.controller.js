"use strict";
// controllers/auth/auth.controller.ts
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
exports.loginUserController = exports.createUserController = void 0;
const catchAsyncHandeller_1 = require("../../middleware/catchAsyncHandeller");
const setTokensToCookie_1 = require("../../utils/setTokensToCookie");
const auth_services_1 = require("./auth.services");
exports.createUserController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, accessToken, refreshToken } = yield (0, auth_services_1.createUser)(req.body);
    (0, setTokensToCookie_1.setTokensToCookie)(res, accessToken, refreshToken);
    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
    });
}));
exports.loginUserController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const { user, accessToken, refreshToken } = yield (0, auth_services_1.loginUser)(email, password);
    (0, setTokensToCookie_1.setTokensToCookie)(res, accessToken, refreshToken);
    res.status(200).json({
        success: true,
        message: "Login successful",
        data: user,
    });
}));
