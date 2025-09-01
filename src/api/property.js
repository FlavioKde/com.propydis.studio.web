
import api from "./axios";

export const getProperties = (params) => api.get("/property", { params });
export const getPropertyById = (id) => api.get(`/property/${id}`);