import { api } from '@/services/api';

import {
  type IApiParams,
  type IMaterialApiResponse,
} from './types/material-api';

export async function getMaterials(
  params: IApiParams,
): Promise<IMaterialApiResponse> {
  try {
    const response = await api.get<IMaterialApiResponse>('/material', {
      params,
    });
    return response.data;
  } catch {
    throw new Error('Failed to fetch materials');
  }
}
