import * as yup from 'yup';

import { valueSchema } from './value-form';

export const materialShema = yup
  .object({
    name: yup.string().required(),
    netPrice: yup.number().required(),
    VAT: yup.number().required(),
    weight: yup.number().required(),
    customsTarif: yup.string().required(),
    values: yup.array().of(valueSchema).required('Values are required'),
  })
  .required();
