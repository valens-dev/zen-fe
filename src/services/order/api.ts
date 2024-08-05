import { type IOrder } from '@/types/order';
import { type IApiResponse } from '@/types/api';

import { api } from '../api';

const endpoint = '/order';

async function createOrder(data: IOrder): Promise<IApiResponse<IOrder>> {
  const response = await api.post<IApiResponse<IOrder>>(endpoint, data);

  return response.data;
}

export const OrderAPI = {
  createOrder,
};
