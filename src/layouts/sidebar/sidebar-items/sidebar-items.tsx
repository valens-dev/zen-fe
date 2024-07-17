import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { IconStyle } from '@/types/icon';

import { SIDEBAR_ITEMS } from './constants';

import { useStyles } from './styles';

export function SidebarItems(): React.ReactNode {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

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
      {SIDEBAR_ITEMS.map(({ icon: Icon, label, href, iconStyle }) => {
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
              {t(label)}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
