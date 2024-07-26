import {
  useQuery,
  useMutation,
  keepPreviousData,
  type UseQueryResult,
  type UseMutationResult,
} from '@tanstack/react-query';

import { type IProduct } from '@/components/material/material-table/types';

import { type IApiResponse } from '@/types/api';
import { type IMaterial } from '@/types/material';

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

export function useCreateMaterial(): UseMutationResult<
  IApiResponse<IMaterial>,
  Error,
  IMaterial
> {
  return useMutation({
    mutationFn: async (data: IMaterial) => {
      return await MaterialAPI.create(data);
    },
  });
}
