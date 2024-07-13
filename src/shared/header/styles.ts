import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '24px 32px 0 32px',
      width: '100%',
    },
    title: {
      fontSize: '1.5rem',
    },
    languageButtons: {
      marginLeft: 'auto',
    },
    button: {
      margin: '0 5px',
    },
  };
});
