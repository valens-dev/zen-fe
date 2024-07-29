import { type IAttribute } from '@/types/material';

import { api } from '../api';

const endpoint = '/Material-attribute';

async function getAll(): Promise<IAttribute[]> {
  const response = await api.get<IAttribute[]>(endpoint);
  return response.data;
}

export const AttributeAPI = {
  getAll,
};
