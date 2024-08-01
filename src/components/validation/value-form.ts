import * as yup from 'yup';

const valueSchema = yup.object().shape({
  name: yup.string().required(),
  value: yup.number().required(),
  unit: yup.string().required(),
  toleranceMin: yup.number().required(),
  toleranceMax: yup.number().required(),
});

export { valueSchema };
