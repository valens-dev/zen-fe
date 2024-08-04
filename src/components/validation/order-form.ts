import * as yup from 'yup';

export const orderFormSchema = yup.object().shape({
  positions: yup.array().min(1).required(),
});
