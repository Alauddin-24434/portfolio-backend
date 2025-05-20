import { model, Schema } from "mongoose";
import { PortfolioProject } from "./project.interface";

const PortfolioProjectSchema = new Schema<PortfolioProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    liveLink: { type: String },
    githubFrontend: { type: String },
    githubBackend: { type: String },
    technologies: { type: [String], required: true },
    features: { type: [String], default: [] },
    challenges: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

export const ProjectModel = model<PortfolioProject>(
  "Project",
  PortfolioProjectSchema
);
