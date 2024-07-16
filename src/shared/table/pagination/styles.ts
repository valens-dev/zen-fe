import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    container: {
      marginTop: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: theme.palette.main.primary,
    },
    pagination: {
      '& .MuiPaginationItem-root': {
        borderRadius: '6px',
        margin: '4px',
      },
      '.Mui-selected ': {
        color: theme.palette.white.primary,
        backgroundColor: theme.palette.light.tertiary,
      },
    },
    selectContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    select: {
      height: '32px',
      borderRadius: '8px',
      padding: '6px, 8px, 6px, 8px',
      color: theme.palette.main.primary,
    },
  };
});
