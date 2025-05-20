"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
const config_1 = require("../config");
const globalError = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong!";
    const stack = config_1.envVariable.NODE_ENV === "development" ? err.stack : undefined;
    res.status(statusCode).json(Object.assign({ sucess: false, statusCode,
        message }, (stack && { stack })));
};
exports.globalError = globalError;
