import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      backgroundColor: theme.palette.white.primary,
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      padding: '24px',
      gap: '16px',
      margin: '16px auto 0 auto',
    },
    headerBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    title: {
      width: '100%',
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.25rem',
      color: theme.palette.text.primary,
      lineHeight: 1.5,
      textAlign: 'center',
    },
    subtitle: {
      width: '100%',
      fontWeight: theme.typography.fontWeight.regular,
      fontSize: '0.875rem',
      color: theme.palette.main.primary,
      lineHeight: 1.25,
      textAlign: 'center',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      border: 'none',
      gap: '16px',
    },
    inputRow: {
      width: '100%',
      '& .MuiBox-root': {
        margin: '0px',
      },
    },
    forgotPassword: {
      textAlign: 'right',
      marginTop: '12px',
      fontSize: '0.875rem',
      fontWeight: theme.typography.fontWeight.regular,
      lineHeight: 1.25,
      color: theme.palette.light.tertiary,
    },
    submitButton: {
      width: '100%',
      height: '40px',
      padding: '8px 12px 8px 12px',
      backgroundColor: theme.palette.light.tertiary,
      color: theme.palette.white.primary,
      borderRadius: '12px',
      fontSize: '0.875rem',
      lineHeight: 1.25,
      fontWeight: theme.typography.fontWeight.regular,
      textAlign: 'center',
      border: 'none',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: theme.palette.light.quaternary,
      },
    },
  };
});
