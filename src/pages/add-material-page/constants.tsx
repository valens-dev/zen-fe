import { type IFormInput } from '@/shared/form';
import { InputField } from '@/shared/input-field';
import { SwitchInput } from '@/shared/switch-field';

import { AttributeManager } from '@/components/atribute/attribute-manager';

export interface IFormData {
  name: string;
  materialNumber: string;
  netoPrice: string;
  mwSt: string;
  weight: string;
  customsTariff: string;
  comment: string;
  packaging: boolean;
  attributes: { name: string; value: string }[];
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
  attributes: [],
};

export const formInputs: IFormInput<IFormData>[] = [
  {
    name: 'name',
    type: 'text',
    component: InputField,
    props: { variant: 'outlined', label: 'Name' },
  },
  {
    name: 'materialNumber',
    type: 'text',
    component: InputField,
    props: { variant: 'outlined', label: 'Material Number' },
  },
  {
    name: 'netoPrice',
    type: 'text',
    component: InputField,
    props: {
      variant: 'outlined',
      label: 'Neto price',
      adornment: '€',
    },
  },
  {
    name: 'mwSt',
    type: 'text',
    component: InputField,
    props: {
      variant: 'outlined',
      label: 'MwSt.',
      adornment: '%',
    },
  },
  {
    name: 'weight',
    type: 'text',
    component: InputField,
    props: {
      variant: 'outlined',
      label: 'Weight',
      adornment: 'kg',
    },
  },
  {
    name: 'customsTariff',
    type: 'text',
    component: InputField,
    props: {
      variant: 'outlined',
      label: 'Customs Tarif',
    },
  },
  {
    name: 'comment',
    type: 'text',
    component: InputField,
    props: {
      variant: 'outlined',
      label: 'Comment',
      fullWidth: true,
    },
  },
  {
    name: 'packaging',
    type: 'boolean',
    component: SwitchInput,
    props: {
      label: 'Packaging',
    },
  },
  {
    name: 'attributes',
    type: 'boolean',
    component: AttributeManager,
    props: {
      label: 'Packaging',
      fullWidth: true,
    },
  },
];
