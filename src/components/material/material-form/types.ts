import { type IAttribute } from '@/components/attribute/constants';

import { type IValue, type IComponent } from '@/types/material';

export interface IFormData {
  id?: number;
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
  image: object;
  packaging: boolean;
  parts: IComponent[];
}
