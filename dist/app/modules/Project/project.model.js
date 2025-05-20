"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = require("mongoose");
const PortfolioProjectSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    liveLink: { type: String },
    githubFrontend: { type: String },
    githubBackend: { type: String },
    technologies: { type: [String], required: true },
    features: { type: [String], default: [] },
    challenges: { type: [String], default: [] },
}, {
    timestamps: true,
});
exports.ProjectModel = (0, mongoose_1.model)("Project", PortfolioProjectSchema);
