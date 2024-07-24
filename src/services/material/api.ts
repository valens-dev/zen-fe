import { type IProduct } from '@/components/material/material-table/types';

import { type IApiResponse } from '@/types/api';

import { api } from '../api';

import { type IGetMaterialParams } from './types';

const endpoint = '/material';

async function getAll(
  params: IGetMaterialParams,
): Promise<IApiResponse<IProduct[]>> {
  const response = await api.get<IApiResponse<IProduct[]>>(`${endpoint}`, {
    params,
  });

  return response.data;
}

export const MaterialAPI = {
  getAll,
};
