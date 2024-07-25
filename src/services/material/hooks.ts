import {
  useQuery,
  keepPreviousData,
  type UseQueryResult,
} from '@tanstack/react-query';

import { type IApiResponse } from '@/types/api';
import { type IMaterial } from '@/types/material';

import { MaterialAPI } from './api';

import { type IGetMaterialParams } from './types';

export function useMaterial(
  params: IGetMaterialParams,
): UseQueryResult<IApiResponse<IMaterial[]>> {
  return useQuery<IApiResponse<IMaterial[]>>({
    queryKey: ['material', params],
    queryFn: () => {
      return MaterialAPI.getAll(params);
    },
    placeholderData: keepPreviousData,
  });
}
