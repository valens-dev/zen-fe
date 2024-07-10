import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    navItem: {
      height: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      padding: '0.625rem',
      margin: '0.125rem 0',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.white.secondary,
      },
      '&:active': {
        backgroundColor: theme.palette.white.tertiary,
      },
    },
    navText: {
      color: theme.palette.main.primary,
      fontWeight: theme.typography.fontWeight.medium,
      marginLeft: '0.5rem',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    icon: {
      width: '1.25rem',
      height: '1.25rem',
    },
    activeNavItem: {
      backgroundColor: theme.palette.light.primary,
    },
    activeNavText: {
      color: theme.palette.text.primary,
    },
    activeIconStroke: {
      '& path': {
        stroke: theme.palette.text.primary,
      },
    },
    activeIconFill: {
      '& path': {
        fill: theme.palette.text.primary,
      },
    },
  };
});
