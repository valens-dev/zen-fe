import { type IProduct } from '@/components/material/material-table/types';

import { type IApiResponse } from '@/types/api';
import { type IMaterial } from '@/types/material';

import { api } from '../api';

import { type IGetMaterialParams } from './types';
import { transformMaterialsToProducts } from './utils';

const endpoint = '/material';

async function getAll(
  params: IGetMaterialParams,
): Promise<IApiResponse<IProduct[]>> {
  const response = await api.get<IApiResponse<IMaterial[]>>(endpoint, {
    params,
  });

  return {
    ...response.data,
    data: transformMaterialsToProducts(response.data.data),
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
