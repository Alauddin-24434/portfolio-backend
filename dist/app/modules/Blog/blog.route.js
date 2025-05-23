"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = __importDefault(require("../../middleware/upload"));
const blog_controller_1 = require("./blog.controller");
const router = express_1.default.Router();
router.post("/", upload_1.default.single("image"), blog_controller_1.createBlogPostController);
router.get("/", blog_controller_1.getAllBlogPostsController);
router.get("/:id", blog_controller_1.getBlogPostByIdController);
router.put("/:id", upload_1.default.single("image"), blog_controller_1.updateBlogPostController);
router.delete("/:id", blog_controller_1.deleteBlogPostController);
exports.default = router;
