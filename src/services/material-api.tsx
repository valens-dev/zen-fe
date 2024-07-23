import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { type MaterialType, type IMaterialsResponse } from '@/types/material';

import { api } from './api';

const baseUrl = 'material';

interface IGetMaterialsParams {
  page?: number;
  limit?: number;
  attributeName?: string;
  attributeOption?: string[];
  valueName?: string;
  valueFrom?: number;
  valueTo?: number;
  name?: string;
  weight?: number;
  netPrice?: number;
  type: MaterialType;
  sortFields?: string[];
  sortFieldsOrders?: string[];
  sortAttributes?: string[];
  sortAttributesOrders?: string[];
  valueNames?: string[];
  valueSortOrders?: string[];
}

async function getMaterials(
  params: IGetMaterialsParams,
): Promise<IMaterialsResponse> {
  const response = await api.get<IMaterialsResponse>(baseUrl, { params });
  return response.data;
}

export const MaterialAPI = {
  getMaterials,
};

export function useMaterials(
  params: IGetMaterialsParams,
): UseQueryResult<IMaterialsResponse, Error> {
  return useQuery<IMaterialsResponse, Error>({
    queryKey: ['materials', params],
    queryFn: () => {
      return getMaterials(params);
    },
    enabled: Boolean(params.type),
  });
}
