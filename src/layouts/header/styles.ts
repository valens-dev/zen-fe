import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      width: '100%',
    },
    title: {
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.5rem',
      lineHeight: 1.42,
      color: theme.palette.text.secondary,
    },
  };
});
