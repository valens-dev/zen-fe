import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';

export default function StationPage(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h3">Station page</Typography>
    </Box>
  );
}
