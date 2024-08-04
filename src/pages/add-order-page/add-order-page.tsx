import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import type * as yup from 'yup';
import { useCreateOrder } from '@/services/order';
import { yupResolver } from '@hookform/resolvers/yup';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';

import OrderForm from '@/components/order/order-form/order-form';
import { orderFormSchema } from '@/components/validation/order-form';
import { type IFormInputs } from '@/components/order/order-form/types';
import { initialValues } from '@/components/order/order-form/constants';

import { Header } from '@/layouts/header';
import { FormHeader } from '@/layouts/form-header';

import { type IOrder } from '@/types/order';

import AddIcon from '@/assets/icon/add.svg?react';

import { useStyles } from '../styles';

import { transformProductsToPositions } from './utils';

// eslint-disable-next-line import/no-default-export
export default function AddOrderPage(): React.ReactNode {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const methods = useForm<IFormInputs>({
    defaultValues: initialValues,
    resolver: yupResolver(orderFormSchema as yup.ObjectSchema<IFormInputs>),
  });
  const { control, handleSubmit } = methods;

  const { mutate: createOrder } = useCreateOrder();

  function onSubmit(data: IFormInputs): void {
    const { positions, ...filteredData } = data;
    const positionsData = transformProductsToPositions(positions);

    createOrder({ ...filteredData, positions: positionsData } as IOrder, {
      onSuccess: () => {
        // Handle successful order creation, e.g., navigate to the orders list
        navigate('/orders');
      },
      onError: () => {
        // Handle error during order creation
      },
    });
  }

  function handleSaveOrder(): void {
    void handleSubmit(onSubmit)();
  }

  return (
    <Box className={classes.wrapper}>
      <Header title={t('order.addOrder')} />
      <FormHeader
        path="Orders > Orders > Create new order"
        actions={
          <Box>
            <Button
              onClick={() => {
                return navigate('/orders');
              }}
              variant="secondary"
            >
              Discard
            </Button>
            <Button
              onClick={() => {
                return handleSaveOrder();
              }}
              startIcon={<AddIcon />}
              sx={{ ml: 1 }}
            >
              Save Order
            </Button>
          </Box>
        }
      />
      <FormProvider {...methods}>
        <OrderForm control={control} onSubmit={handleSubmit(onSubmit)} />
      </FormProvider>
    </Box>
  );
}
