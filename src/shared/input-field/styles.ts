import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    inputContainer: {
      height: '60px',
      width: 'auto',
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
      padding: '8px 12px',
      borderRadius: '12px',
    },
  };
});
