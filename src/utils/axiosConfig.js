import axios from 'axios';

export const base_url = "https://ecommerce-backend-1abt.onrender.com/api/";

const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer")).token
  : null;

export const api = axios.create({
  baseURL: base_url,
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage}`,
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("customer")
      ? JSON.parse(localStorage.getItem("customer")).token
      : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

