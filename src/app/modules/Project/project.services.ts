import { PortfolioProject } from "./project.interface";
import { ProjectModel } from "./project.model";

export const createProject = async (projectInput: PortfolioProject) => {

  const existing = await ProjectModel.findOne({ id: projectInput._id });
  if (existing) {
    throw new Error("Project with this ID already exists");
  }
  const project = await ProjectModel.create(projectInput);
  return project;
};

export const getAllProjects = async () => {
  const projects = await ProjectModel.find({});
  return projects;
};

export const getProjectById = async (id: string) => {
  const project = await ProjectModel.findOne({ id });
  if (!project) {
    throw new Error("Project not found");
  }
  return project;
};


export const updateProjectById = async (id: string, updateData: Partial<PortfolioProject>) => {
  const updated = await ProjectModel.findByIdAndUpdate(id, updateData, { new: true });
  return updated;
};

export const deleteProjectById = async (id: string) => {
  await ProjectModel.findByIdAndDelete(id);
};

