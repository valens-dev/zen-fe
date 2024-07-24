import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    search: {
      width: '100%',
      marginBottom: '16px',

      '& .MuiInputBase-root': {
        height: '40px',
        padding: '8px 12px',
        borderRadius: '12px',
      },

      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.border.primary}`,
      },
    },
  };
});
