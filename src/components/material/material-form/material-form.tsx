import { useState, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, Controller, FormProvider } from 'react-hook-form';

import type * as yup from 'yup';
import { useAttributes } from '@/services/attribute';
import { yupResolver } from '@hookform/resolvers/yup';

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
import { materialShema } from '@/components/validation/material-form';
import { AttributeRow } from '@/components/attribute/attribute-row/attribute-row';

import { MaterialType } from '@/types/material';

import { type IFormData } from './types';
import { initialValues } from './constants';
import { checkLastRowFilled } from './utils';

import { useStyles } from './styles';

interface IMaterialFormProps {
  onSubmit: (data: IFormData) => void;
  materialType: MaterialType;
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
  ({ onSubmit, materialType }, ref) => {
    const { classes } = useStyles();
    const { t } = useTranslation();
    const methods = useForm<IFormData>({
      defaultValues: initialValues,
      resolver: yupResolver(materialShema as yup.ObjectSchema<IFormData>),
    });
    const { data: attributesData } = useAttributes();

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
      <FormProvider {...methods}>
        <Box className={classes.wrapper}>
          <Typography className={classes.title}>Add New Product</Typography>
          <Divider />
          <Box
            component="form"
            ref={ref}
            onSubmit={(): void => {
              void methods.handleSubmit(onSubmit)();
            }}
            className={classes.formContainer}
          >
            <Box className={classes.inputRow}>
              <Controller
                name="name"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      label={t('material.materialForm.nameLabel')}
                      placeholder={t('material.materialForm.namePlaceholder')}
                      error={Boolean(methods.formState.errors.name)}
                    />
                  );
                }}
              />
              <Controller
                name="materialNumber"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      label={t('material.materialForm.materialNumberLabel')}
                      placeholder={t(
                        'material.materialForm.materialNumberPlaceholder',
                      )}
                    />
                  );
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="netPrice"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      max={999_999_999}
                      label={t('material.materialForm.netPriceLabel')}
                      placeholder={t(
                        'material.materialForm.netPricePlaceholder',
                      )}
                      adornment="€"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        return handleNumberChange(field as IFieldType, e);
                      }}
                      error={Boolean(methods.formState.errors.netPrice)}
                    />
                  );
                }}
              />
              <Controller
                name="VAT"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      max={999_999_999}
                      label={t('material.materialForm.vatLabel')}
                      placeholder={t('material.materialForm.vatPlaceholder')}
                      adornment="%"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        return handleNumberChange(field as IFieldType, e);
                      }}
                      error={Boolean(methods.formState.errors.VAT)}
                    />
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
                    <Input
                      {...field}
                      type="number"
                      min={0}
                      max={999_999_999}
                      label={t('material.materialForm.weightLabel')}
                      placeholder={t('material.materialForm.weightPlaceholder')}
                      adornment="kg"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        return handleNumberChange(field as IFieldType, e);
                      }}
                      error={Boolean(methods.formState.errors.weight)}
                    />
                  );
                }}
              />
              <Controller
                name="customsTarif"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      label={t('material.materialForm.customTariffLabel')}
                      placeholder={t(
                        'material.materialForm.customTariffPlaceholder',
                      )}
                    />
                  );
                }}
              />
            </Box>
            <Box className={classes.inputRow}>
              <Controller
                name="description"
                control={methods.control}
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      label={t('material.materialForm.commentLabel')}
                      placeholder={t(
                        'material.materialForm.commentPlaceholder',
                      )}
                    />
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
                control={methods.control}
                render={({ field }) => {
                  return (
                    <DynamicValuesTable
                      {...field}
                      buttonText={t('dynamicTable.addRow')}
                      title={t('material.materialForm.attributesTitle')}
                      onAddRow={() => {
                        if (checkLastRowFilled(field.value)) {
                          return field.onChange([
                            ...field.value,
                            { name: '', option: '' },
                          ]);
                        }
                      }}
                    >
                      {field.value.map(
                        (attribute: IAttribute, index: number) => {
                          return (
                            <AttributeRow
                              key={attribute.name}
                              attribute={attribute}
                              attributeNames={
                                attributesData?.attributeNames ?? []
                              }
                              attributeOptions={
                                attributesData?.attributeOptions ?? {}
                              }
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
                      buttonText="Add row"
                      title={t('material.materialForm.valuesTitle')}
                      onAddRow={() => {
                        if (checkLastRowFilled(field.value)) {
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
                        }
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
            {materialType !== MaterialType.PurchasingPart && (
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
            )}
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
