import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    navItem: {
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      margin: '2px 0',
      borderRadius: '8px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.light.secondary,
      },
      '&:active': {
        backgroundColor: theme.palette.white.tertiary,
      },
    },
    navText: {
      color: theme.palette.main.primary,
      fontWeight: theme.typography.fontWeight.medium,
      marginLeft: '8px',
      fontSize: '0.875rem',
      lineHeight: 1.42,
    },
    icon: {
      width: '20px',
      height: '20px',
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
