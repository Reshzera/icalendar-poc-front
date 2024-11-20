import axios from "axios";
import { LocalStorageKeys } from "../constants/localstorage";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem(LocalStorageKeys.SESSION_USER);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

httpClient.interceptors.response.use(async (data) => {
  return data;
});
