import { Box } from '@mui/material';

import { GenericForm } from '@/shared/form';

import { Header } from '@/layouts/header';

import { formInputs, initialValues, type IFormData } from './constants';

import { useStyles } from './styles';

/* eslint-disable import/no-default-export */
export default function AddMaterialPage(): React.ReactNode {
  const { classes } = useStyles();

  function handleSubmit(data: IFormData): void {
    // TODO
    // eslint-disable-next-line no-console
    console.log('Form Data:', data);
  }

  return (
    <Box className={classes.wrapper}>
      <Header title="Add material" />
      <GenericForm<IFormData>
        inputs={formInputs}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
    </Box>
  );
}
