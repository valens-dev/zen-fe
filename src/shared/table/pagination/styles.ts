import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    container: {
      marginTop: '16px',
    },
    pagination: {
      '.Mui-selected ': {
        color: theme.palette.white.primary,
        backgroundColor: theme.palette.background.primary,
      },
    },
  };
});
