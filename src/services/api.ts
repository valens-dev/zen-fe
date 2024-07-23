import axios, { type AxiosInstance } from 'axios';

import { API_BASE_URL } from './constants';

export const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
