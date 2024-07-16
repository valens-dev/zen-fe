import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: '24px 32px 0 32px',
      width: '100%',
    },
    title: {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.5rem',
    },
  };
});
