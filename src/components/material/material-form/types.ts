import { type IAttribute } from '@/components/attribute/constants';

import { type IValue } from '@/types/material';

export interface IFormData {
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
}
