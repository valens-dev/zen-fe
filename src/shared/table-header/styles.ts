import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    headerContainer: {
      height: '40px',
      margin: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '20px',
      lineHeight: '24px',
      color: theme.palette.text.secondary,
      textAlign: 'left',
    },
    buttonText: {
      color: theme.palette.white.primary,
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '0.875rem',
      lineHeight: '20px',
      textTransform: 'none',
    },
    button: {
      marginLeft: 'auto',
    },
  };
});
