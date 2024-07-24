import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    tableContainer: {
      background: theme.palette.white.primary,
      padding: '16px',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
    },

    baseTable: {
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      borderCollapse: 'separate',
      overflow: 'hidden',

      '& tr:last-of-type td': {
        borderBottom: 'none',
      },
    },

    tableHead: {
      backgroundColor: theme.palette.light.secondary,
    },
  };
});
