import type React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/sidebar';

import { useStyles } from './styles';

export function SidebarLayout(): React.ReactNode {
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
