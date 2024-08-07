import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    containerBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white',
      width: '50%',
      //gap: '8px',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      background: theme.palette.background.tertiary,
      marginTop: '16px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 12px',
      gap: '8px',
    },
    title: {
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
      color: theme.palette.text.primary,
      lineHeight: 1.5,
      textAlign: 'center',
    },
    divider: {
      marginBottom: '8px',
    },
    baseBox: {
      width: '100%',
      maxWidth: 360,
      borderRadius: '16px',
      padding: '16px',
      textAlign: 'center',
      backgroundColor: 'white',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    circularProgress: {
      position: 'relative',
      display: 'inline-flex',
    },
    circleLabel: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoContainer: {
      marginTop: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    category: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '12px',
    },
    categoryContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      //marginRight: '12px',
    },
    employeeCount: {
      marginLeft: 'auto',
    },
  };
});
