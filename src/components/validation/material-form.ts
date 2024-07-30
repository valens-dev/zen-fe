import * as yup from 'yup';

export const materialShema = yup
  .object({
    name: yup.string().required(),
    netPrice: yup.number().required(),
    VAT: yup.number().required(),
    weight: yup.number().required(),
  })
  .required();
