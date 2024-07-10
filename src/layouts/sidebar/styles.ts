import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    logoContainer: {
      marginBottom: '1rem',
      marginTop: '0.5rem',
    },
    sidebar: {
      width: '22.45%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      backgroundColor: theme.palette.white.primary,
    },
  };
});
