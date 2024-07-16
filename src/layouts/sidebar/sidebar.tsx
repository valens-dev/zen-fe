import { Box } from '@mui/material';

import Logo from '@/assets/icon/logo.svg?react';

import { SidebarItems } from './sidebar-items';

import { useStyles } from './styles';

export function Sidebar(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.sidebar}>
      <Box className={classes.logoContainer}>
        <Logo />
      </Box>
      <SidebarItems />
    </Box>
  );
}
