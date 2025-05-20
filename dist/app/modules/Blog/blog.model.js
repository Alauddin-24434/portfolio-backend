"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostModel = void 0;
const mongoose_1 = require("mongoose");
const BlogPostSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tags: { type: [String], default: [] },
    imageUrl: { type: String },
}, { timestamps: true });
exports.BlogPostModel = (0, mongoose_1.model)("BlogPost", BlogPostSchema);
