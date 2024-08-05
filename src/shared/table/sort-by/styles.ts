import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    sortBy: {
      width: '30%',
      margin: '0 6px 16px 0',
      '& .MuiInputBase-root': {
        height: '40px',
        padding: '8px 12px',
        borderRadius: '12px',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.border.primary}`,
      },
      '& .MuiSelect-select': {
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        padding: 0,
      },
    },
    title: {
      fontSize: '1rem',
      fontWeight: theme.typography.fontWeight.regular,
      lineHeight: 1.5,
      color: theme.palette.main.primary,
    },
    '& .MuiPaper-root': {
      borderRadius: '12px',
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
