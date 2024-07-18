import type { ReactElement } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm, Controller, FormProvider } from 'react-hook-form';

import {
  Box,
  Button,
  Switch,
  Divider,
  Typography,
  FormControlLabel,
} from '@mui/material';

import { InputField } from '@/shared/input-field';

import { AttributeManager } from '@/components/atribute/attribute-manager';

import {
  initialValues,
  type IFormData,
} from '@/pages/add-material-page/constants';

import { useStyles } from './styles';

interface ILocationState {
  materialType: string;
}
export function MaterialForm(): ReactElement {
  const location = useLocation();
  const { classes } = useStyles();

  const { materialType } = location.state as ILocationState;
  const methods = useForm<IFormData>({
    defaultValues: initialValues,
  });

  function onSubmit(data: IFormData): void {
    // Perform your submit logic here, such as sending data to an API
    // eslint-disable-next-line no-console
    console.log(materialType, data);
  }

  return (
    <FormProvider {...methods}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}>Add New Product</Typography>
        <Divider />
        <Box
          component="form"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={methods.handleSubmit(onSubmit)}
          className={classes.formContainer}
        >
          <Box className={classes.inputRow}>
            <Controller
              name="name"
              control={methods.control}
              render={({ field }) => {
                return <InputField {...field} label="Enter name" />;
              }}
            />
            <Controller
              name="materialNumber"
              control={methods.control}
              render={({ field }) => {
                return <InputField {...field} label="Enter material number" />;
              }}
            />
          </Box>
          <Box className={classes.inputRow}>
            <Controller
              name="netoPrice"
              control={methods.control}
              render={({ field }) => {
                return (
                  <InputField
                    {...field}
                    label="Enter neto price"
                    adornment="€"
                  />
                );
              }}
            />
            <Controller
              name="mwSt"
              control={methods.control}
              render={({ field }) => {
                return (
                  <InputField {...field} label="Enter MwSt." adornment="%" />
                );
              }}
            />
          </Box>
          <Box className={classes.inputRow}>
            <Controller
              name="weight"
              control={methods.control}
              render={({ field }) => {
                return (
                  <InputField {...field} label="Enter weight" adornment="kg" />
                );
              }}
            />
            <Controller
              name="customsTariff"
              control={methods.control}
              render={({ field }) => {
                return <InputField {...field} label="Enter customs tariff" />;
              }}
            />
          </Box>
          <Box className={classes.inputRow}>
            <Controller
              name="comment"
              control={methods.control}
              render={({ field }) => {
                return <InputField {...field} label="Enter comment" />;
              }}
            />
          </Box>
          <Box className={classes.inputRow}>
            <Controller
              name="packaging"
              control={methods.control}
              render={({ field }) => {
                return (
                  <FormControlLabel
                    control={<Switch {...field} checked={field.value} />}
                    label="Packaging"
                  />
                );
              }}
            />
          </Box>
          <Divider />
          <Box className={classes.inputRow}>
            <Controller
              name="attributes"
              control={methods.control}
              render={({ field }) => {
                return <AttributeManager {...field} />;
              }}
            />
          </Box>
          <Divider />
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
    </FormProvider>
  );
}
