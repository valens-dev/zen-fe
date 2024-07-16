import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 0',
      alignItems: 'center',
    },
    title: {
      fontWeight: theme.typography.fontWeight.semiBold,
      color: theme.palette.text.secondary,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
  };
});
