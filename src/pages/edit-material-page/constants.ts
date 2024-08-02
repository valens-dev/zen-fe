import { MaterialType } from '@/types/material';

import { type IMaterialConfig } from './types';

export const materialConfig: Record<MaterialType, IMaterialConfig> = {
  [MaterialType.Product]: {
    title: 'Edit Product',
    path: 'Material > Product > Edit Product',
    buttonText: 'Submit Product',
  },
  [MaterialType.ManufacturingPart]: {
    title: 'Edit Purchasing Part',
    path: 'Material > Manufacturing Part > Edit BOM',
    buttonText: 'Submit BOM',
  },
  [MaterialType.PurchasingPart]: {
    title: 'Edit Manufacturing Part',
    path: 'Material > Purchasing Part > Edit Part',
    buttonText: 'Submit Purchasing Part',
  },
};
