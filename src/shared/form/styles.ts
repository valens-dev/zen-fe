import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      margin: '16px',
      padding: '16px',
      backgroundColor: theme.palette.white.primary,
      borderTop: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
    },
    title: {
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
      color: theme.palette.text.primary,
      lineHeight: 1.5,
      height: '56px',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    componentContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2,
    },
    submitButton: {
      margin: '16px',
    },
  };
});
