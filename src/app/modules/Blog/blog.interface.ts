export interface IBlogPost extends Document {
  _id: string;
  title: string;
  content: string;      
  author: string;
  tags?: string[];
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}