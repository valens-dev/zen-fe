import { type MaterialType } from '@/types/material';

export interface IProduct {
  id: number;
  imageUrl: string;
  height: string;
  material: string;
  materialType: MaterialType;
  name: string;
  price: string;
  stock: string;
  weight: string;
}
