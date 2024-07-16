import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    button: {
      textTransform: 'none',
      color: theme.palette.white.primary,
      borderRadius: '12px',
      height: '40px',
      padding: '0 16px 0 8px',
    },
    primary: {
      backgroundColor: theme.palette.light.tertiary,
      '&:hover': {
        backgroundColor: theme.palette.background.primary,
      },
    },
  };
});
