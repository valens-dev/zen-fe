import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    baseTable: {
      width: '100%',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      overflow: 'hidden',
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
