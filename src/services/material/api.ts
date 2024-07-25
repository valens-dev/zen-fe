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

  return response.data;
}

export const MaterialAPI = {
  getAll,
};
