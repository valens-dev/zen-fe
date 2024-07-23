import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    sortBy: {
      width: '30%',
      margin: '0 6px 16px 0',
      borderRadius: '12px',
    },
    select: {
      height: '40px',
      color: theme.palette.main.primary,
      borderRadius: '12px',
      '.MuiSelect-select': {
        height: '40px',
        display: 'flex',
        alignItems: 'center',
      },
    },
    title: {
      fontSize: '1rem',
      fontWeight: theme.typography.fontWeight.medium,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 16px',
    },
    listSubheader: {
      height: '40px',
      padding: '0 20px',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
    },
    iconContainer: {
      width: 20,
      textAlign: 'center',
    },
    itemLabel: {
      flex: 1,
    },
    clearButton: {
      color: theme.palette.light.tertiary,
      textTransform: 'none',
      padding: 0,
      minWidth: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
      },
    },
  };
});
