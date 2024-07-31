import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import OrderForm from '@/components/order/order-form/order-form';
import { type IFormInputs } from '@/components/order/order-form/types';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

// eslint-disable-next-line import/no-default-export
export default function AddOrderPage(): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();
  const { control, handleSubmit } = useForm<IFormInputs>();

  function onSubmit(data: IFormInputs): void {
    // eslint-disable-next-line no-console
    console.log(data);
  }

  return (
    <Box className={classes.wrapper}>
      <Header title={t('order.addOrder')} />
      <OrderForm control={control} onSubmit={handleSubmit(onSubmit)} />
    </Box>
  );
}
