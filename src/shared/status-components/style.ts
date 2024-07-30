import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    loadingContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '70vh',
    },
    errorText: {
      color: theme.palette.error.primary,
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.5rem',
      lineHeight: 1.42,
    },
  };
});
