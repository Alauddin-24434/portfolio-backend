import { Request, Response, NextFunction } from "express";
import { catchAsyncHandler } from "../../middleware/catchAsyncHandeller";
import { createBlogPost, deleteBlogPost, getAllBlogPosts, getBlogPostById, updateBlogPost } from "./blog.services";

export const createBlogPostController = catchAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await createBlogPost(req.body);
    res.status(201).json({ success: true, data: blog, message: "Blog post created" });
  }
);

export const getAllBlogPostsController = catchAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const blogs = await getAllBlogPosts();
    res.status(200).json({ success: true, data: blogs });
  }
);

export const getBlogPostByIdController = catchAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await getBlogPostById(req.params.id);
    res.status(200).json({ success: true, data: blog });
  }
);
export const updateBlogPostController = catchAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const imageUrl = req.file?.path;

    const updatedData = {
      ...req.body,
      ...(imageUrl && { imageUrl }), 
    };

    const blog = await updateBlogPost(req.params.id, updatedData);

    res.status(200).json({ 
      success: true, 
      data: blog, 
      message: "Blog post updated" 
    });
  }
);


export const deleteBlogPostController = catchAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    await deleteBlogPost(req.params.id);
    res.status(200).json({ success: true, message: "Blog post deleted" });
  }
);
