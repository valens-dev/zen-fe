import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { CustomerTable } from '@/components/customer/customer-table';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

/* eslint-disable import/no-default-export */
export default function CustomerPage(): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();

  return (
    <Box className={`${classes.wrapper} ${classes.additionalPadding}`}>
      <Header title={t('customer.title')} />
      <CustomerTable />
    </Box>
  );
}
