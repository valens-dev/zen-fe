import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';

import OrderForm from '@/components/order/order-form/order-form';
import { type IFormInputs } from '@/components/order/order-form/types';
import { initialValues } from '@/components/order/order-form/constants';

import { Header } from '@/layouts/header';
import { FormHeader } from '@/layouts/form-header';

import AddIcon from '@/assets/icon/add.svg?react';

import { useStyles } from '../styles';

// eslint-disable-next-line import/no-default-export
export default function AddOrderPage(): React.ReactNode {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { classes } = useStyles();
  const methods = useForm<IFormInputs>({
    defaultValues: initialValues,
  });
  const { control, handleSubmit } = methods;

  function onSubmit(data: IFormInputs): void {
    // eslint-disable-next-line no-console
    console.log(data);
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
              onClick={void handleSubmit(onSubmit)}
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
