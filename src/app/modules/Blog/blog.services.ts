import { IBlogPost } from "./blog.interface";
import { BlogPostModel } from "./blog.model";


export const createBlogPost = async (input: IBlogPost) => {
  const existing = await BlogPostModel.findOne({ id: input._id });
  if (existing) throw new Error("Blog post with this ID already exists");

  const blog = await BlogPostModel.create(input);
  return blog;
};

export const getAllBlogPosts = async () => {
  return await BlogPostModel.find({});
};

export const getBlogPostById = async (id: string) => {
  const blog = await BlogPostModel.findOne({ id });
  if (!blog) throw new Error("Blog post not found");
  return blog;
};

export const updateBlogPost = async (id: string, updateData: Partial<IBlogPost>) => {
  const blog = await BlogPostModel.findOneAndUpdate({ id }, updateData, { new: true });
  if (!blog) throw new Error("Blog post not found");
  return blog;
};

export const deleteBlogPost = async (id: string) => {
  const result = await BlogPostModel.findOneAndDelete({ id });
  if (!result) throw new Error("Blog post not found");
  return result;
};
