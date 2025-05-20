import express from "express";
import upload from "../../middleware/upload";
import {
  createProjectController,
  getAllProjectsController,
  getProjectByIdController,
  updateProjectController,
  deleteProjectController,
} from "./project.controller";

const router = express.Router();

// Create project (with image upload)
router.post("/create", upload.single("image"), createProjectController);

// Get all projects
router.get("/", getAllProjectsController);

// Get single project by ID
router.get("/:id", getProjectByIdController);

// Update project by ID (image optional)
router.put("/:id", upload.single("image"), updateProjectController);

// Delete project by ID
router.delete("/:id", deleteProjectController);

export default router;
