import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const BASE_URL = 'http://localhost:3000';

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const API = axios.create(axiosConfig);
API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);
