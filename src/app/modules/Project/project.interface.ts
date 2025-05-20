export interface PortfolioProject {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveLink?: string;
  githubFrontend?: string;
  githubBackend?: string;
  
  technologies: string[];
  features?: string[];
  challenges?: string[];
  
  createdAt?: Date;
  updatedAt?: Date;
}
