import { model, Schema } from "mongoose";
import { IBlogPost } from "./blog.interface";

const BlogPostSchema = new Schema(
  {
   
    title: { type: String, required: true },
    content: { type: String, required: true },  
    author: { type: String, required: true },
    tags: { type: [String], default: [] },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const BlogPostModel = model<IBlogPost>("BlogPost", BlogPostSchema);