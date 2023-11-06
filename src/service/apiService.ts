import axios from "axios";

export default function apiService(baseURL: string) {
  const api = axios.create({
    baseURL,
  });

  api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
  );
  return api;
}
