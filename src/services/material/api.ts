import { type IApiResponse } from '@/types/api';
import { type IMaterial } from '@/types/material';

import { api } from '../api';

import { type IGetMaterialParams } from './types';

const endpoint = '/material';

async function getAll(
  params: IGetMaterialParams,
): Promise<IApiResponse<IMaterial[]>> {
  const response = await api.get<IApiResponse<IMaterial[]>>(endpoint, {
    params,
  });

  return {
    ...response.data,
    data: response.data.data,
  };
}

async function create(data: IMaterial): Promise<IApiResponse<IMaterial>> {
  const response = await api.post<IApiResponse<IMaterial>>(endpoint, data);

  return response.data;
}

export const MaterialAPI = {
  getAll,
  create,
};
