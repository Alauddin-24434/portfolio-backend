"use strict";
// utils/setTokensToCookie.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTokensToCookie = void 0;
const setTokensToCookie = (res, accessToken, refreshToken) => {
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        maxAge: 15 * 60 * 1000, // 15 minutes
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
};
exports.setTokensToCookie = setTokensToCookie;
