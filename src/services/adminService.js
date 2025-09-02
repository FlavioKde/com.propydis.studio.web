
import api from "../api/axios";

export async function getAllContacts() {
  const response = await axios.get("/api/contact/getAll");
  return response.data;
}

export async function getAllProjects() {
  const res = await api.get("/admin/project/getAll");
  return res.data;
}

export async function getAllProperties() {
  const res = await api.get("/admin/property/getAll");
  return res.data;
}