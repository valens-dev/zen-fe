import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    title: {
      paddingTop: '16px',
      paddingLeft: '16px',
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.5rem',
      lineHeight: 1.42,
      marginBottom: '16px',
      color: theme.palette.text.secondary,
    },
  };
});
