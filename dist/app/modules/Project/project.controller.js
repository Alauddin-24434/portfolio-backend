"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProjectController = exports.updateProjectController = exports.getProjectByIdController = exports.getAllProjectsController = exports.createProjectController = void 0;
const project_services_1 = require("./project.services");
const catchAsyncHandeller_1 = require("../../middleware/catchAsyncHandeller");
// Create Project
exports.createProjectController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const imageUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
    const projectData = Object.assign(Object.assign({}, req.body), { imageUrl });
    const project = yield (0, project_services_1.createProject)(projectData);
    res.status(201).json({
        success: true,
        message: "Project created successfully",
        data: project,
    });
}));
// Get All Projects
exports.getAllProjectsController = (0, catchAsyncHandeller_1.catchAsyncHandler)((_req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield (0, project_services_1.getAllProjects)();
    res.status(200).json({
        success: true,
        data: projects,
    });
}));
// Get Project by ID
exports.getProjectByIdController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield (0, project_services_1.getProjectById)(req.params.id);
    res.status(200).json({
        success: true,
        data: project,
    });
}));
// Update Project by ID
exports.updateProjectController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const imageUrl = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
    const updateData = Object.assign(Object.assign({}, req.body), (imageUrl && { imageUrl }));
    const updatedProject = yield (0, project_services_1.updateProjectById)(req.params.id, updateData);
    res.status(200).json({
        success: true,
        message: "Project updated successfully",
        data: updatedProject,
    });
}));
// Delete Project by ID
exports.deleteProjectController = (0, catchAsyncHandeller_1.catchAsyncHandler)((req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, project_services_1.deleteProjectById)(req.params.id);
    res.status(200).json({
        success: true,
        message: "Project deleted successfully",
    });
}));
