import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';

export function Product(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h3">Product</Typography>
    </Box>
  );
}
