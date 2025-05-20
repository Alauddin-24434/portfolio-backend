"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
exports.userValidation = {
    loginUser: zod_1.z.object({
        body: zod_1.z.object({
            email: zod_1.z.string().email(),
            password: zod_1.z.string().min(6),
        }),
    }),
    getUser: zod_1.z.object({
        params: zod_1.z.object({
            id: zod_1.z.string().uuid(),
        }),
    }),
};
