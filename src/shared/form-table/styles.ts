import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      width: '100%',
    },
    title: {
      marginBottom: '8px',
    },
    addButton: {
      marginTop: '16px',
    },
    tableHead: {
      background: theme.palette.light.secondary,
    },
    headTableRow: {
      padding: '8px 8px 8px 16px',
    },
    deleteIcon: {
      width: '100%',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
    },
  };
});
