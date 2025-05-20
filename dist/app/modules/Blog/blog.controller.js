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
exports.deleteBlogPostController = exports.updateBlogPostController = exports.getBlogPostByIdController = exports.getAllBlogPostsController = exports.createBlogPostController = void 0;
const catchAsyncHandeller_1 = require("../../middleware/catchAsyncHandeller");
const blog_services_1 = require("./blog.services");
exports.createBlogPostController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield (0, blog_services_1.createBlogPost)(req.body);
    res.status(201).json({ success: true, data: blog, message: "Blog post created" });
}));
exports.getAllBlogPostsController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield (0, blog_services_1.getAllBlogPosts)();
    res.status(200).json({ success: true, data: blogs });
}));
exports.getBlogPostByIdController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield (0, blog_services_1.getBlogPostById)(req.params.id);
    res.status(200).json({ success: true, data: blog });
}));
exports.updateBlogPostController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const imageUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
    const updatedData = Object.assign(Object.assign({}, req.body), (imageUrl && { imageUrl }));
    const blog = yield (0, blog_services_1.updateBlogPost)(req.params.id, updatedData);
    res.status(200).json({
        success: true,
        data: blog,
        message: "Blog post updated"
    });
}));
exports.deleteBlogPostController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, blog_services_1.deleteBlogPost)(req.params.id);
    res.status(200).json({ success: true, message: "Blog post deleted" });
}));
