import { Box } from '@mui/material';

import { CustomersTable } from '@/components/customers/customers-table';

import { Header } from '@/layouts/header';

import { useStyles } from '../styles';

/* eslint-disable import/no-default-export */
export default function MaterialPage(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Header title="Customers" />
      <CustomersTable />
    </Box>
  );
}
