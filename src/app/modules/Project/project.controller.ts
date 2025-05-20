import { Request, Response, NextFunction } from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
} from "./project.services";
import { catchAsyncHandler } from "../../middleware/catchAsyncHandeller";

// Create Project
export const createProjectController = catchAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const imageUrl = req.file?.path;

    const projectData = {
      ...req.body,
      imageUrl,
    };

    const project = await createProject(projectData);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  }
);

// Get All Projects
export const getAllProjectsController = catchAsyncHandler(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const projects = await getAllProjects();
    res.status(200).json({
      success: true,
      data: projects,
    });
  }
);

// Get Project by ID
export const getProjectByIdController = catchAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const project = await getProjectById(req.params.id);
    res.status(200).json({
      success: true,
      data: project,
    });
  }
);

// Update Project by ID
export const updateProjectController = catchAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const imageUrl = req.file?.path;

    const updateData = {
      ...req.body,
      ...(imageUrl && { imageUrl }), // only set if image uploaded
    };

    const updatedProject = await updateProjectById(req.params.id, updateData);

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  }
);

// Delete Project by ID
export const deleteProjectController = catchAsyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    await deleteProjectById(req.params.id);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  }
);
