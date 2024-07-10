import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/layouts/sidebar/sidebar';

import { useStyles } from './styles';

export function RootLayout(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.root}>
      <Sidebar />
      <Box className={classes.content}>
        <Outlet />
      </Box>
    </Box>
  );
}
