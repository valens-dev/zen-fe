import {
  useQuery,
  useMutation,
  keepPreviousData,
  type UseQueryResult,
  type UseMutationResult,
} from '@tanstack/react-query';

import { type IApiResponse } from '@/types/api';
import { type IMaterial, type IGetMaterialById } from '@/types/material';

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

export function useMaterialByIdAndType(
  id: number,
  type: string,
): UseQueryResult<IGetMaterialById> {
  return useQuery<IGetMaterialById>({
    queryKey: ['material', type, id],
    queryFn: () => {
      return MaterialAPI.getByIdAndType(id, type);
    },
    placeholderData: keepPreviousData,
  });
}
