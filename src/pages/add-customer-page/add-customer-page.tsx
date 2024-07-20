import { useTranslation } from 'react-i18next';

import { Box } from '@mui/material';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

/* eslint-disable import/no-default-export */
export default function AddMaterialPage(): React.ReactNode {
  const { t } = useTranslation();
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Header title={t('customer.addCustomer')} />
    </Box>
  );
}
