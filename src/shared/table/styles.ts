import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      width: '100%',
      padding: '16px',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      background: theme.palette.white.primary,
    },
    baseTable: {
      width: '100%',
      padding: '16px',
      borderRadius: '16px',
      overflow: 'hidden',
    },
    tableContainer: {
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
    },
    headerRow: {
      height: '40px',
      backgroundColor: theme.palette.light.secondary,
      borderRadius: '0',
    },
    tableFooter: {
      width: '100%',
      display: 'block',
    },
    tablePagination: {
      width: '100%',
      display: 'block',
      border: 'none',
    },
  };
});
