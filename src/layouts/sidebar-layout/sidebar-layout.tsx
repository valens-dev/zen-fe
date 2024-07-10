import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Sidebar } from '@/components/sidebar';
import { useStyles } from './styles';

export const SidebarLayout: React.FC = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Sidebar />
      <Box className={classes.content}>
        <Outlet />
      </Box>
    </Box>
  );
};
