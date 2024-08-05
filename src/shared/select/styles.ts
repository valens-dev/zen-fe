import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    inputContainer: {
      width: '100%',
      color: theme.palette.main.primary,
      margin: '0 6px',
    },
    label: {
      fontSize: '0.75rem',
      fontWeight: theme.typography.fontWeight.medium,
      lineHeight: 1,
      marginBottom: '4px',
    },
  };
});
