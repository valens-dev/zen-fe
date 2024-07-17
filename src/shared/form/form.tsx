import type React from 'react';
import {
  useForm,
  type Path,
  Controller,
  type FieldValues,
  type DefaultValues,
  type SubmitHandler,
} from 'react-hook-form';

import { Box, Button, Typography, type TextFieldProps } from '@mui/material';

import { useStyles } from './styles';

export interface IFormInput<T extends FieldValues> {
  name: Path<T>;
  type: string;
  component: React.ElementType;
  props?: Omit<TextFieldProps, 'name'> & {
    adornment?: string;
  };
}

interface IGenericFormProps<T extends FieldValues> {
  inputs: IFormInput<T>[];
  initialValues: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
}

export function GenericForm<T extends FieldValues>({
  inputs,
  initialValues,
  onSubmit,
}: IGenericFormProps<T>): React.ReactElement {
  const { classes } = useStyles();

  const { control, handleSubmit } = useForm<T>({
    defaultValues: initialValues,
  });

  function handleFormSubmit(data: T): void {
    onSubmit(data);
  }

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.title}>Add New Product</Typography>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit(handleFormSubmit)();
        }}
        className={classes.formContainer}
      >
        <Box className={classes.componentContainer}>
          {inputs.map((input) => {
            return (
              <Box
                key={String(input.name)}
                sx={{
                  flex: input.props?.fullWidth
                    ? '1 1 100%'
                    : '1 1 calc(50% - 8px)',
                }}
              >
                <Controller
                  name={input.name}
                  control={control}
                  render={({ field }) => {
                    const Component = input.component;
                    return <Component {...field} {...input.props} />;
                  }}
                />
              </Box>
            );
          })}
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
