import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://api.hexagon.co.id/", // URL backend Laravel
  baseURL: "http://localhost:8000/", // URL backend Laravel
  withCredentials: true, // Penting untuk mengirimkan cookie
});

export default axiosInstance;
