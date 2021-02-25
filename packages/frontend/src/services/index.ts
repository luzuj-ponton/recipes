import axios from "axios";

const baseURL = "http://localhost:4000/";

export const apiService = axios.create({
  baseURL,
  timeout: 30 * 1000,
});

export const configureApi = (token: string | null) => {
  apiService.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${token}`;
    return request;
  });
};
