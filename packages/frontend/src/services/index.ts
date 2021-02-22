import axios from "axios";

const baseURL = "http://localhost:4000/";

export const apiService = axios.create({
  baseURL,
  timeout: 30 * 1000,
});
