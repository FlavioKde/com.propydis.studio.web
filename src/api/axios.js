import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers : {"Content-Type": "application/json"},

});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const isAuthEndpoint =
    config.url.includes('/auth/login') ||
    config.url.includes('/auth/register') ||
    config.url.includes('/project/getAll') ||
    config.url.includes('/project/get/') ||   // 👈 detalle de proyecto
    config.url.includes('/property/getAll') ||
    config.url.includes('/property/get/'); 

  if (token && !isAuthEndpoint) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;   