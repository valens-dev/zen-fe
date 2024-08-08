import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    menuItem: {
      gap: '5px',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '40px',
      height: '40px',
      alignItems: 'center',
      gap: '8px',
      flex: '1',
      borderRadius: '50%',
    },
    image: {
      height: '100%',
      width: '100%',
      borderRadius: '50%',
    },
  };
});
