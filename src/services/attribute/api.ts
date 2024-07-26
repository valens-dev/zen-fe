import { type IAttribute } from '@/types/material';

import { api } from '../api';

const attributeEndpoint = '/Material-attribute';

async function getAttributes(): Promise<IAttribute[]> {
  const response = await api.get<IAttribute[]>(attributeEndpoint);
  return response.data;
}

export const AttributeAPI = {
  getAttributes,
};
