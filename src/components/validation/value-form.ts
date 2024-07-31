import * as yup from 'yup';

const valueSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  value: yup
    .number()
    .required('Value is required')
    .typeError('Value must be a number'),
  unit: yup.string().required('Unit is required'),
  toleranceMin: yup
    .number()
    .required('Tolerance Min is required')
    .typeError('Tolerance Min must be a number'),
  toleranceMax: yup
    .number()
    .required('Tolerance Max is required')
    .typeError('Tolerance Max must be a number'),
});

export { valueSchema };
