import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    button: {
      textTransform: 'none',
      color: theme.palette.white.primary,
      borderRadius: '12px',
      height: '40px',
      padding: '0 16px 0 8px',
      '&:hover': {
        backgroundColor: theme.palette.background.primary,
      },
      width: 'auto',
    },
    primary: {
      backgroundColor: theme.palette.text.primary,
    },
  };
});
