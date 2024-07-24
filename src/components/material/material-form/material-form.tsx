import { useState, forwardRef } from 'react';
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
import { AddComponentModal } from '@/shared/add-component-modal/add-component-modal';

import { PartsList } from '@/components/parts-list/parts-list';
import { ValueRow } from '@/components/value/value-row/value-row';
import { type IAttribute } from '@/components/attribute/constants';
import { type IComponent } from '@/components/parts-list/constants';
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

    const [modalOpen, setModalOpen] = useState(false);

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
                    <Input {...field} label="Enter neto price" adornment="€" />
                  );
                }}
              />
              <Controller
                name="mwSt"
                control={methods.control}
                render={({ field }) => {
                  return <Input {...field} label="Enter MwSt." adornment="%" />;
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
                  return <Input {...field} label="Enter comment" />;
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
                      buttonText="Add row"
                      onAddRow={() => {
                        return field.onChange([
                          ...field.value,
                          { name: '', option: '' },
                        ]);
                      }}
                    >
                      {field.value.map(
                        (attribute: IAttribute, index: number) => {
                          return (
                            <AttributeRow
                              key={attribute.name}
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
                      buttonText="Add row"
                      onAddRow={() => {
                        return field.onChange([
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
            <Box className={classes.inputRow}>
              <Controller
                name="parts"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <DynamicValuesTable
                      {...field}
                      title="Components"
                      buttonText="Add component"
                      onAddRow={() => {
                        return setModalOpen(true);
                      }}
                    >
                      <PartsList
                        data={field.value}
                        onDeleteRow={(index) => {
                          const newValues = [...field.value];
                          newValues.splice(index, 1);
                          field.onChange(newValues);
                        }}
                        onChangeRow={(index, updatedValue) => {
                          const newValues = [...field.value];
                          newValues[index] = updatedValue;
                          field.onChange(newValues);
                        }}
                      />
                    </DynamicValuesTable>
                  );
                }}
              />
            </Box>
            <Divider />
            <AddComponentModal
              open={modalOpen}
              onClose={() => {
                return setModalOpen(false);
              }}
              onSave={(newComponents: IComponent[]) => {
                methods.setValue('parts', [
                  ...methods.getValues('parts'),
                  ...newComponents,
                ]);
              }}
            />
          </Box>
        </Box>
      </FormProvider>
    );
  },
);

MaterialForm.displayName = 'MaterialForm';

export { MaterialForm };
