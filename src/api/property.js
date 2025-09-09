
import api from "./axios";


const mapProperty = (p) => ({
  id: p.id,
  title: p.name,
  description: p.description,
  images: p.photos?.map(photo => photo.url) || []
});

// Listado
export const getProperties = (params) =>
  api.get("/property/getAll", { params })
    .then(res => {
      if (!Array.isArray(res.data)) return [];
      return res.data.map(mapProperty);
    });

// Detalle
export const getPropertyById = (id) =>
  api.get(`/property/get/${id}`)
    .then(res => mapProperty(res.data));