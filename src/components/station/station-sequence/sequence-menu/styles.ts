import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    menu: {
      '& .MuiPaper-root': {
        borderRadius: '12px',
      },
    },
    menuItem: {
      display: 'flex',
      flexDirection: 'row',
      padding: '7px',
      width: '180px',
    },
    delete: {
      color: theme.palette.error.primary,
      '& path': {
        stroke: theme.palette.error.primary,
      },
    },
    iconContainer: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px 0 12px',
    },
  };
});
