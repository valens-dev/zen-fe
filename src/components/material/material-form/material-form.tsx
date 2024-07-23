import { forwardRef } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';

import {
  Box,
  Switch,
  Divider,
  Typography,
  FormControlLabel,
} from '@mui/material';

import { Input } from '@/shared/input';
import { DynamicValuesTable } from '@/shared/dynamic-values-table';

import { ValueRow } from '@/components/value/value-row/value-row';
import { type IAttribute } from '@/components/attribute/constants';
import { AttributeRow } from '@/components/attribute/attribute-row/attribute-row';

import { type IFormData } from './types';
import { initialValues } from './constants';

import { useStyles } from './styles';

interface IMaterialFormProps {
  onSubmit: (data: IFormData) => void;
}

const MaterialForm = forwardRef<HTMLFormElement, IMaterialFormProps>(
  ({ onSubmit }, ref) => {
    const { classes } = useStyles();
    const methods = useForm<IFormData>({
      defaultValues: initialValues,
    });

    return (
      <FormProvider {...methods}>
        <Box className={classes.wrapper}>
          <Typography className={classes.title}>Add New Product</Typography>
          <Divider />
          <Box
            component="form"
            ref={ref}
            onSubmit={void methods.handleSubmit(onSubmit)}
            className={classes.formContainer}
          >
            <Box className={classes.inputRow}>
              <Controller
                name="name"
                control={methods.control}
                render={({ field }) => {
                  return <Input {...field} label="Enter name" />;
                }}
              />
              <Controller
                name="materialNumber"
                control={methods.control}
                render={({ field }) => {
                  return <Input {...field} label="Enter material number" />;
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="netoPrice"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input {...field} label="Enter net price" adornment="€" />
                  );
                }}
              />
              <Controller
                name="mwSt"
                control={methods.control}
                render={({ field }) => {
                  return <Input {...field} label="Enter VAT" adornment="%" />;
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="weight"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input {...field} label="Enter weight" adornment="kg" />
                  );
                }}
              />
              <Controller
                name="customsTariff"
                control={methods.control}
                render={({ field }) => {
                  return <Input {...field} label="Enter customs tariff" />;
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="comment"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input {...field} label="Enter material description" />
                  );
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
                  return (
                    <DynamicValuesTable
                      {...field}
                      title="Attributes"
                      onAddRow={() => {
                        field.onChange([
                          ...field.value,
                          { name: '', option: '' },
                        ]);
                      }}
                    >
                      {field.value.map(
                        (attribute: IAttribute, index: number) => {
                          return (
                            <AttributeRow
                              // eslint-disable-next-line react/no-array-index-key
                              key={index}
                              attribute={attribute}
                              onDelete={() => {
                                const newAttributes = [...field.value];
                                newAttributes.splice(index, 1);
                                field.onChange(newAttributes);
                              }}
                              onChange={(updatedAttribute: IAttribute) => {
                                const newAttributes = [...field.value];
                                newAttributes[index] = updatedAttribute;
                                field.onChange(newAttributes);
                              }}
                            />
                          );
                        },
                      )}
                    </DynamicValuesTable>
                  );
                }}
              />
            </Box>
            <Divider />
            <Box className={classes.inputRow}>
              <Controller
                name="values"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <DynamicValuesTable
                      {...field}
                      title="Values"
                      onAddRow={() => {
                        field.onChange([
                          ...field.value,
                          {
                            name: '',
                            value: '',
                            unit: '',
                            toleranceMin: 0,
                            toleranceMax: 0,
                          },
                        ]);
                      }}
                    >
                      {field.value.map((value, index) => {
                        return (
                          <ValueRow
                            key={value.name}
                            value={value}
                            onDelete={() => {
                              const newValues = [...field.value];
                              newValues.splice(index, 1);
                              field.onChange(newValues);
                            }}
                            onChange={(updatedValue) => {
                              const newValues = [...field.value];
                              newValues[index] = updatedValue;
                              field.onChange(newValues);
                            }}
                          />
                        );
                      })}
                    </DynamicValuesTable>
                  );
                }}
              />
            </Box>
            <Divider />
          </Box>
        </Box>
      </FormProvider>
    );
  },
);

MaterialForm.displayName = 'MaterialForm';

export { MaterialForm };
