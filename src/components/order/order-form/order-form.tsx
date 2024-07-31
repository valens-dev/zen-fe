import { useTranslation } from 'react-i18next';
import { Controller, type Control } from 'react-hook-form';

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

import { type IFormInputs } from './types';

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

  //const { fields } = useFieldArray({
  // control,
  //  name: 'positions',
  // });

  return (
    <form onSubmit={void onSubmit} className={classes.wrapper}>
      <Typography className={classes.title}>Add New Product</Typography>
      <Divider />
      <Typography className={classes.title}>Delivery address</Typography>
      <Box className={classes.inputRow}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.customerName')} />;
          }}
        />
      </Box>

      <Box className={classes.inputRow}>
        <Controller
          name="street"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.street')} />;
          }}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>{t('form.country')}</InputLabel>
          <Controller
            name="countryId"
            control={control}
            render={({ field }) => {
              return (
                <Select {...field} label={t('form.country')}>
                  <MenuItem value={0}>USA</MenuItem>
                  <MenuItem value={1}>Canada</MenuItem>
                  {/* Add more countries as needed */}
                </Select>
              );
            }}
          />
        </FormControl>
      </Box>

      <Box className={classes.inputRow}>
        <Controller
          name="houseNumber"
          control={control}
          render={({ field }) => {
            return (
              <Input {...field} label={t('form.houseNumber')} type="number" />
            );
          }}
        />
      </Box>

      <Box className={classes.inputRow}>
        <Controller
          name="zipCode"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.zipCode')} />;
          }}
        />
        <Controller
          name="place"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.place')} />;
          }}
        />
      </Box>

      <Divider className={classes.divider} />
      <Box className={classes.headerRow}>
        <Typography className={classes.title}>Delivery address</Typography>

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
      <Box className={classes.inputRow}>
        <Controller
          name="shippingMethod"
          control={control}
          render={({ field }) => {
            return <Input {...field} label={t('form.shippingMethod')} />;
          }}
        />
        <Controller
          name="incotermId"
          control={control}
          render={({ field }) => {
            return (
              <Input {...field} label={t('form.incotermId')} type="number" />
            );
          }}
        />
      </Box>
      <Divider className={classes.divider} />

      <Box />
    </form>
  );
}
