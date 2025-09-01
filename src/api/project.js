
import api from "./axios";

export const getProjects = (params) => api.get("/project", { params });
export const getProjectById = (id) => api.get(`/project/${id}`);