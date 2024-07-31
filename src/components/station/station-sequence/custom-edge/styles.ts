import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    iconButton: {
      background: theme.palette.white.primary,
      border: `1px solid ${theme.palette.border.primary}`,
      '&:hover': {
        background: theme.palette.white.secondary,
      },
    },
  };
});
