import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    containerBox: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px',
      backgroundColor: 'white',
      width: '50%',
    },
    baseBox: {
      width: '100%',
      maxWidth: 360,
      borderRadius: '16px',
      padding: '16px',
      textAlign: 'center',
      backgroundColor: 'white',
    },
    title: {
      marginBottom: '8px',
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
    },
    category: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '12px',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      marginRight: '12px',
    },
    employeeCount: {
      marginLeft: 'auto',
    },
    actionsContainer: {
      marginTop: '12px',
      display: 'flex',
      justifyContent: 'center',
    },
  };
});
