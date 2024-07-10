import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useStyles } from './styles';
import { IconStyle } from '@/types/icon-style';
import Logo from '@/assets/icon/logo.svg?react';
import { NAV_LINKS } from '@/constants/navigation';

export const Sidebar: React.FC = () => {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box className={classes.sidebar}>
      <Box className={classes.logoContainer}>
        <Logo />
      </Box>
      {NAV_LINKS.map(({ icon: Icon, label, href, iconStyle }, i) => {
        const isActive = location.pathname.includes(href);
        const activeClass = iconStyle === IconStyle.Stroke ? classes.activeIconStroke : classes.activeIconFill;

        return (
          <Box
            key={`${label}_${i}`}
            className={cx(classes.navItem, { [classes.activeNavItem]: isActive })}
            onClick={() => navigate(href)}
          >
            <Icon className={cx(classes.icon, { [activeClass]: isActive })} />
            <Typography className={cx(classes.navText, { [classes.activeNavText]: isActive })}>
              {label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
