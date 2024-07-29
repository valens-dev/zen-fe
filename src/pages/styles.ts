import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      color: theme.palette.text.primary,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      backgroundColor: theme.palette.light.secondary,
      marginTop: '12px',
      borderTopLeftRadius: '28px',
      minHeight: '100vh',
    },
    additionalPadding: {
      padding: '16px',
    },
  };
});
