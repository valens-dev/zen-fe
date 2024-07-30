import { type IFormData } from './types';

export const initialValues: IFormData = {
  name: '',
  type: '',
  values: [],
  attributes: [],
  weight: 0,
  materialNumber: '',
  netPrice: 0,
  VAT: 19,
  customsTarif: undefined,
  description: '',
  image: '',
  packaging: false,
};
