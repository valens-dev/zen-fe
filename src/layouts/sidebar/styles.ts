import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    logoContainer: {
      marginBottom: '16px',
      marginTop: '8px',
    },
    sidebar: {
      width: '22.45%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      backgroundColor: theme.palette.white.primary,
    },
  };
});
