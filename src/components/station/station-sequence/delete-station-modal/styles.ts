import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    boxContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'center',
    },
    textBox: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      alignItems: 'center',
    },
    text1: {
      width: '100%',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
      color: theme.palette.text.primary,
      lineHeight: 1.5,
      textAlign: 'center',
    },
    text2: {
      width: '100%',
      fontWeight: theme.typography.fontWeight.regular,
      fontSize: '0.875rem',
      color: theme.palette.main.primary,
      lineHeight: 1.5,
      textAlign: 'center',
    },
    deleteButton: {
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
      color: 'red',
      '&:hover': {
        backgroundColor: theme.palette.white.secondary,
      },
    },
    deleteIcon: {
      height: '40px',
      width: '40px',
      background: '#FEF3F2',
      '& svg path': {
        stroke: '#F04438',
      },
    },
    iconContainer: {
      height: '44px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',
      padding: '18px 22px 6px 0',
      '& .MuiIconButton-root': {
        padding: 0,
      },
    },
  };
});
