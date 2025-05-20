"use strict";
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
exports.deleteBlogPost = exports.updateBlogPost = exports.getBlogPostById = exports.getAllBlogPosts = exports.createBlogPost = void 0;
const blog_model_1 = require("./blog.model");
const createBlogPost = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield blog_model_1.BlogPostModel.findOne({ id: input._id });
    if (existing)
        throw new Error("Blog post with this ID already exists");
    const blog = yield blog_model_1.BlogPostModel.create(input);
    return blog;
});
exports.createBlogPost = createBlogPost;
const getAllBlogPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield blog_model_1.BlogPostModel.find({});
});
exports.getAllBlogPosts = getAllBlogPosts;
const getBlogPostById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.BlogPostModel.findOne({ id });
    if (!blog)
        throw new Error("Blog post not found");
    return blog;
});
exports.getBlogPostById = getBlogPostById;
const updateBlogPost = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blog_model_1.BlogPostModel.findOneAndUpdate({ id }, updateData, { new: true });
    if (!blog)
        throw new Error("Blog post not found");
    return blog;
});
exports.updateBlogPost = updateBlogPost;
const deleteBlogPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.BlogPostModel.findOneAndDelete({ id });
    if (!result)
        throw new Error("Blog post not found");
    return result;
});
exports.deleteBlogPost = deleteBlogPost;
