import * as yup from 'yup';

export const suggestionValidationSchema = yup.object({
  topic: yup.string().required(),
  suggestion: yup.string().required(),
});
