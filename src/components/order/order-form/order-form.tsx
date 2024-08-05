import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Controller, type Control, useFormContext } from 'react-hook-form';

import {
  Box,
  Select,
  Switch,
  Divider,
  MenuItem,
  InputLabel,
  Typography,
  FormControl,
  FormControlLabel,
} from '@mui/material';

import { Input } from '@/shared/input';
import { DynamicValuesTable } from '@/shared/dynamic-values-table';
import { AddMaterialModal } from '@/shared/add-material-modal/add-material-modal';

import { MaterialType } from '@/types/material';

import { PositionsList } from '../positions-list.tsx/positions-list';

import { type IPosition, type IFormInputs } from './types';

import { useStyles } from './styles';

interface IOrderFormProps {
  onSubmit: () => Promise<void>;
  control: Control<IFormInputs>;
}

// eslint-disable-next-line import/no-default-export
export default function OrderForm({
  onSubmit,
  control,
}: IOrderFormProps): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const {
    getValues,
    setValue,
    formState: { errors },
  } = useFormContext<IFormInputs>();

  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <form onSubmit={void onSubmit} className={classes.wrapper}>
      <Typography className={classes.title}>Add New Product</Typography>
      <Divider />
      <Typography className={classes.title}>Delivery address</Typography>
      <Box className={classes.inputRow}>
        <Controller
          name="customerName"
          control={control}
          render={({ field }) => {
            return (
              <Input
                {...field}
                label={t('form.customerName')}
                error={Boolean(errors.customerName)}
              />
            );
          }}
        />
      </Box>

      <Box className={classes.inputRow}>
        <Controller
          name="deliveryAddress.addressSufix"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.adresssuffix')} />;
          }}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>{t('form.country')}</InputLabel>
          <Controller
            name="deliveryAddress.countryId"
            control={control}
            render={({ field }) => {
              return (
                <Select {...field} label={t('form.country')}>
                  <MenuItem value={0}>USA</MenuItem>
                  <MenuItem value={1}>Canada</MenuItem>
                </Select>
              );
            }}
          />
        </FormControl>
      </Box>

      <Box className={classes.inputRow}>
        <Controller
          name="deliveryAddress.street"
          control={control}
          render={({ field }) => {
            return (
              <Input
                {...field}
                label={t('form.street')}
                error={Boolean(errors.deliveryAddress?.street)}
              />
            );
          }}
        />
        <Controller
          name="deliveryAddress.houseNumber"
          control={control}
          render={({ field }) => {
            return (
              <Input
                {...field}
                label={t('form.houseNumber')}
                type="number"
                error={Boolean(errors.deliveryAddress?.houseNumber)}
              />
            );
          }}
        />
      </Box>

      <Box className={classes.inputRow}>
        <Controller
          name="deliveryAddress.zipCode"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.zipCode')} />;
          }}
        />
        <Controller
          name="deliveryAddress.place"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.place')} />;
          }}
        />
      </Box>

      <Divider className={classes.divider} />
      <Box className={classes.headerRow}>
        <Typography className={classes.title}>Order details</Typography>

        <Controller
          name="prioritizeOrder"
          control={control}
          render={({ field }) => {
            return (
              <FormControlLabel
                label={t('form.prioritizeOrder')}
                control={<Switch {...field} checked={field.value} />}
                labelPlacement="start"
              />
            );
          }}
        />
      </Box>
      <Box className={classes.inputRow}>
        <Controller
          name="dateOfDelivery"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.dateOfDelivery')} />;
          }}
        />
      </Box>
      <Box className={classes.inputRow}>
        <Controller
          name="comment"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.comment')} />;
          }}
        />
      </Box>
      <Divider />
      <Typography className={classes.title}>Shipping</Typography>
      <Box className={classes.inputRow}>
        <Controller
          name="shipment.shippingMethod"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.shippingMethod')} />;
          }}
        />
        <Controller
          name="shipment.incotermId"
          control={control}
          render={({ field }) => {
            return (
              <Input {...field} label={t('form.incotermId')} type="number" />
            );
          }}
        />
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.inputRow}>
        <Controller
          name="positions"
          control={control}
          render={({ field }) => {
            return (
              <DynamicValuesTable
                {...field}
                title="Components"
                buttonText="Add component"
                onAddRow={() => {
                  return setModalOpen(true);
                }}
                error={Boolean(errors.positions)}
              >
                <PositionsList
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
      <AddMaterialModal
        title={t('material.materialForm.componentTitle')}
        primaryActionLabel={t('material.materialForm.add')}
        open={modalOpen}
        materialTypes={[MaterialType.Product, MaterialType.ManufacturingPart]}
        onClose={() => {
          setModalOpen(false);
        }}
        onSave={(newPositions: IPosition[]) => {
          setValue('positions', [...getValues('positions'), ...newPositions]);
        }}
      />
      <Box />
    </form>
  );
}
