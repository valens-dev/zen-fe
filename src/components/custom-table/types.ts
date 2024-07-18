import { type MaterialType } from '@/types/material';

export interface IProduct {
  imageUrl: string;
  height: string;
  material: string;
  materialType: MaterialType;
  name: string;
  price: string;
  stock: string;
  weight: string;
}

export interface IOrder {
  orderNumber: string;
  orderDate: string;
  customer: string;
  amount: string;
  deliveryDate: string;
  status: string;
}
