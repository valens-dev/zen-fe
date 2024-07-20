import { type IAttribute } from '@/components/attribute/constants';

export interface IFormData {
  name: string;
  materialNumber: string;
  netoPrice: string;
  mwSt: string;
  weight: string;
  customsTariff: string;
  comment: string;
  packaging: boolean;
  attributes: IAttribute[];
  values: {
    name: string;
    value: string;
    unit: string;
    toleranceMin: number;
    toleranceMax: number;
  }[];
}

export const initialValues: IFormData = {
  name: '',
  materialNumber: '',
  netoPrice: '',
  mwSt: '',
  weight: '',
  customsTariff: '',
  comment: '',
  packaging: false,
  attributes: [{ name: '', option: '' }],
  values: [{ name: '', value: '', unit: '', toleranceMin: 0, toleranceMax: 0 }],
};
