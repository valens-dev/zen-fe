import {
  useQuery,
  keepPreviousData,
  type UseQueryResult,
} from '@tanstack/react-query';

import { type IProduct } from '@/components/material/material-table/types';

import { type IApiResponse } from '@/types/api';

import { MaterialAPI } from './api';

import { type IGetMaterialParams } from './types';

export function useMaterial(
  params: IGetMaterialParams,
): UseQueryResult<IApiResponse<IProduct[]>> {
  return useQuery<IApiResponse<IProduct[]>>({
    queryKey: ['material', params],
    queryFn: () => {
      return MaterialAPI.getAll(params);
    },
    placeholderData: keepPreviousData,
  });
}
