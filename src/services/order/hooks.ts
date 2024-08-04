import { useMutation, type UseMutationResult } from '@tanstack/react-query';

import { type IOrder } from '@/types/order';
import { type IApiResponse } from '@/types/api';

import { OrderAPI } from './api';

export function useCreateOrder(): UseMutationResult<
  IApiResponse<IOrder>,
  Error,
  IOrder
> {
  return useMutation({
    mutationFn: async (data: IOrder) => {
      return await OrderAPI.createOrder(data);
    },
  });
}
