import axios from "axios";
import router from "./router";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api`,
});

// request interceptors
axiosClient.interceptors.request.use((config) => {
  const token = "123";
  config.headers.Authorization = `Bearer ${token}`;
});

// response interceptors
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status == "401") {
      router.navigate("/login");
      return;
    }
    throw error;
  }
);
export default axiosClient;
