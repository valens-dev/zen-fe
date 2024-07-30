import { Box, Typography } from '@mui/material';

import { useStyles } from '../style';

export function Error(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.loadingContainer}>
      <Typography className={classes.errorText}>Error loading data</Typography>
    </Box>
  );
}
