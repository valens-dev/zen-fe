import { IconStyle } from '@/types/icon';
import { Box, Typography } from '@mui/material';
import { NAV_LINKS } from '@/constants/navigation';
import { useNavigate, useLocation } from 'react-router-dom';

import { useStyles } from './styles';

export function NavigationLinks(): React.ReactNode {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  function isLinkActive(href: string): boolean {
    return location.pathname.includes(href);
  }

  function getActiveClass(iconStyle: IconStyle): string {
    return iconStyle === IconStyle.Stroke
      ? classes.activeIconStroke
      : classes.activeIconFill;
  }

  return (
    <Box>
      {NAV_LINKS.map(({ icon: Icon, label, href, iconStyle }) => {
        const isActive = isLinkActive(href);
        const activeClass = getActiveClass(iconStyle);

        return (
          <Box
            key={href}
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
