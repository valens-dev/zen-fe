import { type IApiResponse } from '@/types/api';
import { type IMaterial, type IGetMaterialById } from '@/types/material';

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

async function getByIdAndType(
  id: number,
  type: string,
): Promise<IGetMaterialById> {
  const response = await api.get<IGetMaterialById>(`${endpoint}/${type}/${id}`);

  return response.data;
}

async function update(
  id: number,
  data: IMaterial,
): Promise<IApiResponse<IMaterial>> {
  const response = await api.put<IApiResponse<IMaterial>>(
    `${endpoint}/${id}`,
    data,
  );

  return response.data;
}

export const MaterialAPI = {
  getAll,
  create,
  getByIdAndType,
  update,
};
