import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      backgroundColor: theme.palette.white.primary,
      borderTop: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      width: '70%',
    },
    title: {
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
      color: theme.palette.text.primary,
      lineHeight: 1.5,
      height: '56px',
      padding: '16px',
    },
    inputRow: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 16px',
      margin: '12px 0',
    },
    divider: {
      margin: '16px 0 0 0',
    },
    headerRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px 0 0',
    },
  };
});
