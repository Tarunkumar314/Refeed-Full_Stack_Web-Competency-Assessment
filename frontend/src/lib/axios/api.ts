import config from "@/config/config";
import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: config.API_URI,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
