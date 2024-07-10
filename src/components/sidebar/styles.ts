import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    logoContainer: {
      marginBottom: '16px',
      marginTop: '8px',
    },
    sidebar: {
      width: '264px',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      backgroundColor: theme.palette.white.primary,
    },
    navItem: {
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      margin: '2px 0',
      borderRadius: '8px',
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
      marginLeft: '8px',
      fontSize: '14px',
      lineHeight: '20px',
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
