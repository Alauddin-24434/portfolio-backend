"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
class AppError extends Error {
    constructor(message, statusCode, errorSources) {
        super(message);
        this.statusCode = statusCode;
        this.errorSources = errorSources;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.AppError = AppError;
