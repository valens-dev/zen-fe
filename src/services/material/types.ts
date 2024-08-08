import { type MaterialType } from '@/types/material';

export interface IGetMaterialParams {
  page: number;
  limit: number;
  name?: string;
  type: MaterialType[];
  heightFilter?: { min: number; max: number };
  materialFilter?: string[];
}
