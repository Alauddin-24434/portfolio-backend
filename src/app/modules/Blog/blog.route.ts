import express from "express";
import upload from "../../middleware/upload";
import { createBlogPostController, deleteBlogPostController, getAllBlogPostsController, getBlogPostByIdController, updateBlogPostController } from "./blog.controller";

const router = express.Router();


router.post("/", upload.single("image"), createBlogPostController);


router.get("/", getAllBlogPostsController);


router.get("/:id", getBlogPostByIdController);


router.put("/:id", upload.single("image"), updateBlogPostController);


router.delete("/:id", deleteBlogPostController);

export default router;
