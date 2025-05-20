"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAsyncHandler = void 0;
const catchAsyncHandler = (asyncFunction) => {
    return (req, res, next) => {
        Promise.resolve(asyncFunction(req, res, next)).catch(next);
    };
};
exports.catchAsyncHandler = catchAsyncHandler;
