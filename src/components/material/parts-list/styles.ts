import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    wrapper: {
      width: '100%',
      marginTop: '16px',
    },
    title: {
      marginBottom: '8px',
    },
    addButton: {
      marginTop: '16px',
    },
  };
});
