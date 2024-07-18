import { type IAttribute } from '@/components/atribute/constants';

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
};
