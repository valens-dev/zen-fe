import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      color: theme.palette.main.primary,
      margin: '0 16px 16px 16px',
    },
    tableContainer: {
      border: `1px solid ${theme.palette.border.primary}`,
      background: theme.palette.white.primary,
      padding: '16px',
      borderRadius: '12px',
    },
  };
});
