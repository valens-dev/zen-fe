import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    searchBar: {
      width: '100%',
      marginBottom: '16px',
      '& .MuiInputBase-root': {
        height: '40px',
        borderRadius: '12px',
        padding: '8px 12px',
        borderStyle: 'none',
        border: `1px solid ${theme.palette.border.primary}`,
        '&:hover': {
          borderColor: theme.palette.border.secondary,
        },
        '&.Mui-focused': {
          borderColor: theme.palette.border.tertiary,
        },
      },
    },
  };
});
