import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';

/* eslint-disable import/no-default-export */
export default function MaterialPage(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h3">Material page</Typography>
    </Box>
  );
}
