"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res, next) => {
    const message = "🎉 Portfolio DB connected successfully!";
    const statusCode = 200;
    res.status(statusCode).json({
        success: true,
        statusCode,
        message,
    });
});
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Sorry, can't find that!",
    });
});
exports.default = app;
