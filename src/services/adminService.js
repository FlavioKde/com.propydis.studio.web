
import api from "../api/axios";

//contacts

export async function getAllContacts() {
  const response = await api.get("/admin/contact/getAll");
  return response.data;
}

export async function replyToContact(id, message) {
  const response = await api.put(`/admin/contact/reply/${id}`, { message });
  return response.data;
}

export async function markContactAsRead(id) {
  const res = await api.put(`/admin/contact/mark-as-read/${id}`);
  return res.data;
}

export async function deleteContact(id) {
  const res = await api.delete(`/admin/contact/delete/${id}`);
  return res.data;
}

//projects

export async function getAllProjects() {
  const res = await api.get("/admin/project/getAll");
  return res.data;
}

export async function saveProject(project) {
  const res = await api.post("/admin/project/save", project);
  return res.data;
}

export async function getProjectById(id) {
  const res = await api.get(`/admin/project/get/${id}`);
  return res.data;
} 

export async function deleteProject(id) {
  const res = await api.delete(`/admin/project/delete/${id}`);
  return res.data;
} 

export async function updateProject(id, project) {
  const res = await api.put(`/admin/project/${id}`, project);
  return res.data;
}

export async function updateProjectForm(formData) {
  const res = await api.put("/admin/project/update", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
}

//properties

export async function getAllProperties() {
  const res = await api.get("/admin/property/getAll");
  return res.data;
}

export async function saveProperty(property) {
  const res = await api.post("/admin/property/save", property);
  return res.data;
} 

export async function getPropertyById(id) {
  const res = await api.get(`/admin/property/${id}`);
  return res.data;
} 

export async function deleteProperty(id) {
  const res = await api.delete(`/admin/property/delete/${id}`);
  return res.data;
} 

export async function updateProperty(id, property) {
  const res = await api.put(`/admin/property/${id}`, property);
  return res.data;
}

