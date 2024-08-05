import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: `1px solid ${theme.palette.border.primary}`,
      backgroundColor: theme.palette.white.primary,
      borderRadius: '16px',
    },
    header: {
      width: '100%',
      height: '56px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      gap: '8px',
    },
    title: {
      width: '100%',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
      color: theme.palette.text.primary,
      lineHeight: 1.5,
      textAlign: 'left',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    footer: {
      padding: '12px 16px',
      gap: '12px',
    },
    primary: {
      display: 'flex',
    },
    secondary: {
      display: 'flex',
      width: '50%',
      marginLeft: 'auto',
    },
    addButton: {
      width: '100%',
      height: '40px',
      borderRadius: '12px',
      padding: '8px 16px',
      textTransform: 'none',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '0.875rem',
      lineHeight: 1.25,
      backgroundColor: theme.palette.light.tertiary,
      color: theme.palette.white.primary,
      '&:hover': {
        backgroundColor: theme.palette.background.primary,
      },
    },
    cancelButton: {
      width: '100%',
      height: '40px',
      borderRadius: '12px',
      padding: '8px 16px',
      textTransform: 'none',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '0.875rem',
      lineHeight: 1.25,
      border: `1px solid ${theme.palette.border.primary}`,
      backgroundColor: theme.palette.white.primary,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.white.secondary,
      },
    },
    primaryButton: {
      width: '100%',
      height: '40px',
      borderRadius: '12px',
      padding: '8px 16px',
      textTransform: 'none',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '0.875rem',
      lineHeight: 1.25,
    },
  };
});
