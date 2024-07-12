import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      color: theme.palette.main.primary,
      height: '100%',
      margin: '0 16px 16px 16px',
    },
  };
});
