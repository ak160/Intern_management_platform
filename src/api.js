import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }
  return req;
});

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);
export const createCompensation = (data) => API.post('/compensation', data);
export const getCompensations = () => API.get('/compensation');
export const createApplication = (data) => API.post('/application', data);
export const getApplications = () => API.get('/application');
