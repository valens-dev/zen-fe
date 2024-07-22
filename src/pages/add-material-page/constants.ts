import { MaterialType } from '@/types/material';

import { type IMaterialConfig } from './types';

export const materialConfig: Record<MaterialType, IMaterialConfig> = {
  [MaterialType.Product]: {
    title: 'Add Product',
    path: 'Material > Product > Add New Product',
    buttonText: 'Add Product',
  },
  [MaterialType.ManufacturingPart]: {
    title: 'Add Purchasing Part',
    path: 'Material > Manufacturing Part > Add BOM',
    buttonText: 'Add BOM',
  },
  [MaterialType.PurchasingPart]: {
    title: 'Add Manufacturing Part',
    path: 'Material > Purchasing Part > Add Purchasing Part',
    buttonText: 'Add Purchasing Part',
  },
};
