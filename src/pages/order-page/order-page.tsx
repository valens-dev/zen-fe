import { Box } from '@mui/material';

import { Header } from '@/shared/header';

import { useStyles } from './styles';

/* eslint-disable import/no-default-export */
export default function OrderPage(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Header title="Order" />
    </Box>
  );
}
