import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import i18n from 'i18n';

import { Box, Typography } from '@mui/material';

import { IconStyle } from '@/types/icon';

import { getSidebarItems } from './constants';

import { useStyles } from './styles';

export function SidebarItems(): JSX.Element {
  const { classes, cx } = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarItems, setSidebarItems] = useState(getSidebarItems());

  useEffect(() => {
    function handleLanguageChange(): void {
      setSidebarItems(getSidebarItems());
    }

    i18n.on('languageChanged', handleLanguageChange);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

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
      {sidebarItems.map(({ icon: Icon, label, href, iconStyle }) => {
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
