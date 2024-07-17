import axios, { type Axios } from 'axios';

const publicInstance: Axios = axios.create({
  baseURL: 'https://zen-admin.valens.dev',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { publicInstance };
