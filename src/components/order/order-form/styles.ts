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
    select: {
      color: theme.palette.main.primary,
      margin: '0',
      padding: '0',
      width: '100%',
      height: '40px',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '12px',
    },
    label: {
      fontSize: '0.75rem',
      fontWeight: theme.typography.fontWeight.medium,
      lineHeight: 1,
      marginBottom: '4px',
    },
  };
});
