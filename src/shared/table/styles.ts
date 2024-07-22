import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    tableContainer: {
      width: '100%',
      padding: '16px',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      background: theme.palette.white.primary,
    },
    tableWrapper: {
      width: '100%',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
    },
    baseTable: {
      width: '100%',
      padding: '16px',
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
      display: 'grid',
    },
    tablePagination: {
      width: '100%',
      display: 'grid',
      border: 'none',
      padding: '0px',
    },
    headerCell: {
      color: theme.palette.main.primary,
    },
    bodyCell: {
      color: theme.palette.text.primary,
    },
  };
});
