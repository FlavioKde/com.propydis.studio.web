import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers : {"Content-Type": "application/json"},

});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const isAuthEndpoint =
    config.url.includes('/auth/login') ||
    config.url.includes('/auth/register');
  if (token && !isAuthEndpoint) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;   