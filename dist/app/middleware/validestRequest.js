"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validestRequest = void 0;
const validestRequest = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.validestRequest = validestRequest;
