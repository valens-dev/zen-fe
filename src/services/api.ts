import axios, { type AxiosInstance } from 'axios';

const isDevelopment = import.meta.env.MODE === 'development';

export const api: AxiosInstance = axios.create({
  baseURL: isDevelopment ? '/api' : 'https://zen-admin.valens.dev/api',
});
