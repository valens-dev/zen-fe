import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '1.5rem',
    },
    theTitle: {
      fontSize: '1.5rem',
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      gap: '1%',
    },
    leftBoxes: {
      width: '48%',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '130px',
      backgroundColor: theme.palette.white.primary,
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      padding: '24px',
      gap: '2%',
      margin: '16px auto 0 auto',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > div': {
        display: 'flex',
        fontSize: '1.5rem',
        alignItems: 'center',
        justifyItems: 'baseline',
        flexDirection: 'row',
        gap: '10px',
      },
      '&:hover': {
        backgroundColor: theme.palette.white.secondary,
      },
    },
    theIconGear: {
      width: '64px',
      height: '64px',
    },
    theIconArrow: {
      width: '32px',
      height: '32px',
    },
    rightBoxes: {
      width: '48%',
    },
    pinboardWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: theme.palette.error.secondary,
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      padding: '24px',
      gap: '5px',
      margin: '16px auto 0 auto',
    },
    anonymoousWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: theme.palette.white.secondary,
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      padding: '24px',
      gap: '16px',
      margin: '16px auto 0 auto',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      border: 'none',
      gap: '16px',
    },
    inputRow1: {
      width: '100%',
      '& .MuiBox-root': {
        margin: '0px',
        '& .MuiFormControl-root': {
          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.white.primary,
            height: '48px',
          },
        },
      },
    },
    inputRow2: {
      width: '100%',
      '& .MuiBox-root': {
        margin: '0px',
        '& .MuiFormControl-root': {
          '& .MuiInputBase-root': {
            backgroundColor: theme.palette.white.primary,
            height: '144px',
            alignItems: 'baseline',
          },
        },
      },
    },
    btnSend: {
      backgroundColor: theme.palette.white.primary,
      borderRadius: '12px',
      gap: '5px',
      width: '100%',
      height: '40px',
      padding: '8px 12px 8px 12px',
      color: theme.palette.white.primary,
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
    btnText: {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeight.medium,
      color: 'black',
      lineHeight: 1.25,
    },
  };
});
