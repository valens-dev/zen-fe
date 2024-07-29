import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      backgroundColor: theme.palette.white.primary,
      borderTop: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      width: '70%',
    },
    title: {
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
      color: theme.palette.text.primary,
      lineHeight: 1.5,
      height: '56px',
      padding: '16px',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    inputRow: {
      padding: '0 16px',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '6px 0',
    },
    submitButton: {
      margin: '16px',
    },
  };
});
