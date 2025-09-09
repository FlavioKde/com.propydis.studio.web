import api from "./axios";


const mapProject = (p) => ({
  id: p.id,
  title: p.name,
  description: p.description,
  images: p.photos?.map(photo => photo.url) || []
});

// Listado
export const getProjects = (params) =>
  api.get("/project/getAll", { params })
    .then(res => {
      if (!Array.isArray(res.data)) return [];
      return res.data.map(mapProject);
    });

// Detalle
export const getProjectById = (id) =>
  api.get(`/project/get/${id}`)
    .then(res => mapProject(res.data));