import { Box } from '@mui/material';

import { NavigationLinks } from '@/components/navigation-links';

import Logo from '@/assets/icon/logo.svg?react';

import { useStyles } from './styles';

export function Sidebar(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.sidebar}>
      <Box className={classes.logoContainer}>
        <Logo />
      </Box>
      <NavigationLinks />
    </Box>
  );
}
