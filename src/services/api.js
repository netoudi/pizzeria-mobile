import axios from 'axios';
// import store from '../store';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://192.168.0.102:3333',
});

// api.interceptors.request.use((config) => {
//   const { token } = store.getState().auth;
//
//   const headers = { ...config.headers };
//
//   if (token) {
//     headers.Authorization = `Bearer ${token}`;
//   }
//
//   return { ...config, headers };
// });

export default api;
