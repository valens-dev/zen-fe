import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    box: {
      padding: '16px',
    },
    checkRow: {
      width: '100%',
      margin: 0,
      height: '40px',
      padding: '8px 12px',
      gap: '8px',
      '& .MuiTypography-root': {
        fontWeight: theme.typography.fontWeight.medium,
        fontSize: '0.875rem',
        lineHeight: 1.25,
        color: theme.palette.main.primary,
      },
      '& .MuiCheckbox-root': {
        padding: '0px',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: 'none',
        },
        '&.Mui-checked': {
          color: theme.palette.light.tertiary,
        },
      },
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
  };
});
