import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    inputContainer: {
      width: '100%',
      color: theme.palette.main.primary,
      margin: '0 6px',
    },
    label: {
      fontSize: '12px',
      fontWeight: theme.typography.fontWeight.medium,
      lineHeight: 1,
      margin: '4px',
    },
    textField: {
      height: '40px',
      border: '1px solid #E2E8F0',
      borderRadius: '12px',
    },
  };
});
