"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const upload_1 = __importDefault(require("../../middleware/upload"));
const project_controller_1 = require("./project.controller");
const router = express_1.default.Router();
// Create project (with image upload)
router.post("/create", upload_1.default.single("image"), project_controller_1.createProjectController);
// Get all projects
router.get("/", project_controller_1.getAllProjectsController);
// Get single project by ID
router.get("/:id", project_controller_1.getProjectByIdController);
// Update project by ID (image optional)
router.put("/:id", upload_1.default.single("image"), project_controller_1.updateProjectController);
// Delete project by ID
router.delete("/:id", project_controller_1.deleteProjectController);
exports.default = router;
