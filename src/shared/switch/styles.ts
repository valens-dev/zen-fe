import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    formControlLabel: {
      '& .MuiFormControlLabel-label': {
        lineHeight: 1.67,
        fontSize: '0.875rem',
        fontWeight: theme.typography.fontWeight.light,
        color: theme.palette.text.primary,
      },
    },
  };
});
