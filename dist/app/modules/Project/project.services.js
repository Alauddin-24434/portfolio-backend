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
exports.deleteProjectById = exports.updateProjectById = exports.getProjectById = exports.getAllProjects = exports.createProject = void 0;
const project_model_1 = require("./project.model");
const createProject = (projectInput) => __awaiter(void 0, void 0, void 0, function* () {
    const existing = yield project_model_1.ProjectModel.findOne({ id: projectInput._id });
    if (existing) {
        throw new Error("Project with this ID already exists");
    }
    const project = yield project_model_1.ProjectModel.create(projectInput);
    return project;
});
exports.createProject = createProject;
const getAllProjects = () => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield project_model_1.ProjectModel.find({});
    return projects;
});
exports.getAllProjects = getAllProjects;
const getProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield project_model_1.ProjectModel.findOne({ id });
    if (!project) {
        throw new Error("Project not found");
    }
    return project;
});
exports.getProjectById = getProjectById;
const updateProjectById = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield project_model_1.ProjectModel.findByIdAndUpdate(id, updateData, { new: true });
    return updated;
});
exports.updateProjectById = updateProjectById;
const deleteProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield project_model_1.ProjectModel.findByIdAndDelete(id);
});
exports.deleteProjectById = deleteProjectById;
