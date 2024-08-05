import * as yup from 'yup';

export const orderFormSchema = yup.object().shape({
  positions: yup.array().min(1).required(),
  deliveryAddress: yup.object().shape({
    street: yup.string().required(),
    houseNumber: yup.string().required(),
  }),
  customerName: yup.string().required(),
});
