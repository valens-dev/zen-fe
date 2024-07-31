import { type IAttribute } from '@/components/attribute/constants';

import { type IValue } from '@/types/material';

export interface IFormData {
  id: number;
  name: string;
  type: string;
  values: IValue[];
  attributes: IAttribute[];
  weight: number;
  materialNumber: string;
  netPrice: number;
  VAT: number;
  customsTarif?: string;
  description: string;
  image: string;
  packaging: boolean;
  parts: {
    units: number;
    unitType: string;
    name: string;
    imageUrl: string;
    duration: number;
  }[];
}
