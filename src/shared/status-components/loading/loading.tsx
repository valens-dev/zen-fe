import { Box, CircularProgress } from '@mui/material';

import { useStyles } from '../style';

export function Loading(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.loadingContainer}>
      <CircularProgress />
    </Box>
  );
}
