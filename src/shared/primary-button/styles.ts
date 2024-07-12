import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    button: {
      backgroundColor: theme.palette.text.primary,
      height: '40px',
      padding: '8px 16px 8px 8px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      '&:hover': {
        backgroundColor: theme.palette.background.primary,
      },
    },
  };
});
