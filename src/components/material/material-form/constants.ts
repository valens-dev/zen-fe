import { type IFormData } from './types';

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
  parts: [],
};
