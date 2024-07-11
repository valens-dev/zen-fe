import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    title: {
      paddingTop: '32px',
      paddingLeft: '32px',
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.5rem',
      lineHeight: '32px',
      marginBottom: '16px',
    },
    tabs: {
      marginBottom: '0px',
      paddingLeft: '15px',
    },
    tab: {
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '0.875rem',
      lineHeight: '20px',
      color: theme.palette.main.primary,
      textTransform: 'none',
      padding: '12px 8px',
    },
    tabSelected: {
      color: theme.palette.text.primary,
    },
    line: {
      width: '100%',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      margin: '0 16px',
    },
    tabContent: {
      marginTop: '16px',
      width: '100%',
    },
  };
});
