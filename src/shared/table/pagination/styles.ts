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
        border: `1px solid ${theme.palette.border.primary}`,
        backgroundColor: theme.palette.white.primary,
        '&:hover': {
          backgroundColor: theme.palette.light.primary,
          border: `1px solid ${theme.palette.light.tertiary}`,
        },
        fontSize: '0.875rem',
      },
      '& .MuiPaginationItem-page.Mui-selected': {
        color: theme.palette.white.primary,
        backgroundColor: theme.palette.light.tertiary,
        border: 'none',
        '&:hover': {
          backgroundColor: theme.palette.light.quaternary,
        },
      },
    },
    selectContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    select: {
      height: '32px',
      width: '64px',
      borderRadius: '8px',
      border: `1px solid ${theme.palette.border.primary}`,
      color: theme.palette.main.primary,
      '&:hover': {
        backgroundColor: theme.palette.light.primary,
        border: `1px solid ${theme.palette.light.tertiary}`,
      },
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '& .MuiSelect-icon': {
        margin: '4px',
      },
      '& .MuiSelect-select': {
        fontWeight: theme.typography.fontWeight.regular,
        fontSize: '14px',
        color: theme.palette.main.primary,
        padding: '6px 8px',
      },
    },
  };
});
