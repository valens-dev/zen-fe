import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    containerBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: '30%',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      background: theme.palette.background.tertiary,
      marginTop: '16px',
    },
    header: {
      height: '56px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      gap: '8px',
    },
    title: {
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
      color: theme.palette.text.primary,
      lineHeight: 1.5,
    },
    button: {
      height: '32px',
      padding: '6px 8px',
      borderRadius: '8px',
      border: `1px solid ${theme.palette.border.primary}`,
      backgroundColor: theme.palette.white.primary,
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: theme.palette.white.secondary,
      },
    },
    buttonText: {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '0.875rem',
      lineHeight: 1.25,
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px 16px 16px 16px',
      gap: '8px',
    },
    chartBox: {
      flexGrow: 1,
      position: 'relative',
      '& .css-172kpif-MuiResponsiveChart-container': {
        height: '200px',
      },
    },
    textBox: {
      position: 'absolute',
      top: '47%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    chartCount: {
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    infoContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
    },
    category: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      backgroundColor: 'white',
      padding: '8px 12px',
      width: '100%',
    },
    categoryContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: '50%',
    },
    employeeCount: {
      fontSize: '1.25rem',
      lineHeigt: 1.5,
      fontWeight: theme.typography.fontWeight.semiBold,
    },
    text: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
    },
    employeeText: {
      fontSize: '0.75rem',
      lineHeigt: 1,
      fontWeight: theme.typography.fontWeight.regular,
      color: theme.palette.main.primary,
    },
    employeeRole: {
      fontSize: '0.875rem',
      lineHeigt: 1.25,
      fontWeight: theme.typography.fontWeight.regular,
      color: theme.palette.text.primary,
    },
    stack: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '150px',
      textAlign: 'center',
    },
  };
});
