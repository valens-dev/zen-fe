import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height: '40px',
      padding: '8px 16px 8px 8px',
      borderRadius: '12px',
    },
    primary: {
      backgroundColor: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.background.primary,
      },
    },
  };
});
