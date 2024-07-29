import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
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

interface IFieldType {
  onChange: (value: number) => void;
}

function handleNumberChange(
  field: IFieldType,
  e: React.ChangeEvent<HTMLInputElement>,
): void {
  field.onChange(Number.parseFloat(e.target.value));
}

const MaterialForm = forwardRef<HTMLFormElement, IMaterialFormProps>(
  ({ onSubmit }, ref) => {
    const { t } = useTranslation();
    const { classes } = useStyles();
    const methods = useForm<IFormData>({
      defaultValues: initialValues,
    });

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = methods;

    return (
      <FormProvider {...methods}>
        <Box className={classes.wrapper}>
          <Typography className={classes.title}>Add New Product</Typography>
          <Divider />
          <Box
            component="form"
            ref={ref}
            onSubmit={(e) => {
              e.preventDefault();
              void handleSubmit(onSubmit)();
            }}
            className={classes.formContainer}
          >
            <Box className={classes.inputRow}>
              <Controller
                name="name"
                control={control}
                rules={{ required: 'Name is required' }}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      label={t('material.materialForm.nameLabel')}
                      placeholder={t('material.materialForm.namePlaceholder')}
                      error={Boolean(errors.name)}
                      helperText={errors.name?.message}
                    />
                  );
                }}
              />
              <Controller
                name="materialNumber"
                control={control}
                rules={{ required: 'Material number is required' }}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      label={t('material.materialForm.materialNumberLabel')}
                      placeholder={t(
                        'material.materialForm.materialNumberPlaceholder',
                      )}
                      error={Boolean(errors.materialNumber)}
                      helperText={errors.materialNumber?.message}
                    />
                  );
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="netPrice"
                control={control}
                rules={{ required: 'Net price is required' }}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      max={999_999_999}
                      label={t('material.materialForm.netPriceLabel')}
                      adornment="€"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        return handleNumberChange(field as IFieldType, e);
                      }}
                      error={Boolean(errors.netPrice)}
                      helperText={errors.netPrice?.message}
                    />
                  );
                }}
              />
              <Controller
                name="VAT"
                control={control}
                rules={{ required: 'VAT is required' }}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      max={999_999_999}
                      label={t('material.materialForm.vatLabel')}
                      adornment="%"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        return handleNumberChange(field as IFieldType, e);
                      }}
                      error={Boolean(errors.VAT)}
                      helperText={errors.VAT?.message}
                    />
                  );
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="weight"
                control={control}
                rules={{ required: 'Weight is required' }}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      max={999_999_999}
                      label={t('material.materialForm.weightLabel')}
                      adornment="kg"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        return handleNumberChange(field as IFieldType, e);
                      }}
                      error={Boolean(errors.weight)}
                      helperText={errors.weight?.message}
                    />
                  );
                }}
              />
              <Controller
                name="customsTarif"
                control={control}
                rules={{ required: 'Customs tariff is required' }}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      label={t('material.materialForm.customTariffLabel')}
                      placeholder={t(
                        'material.materialForm.customTariffPlaceholder',
                      )}
                      error={Boolean(errors.customsTarif)}
                      helperText={errors.customsTarif?.message}
                    />
                  );
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="description"
                control={control}
                rules={{ required: 'Comment is required' }}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      label={t('material.materialForm.commentLabel')}
                      placeholder={t(
                        'material.materialForm.commentPlaceholder',
                      )}
                      error={Boolean(errors.description)}
                      helperText={errors.description?.message}
                    />
                  );
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="packaging"
                control={control}
                render={({ field }) => {
                  return (
                    <FormControlLabel
                      control={<Switch {...field} checked={field.value} />}
                      label={t('material.materialForm.packagingLabel')}
                    />
                  );
                }}
              />
            </Box>
            <Divider />
            <Box className={classes.inputRow}>
              <Controller
                name="attributes"
                control={control}
                render={({ field }) => {
                  return (
                    <DynamicValuesTable
                      {...field}
                      title={t('material.materialForm.attributesTitle')}
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
                control={control}
                render={({ field }) => {
                  return (
                    <DynamicValuesTable
                      {...field}
                      title={t('material.materialForm.valuesTitle')}
                      onAddRow={() => {
                        field.onChange([
                          ...field.value,
                          {
                            name: '',
                            value: '',
                            unit: '',
                            toleranceMin: '',
                            toleranceMax: '',
                          },
                        ]);
                      }}
                    >
                      {field.value.map((value, index) => {
                        return (
                          <ValueRow
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
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
