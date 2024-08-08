import * as yup from 'yup';

export interface IAnonymousData {
  topic: string;
  suggestion: string;
}

export const initialValues: IAnonymousData = {
  topic: '',
  suggestion: '',
};

export const suggestionValidationSchema = yup.object({
  topic: yup.string().required(),
  suggestion: yup.string().required(),
});
