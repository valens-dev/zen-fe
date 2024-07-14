import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    button: {
      textTransform: 'none',
      color: theme.palette.white.primary,
    },
    primary: {
      backgroundColor: theme.palette.background.primary,
    },
  };
});
