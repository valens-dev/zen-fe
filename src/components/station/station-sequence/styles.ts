import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    wrapper: {
      overflow: 'auto',
      width: '100%',
      height: '100vh',
    },
  };
});
