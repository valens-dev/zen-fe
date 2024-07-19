import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      color: theme.palette.main.primary,
      height: '100%',
      width: '100%',
    },
  };
});
