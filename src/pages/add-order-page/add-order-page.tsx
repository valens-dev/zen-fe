import { Box } from '@mui/material';

import { Header } from '@/layouts/header';

import { useStyles } from './styles';

/* eslint-disable import/no-default-export */
export default function AddOrderPage(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Header title="Add Order" />
    </Box>
  );
}
