import { type IAttribute } from '@/components/attribute/constants';

import { type IValue } from '@/types/material';

export interface IFormData {
  name: string;
  type: string;
  values: IValue[];
  attributes: IAttribute[];
  weight?: number;
  materialNumber: string;
  netPrice?: number;
  VAT?: number;
  customsTarif?: number;
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
