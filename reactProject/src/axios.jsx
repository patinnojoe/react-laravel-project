import axios from "axios";
import router from "./router";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api",
});

// request interceptors
axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("TOKEN")}`;
  return config;
});

// response interceptors
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      router.navigate("/login");
      return;
    }
    throw error;
  }
);
export default axiosClient;
