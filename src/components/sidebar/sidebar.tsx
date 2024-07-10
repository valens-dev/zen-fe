import { IconStyle } from '@/types/icon-style';
import { Box, Typography } from '@mui/material';
import Logo from '@/assets/icon/logo.svg?react';
import { NAV_LINKS } from '@/constants/navigation';
import { useNavigate, useLocation } from 'react-router-dom';

import { useStyles } from './styles';

export function Sidebar(): React.ReactNode {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box className={classes.sidebar}>
      <Box className={classes.logoContainer}>
        <Logo />
      </Box>
      {NAV_LINKS.map(({ icon: Icon, label, href, iconStyle }) => {
        const isActive = location.pathname.includes(href);
        const activeClass =
          iconStyle === IconStyle.Stroke
            ? classes.activeIconStroke
            : classes.activeIconFill;

        return (
          <Box
            key={`${label}_${href}`}
            className={cx(classes.navItem, {
              [classes.activeNavItem]: isActive,
            })}
            onClick={() => {
              navigate(href);
            }}
          >
            <Icon className={cx(classes.icon, { [activeClass]: isActive })} />
            <Typography
              className={cx(classes.navText, {
                [classes.activeNavText]: isActive,
              })}
            >
              {label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
