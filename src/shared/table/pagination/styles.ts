import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '16px',
    },

    selectContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },

    select: {
      width: '64px',
      height: '32px',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '8px',

      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },

      '& .MuiSelect-select': {
        padding: '8px',
        fontSize: '0.875rem',
      },

      '& .MuiSelect-icon': {
        margin: '4px',
      },

      '&:hover': {
        backgroundColor: theme.palette.light.primary,
        border: `1px solid ${theme.palette.light.tertiary}`,
      },
    },

    pagination: {
      '& .MuiPaginationItem-root': {
        border: `1px solid ${theme.palette.border.primary}`,
        borderRadius: '6px',
        margin: '4px',

        '&:hover': {
          backgroundColor: theme.palette.light.primary,
          border: `1px solid ${theme.palette.light.tertiary}`,
        },
      },

      '& .MuiPaginationItem-page.Mui-selected': {
        backgroundColor: theme.palette.light.tertiary,
        color: theme.palette.white.primary,
        border: 'none',

        '&:hover': {
          backgroundColor: theme.palette.light.quaternary,
        },
      },
    },
  };
});
