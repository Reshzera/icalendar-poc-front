import axios from "axios";
import { LocalStorageKeys } from "../constants/localstorage";
import { UserFromApi } from "./types/user";

type UnavailableUser = UserFromApi & {
  suggestedTime: Date;
};

type ApiErrorResponse = {
  unavailableUsers: UnavailableUser[];
  message: string;
  statusCode: number;
};

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const isErrorFromApi = (error: any) => {
  return axios.isAxiosError<ApiErrorResponse>(error);
};

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
