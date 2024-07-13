import { type IValue } from './value';
import { type IAttribute } from './attribute';

export interface IMaterial {
  name: string;
  type: string;
  values: IValue[];
  attributes: IAttribute[];
  weight: number;
  materialNumber: string;
  netPrice: number;
  VAT: number;
  customsTarif: number;
  description: string;
  image: string;
  packaging: boolean;
}
