import * as yup from 'yup';

export const loginValidationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});
