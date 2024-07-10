/* eslint-disable import/no-default-export */
import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';

export default function HomePage(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h3">Home page</Typography>
    </Box>
  );
}
