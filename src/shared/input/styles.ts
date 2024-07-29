import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    inputContainer: {
      width: '100%',
      color: theme.palette.main.primary,
      margin: '0 6px',
    },
    label: {
      fontSize: '0.75rem',
      fontWeight: theme.typography.fontWeight.medium,
      lineHeight: 1,
      marginBottom: '4px',
    },
    textField: {
      height: '40px',
      borderRadius: '12px',
      '& .MuiOutlinedInput-notchedOutline': {
        border: `1px solid ${theme.palette.border.primary}`,
      },
      '& .MuiOutlinedInput-input': {
        padding: '0px 12px 0px 12px',
        height: '40px',
        width: '100%',
        color: theme.palette.main.primary,
        '&:hover': {
          backgroundColor: theme.palette.light.secondary,
          borderRadius: '14px',
        },
      },
    },
  };
});
