import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const publicEndpoints = [
  '/auth/login',
  '/auth/register',
  '/contact/save',
  '/project/getAll',
  '/project/get/',
  '/property/getAll',
  '/property/get/',
];

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  
  const urlPath = new URL(config.url, config.baseURL).pathname;

  const isPublic = publicEndpoints.some((path) => urlPath.startsWith(path));

  if (token && !isPublic) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;