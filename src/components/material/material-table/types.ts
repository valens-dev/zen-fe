import { type IProductData, type MaterialType } from '@/types/material';

export interface IProduct {
  id: number;
  imageUrl: object;
  height: string;
  material: string;
  materialType: MaterialType;
  name: string;
  netPrice: string;
  stock: string;
  weight: string;
  type: MaterialType;
  manufacturingPart?: IProductData;
  purchasingPart?: IProductData;
  product?: IProductData;
}
