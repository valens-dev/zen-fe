import { type IMaterial, type MaterialType } from '@/types/material';

import { api } from './api';

const baseUrl = '/material';

async function getByType(productType: MaterialType): Promise<IMaterial> {
  const response = await api.get<IMaterial>(`${baseUrl}?type=${productType}`);

  return response.data;
}

export const MaterialAPI = {
  getByType,
};
