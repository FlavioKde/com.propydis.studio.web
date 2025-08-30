import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers : {"Content-Type": "application/json"},

});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token && config.url !== '/auth/login' && config.url !== '/auth/register') {
    config.headers.Authorization = `Bearer ${token}`;

  }
  return config;
});

export default api;   