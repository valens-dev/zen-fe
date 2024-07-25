import axios, { type AxiosInstance } from 'axios';

export const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.DEV ? '/api' : 'https://zen-admin.valens.dev/api',
});
