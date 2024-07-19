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
    tabs: {
      marginBottom: '0px',
      paddingLeft: '15px',
    },
    tab: {
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '0.875rem',
      lineHeight: 1.42,
      color: theme.palette.main.primary,
      textTransform: 'none',
      padding: '12px 8px',
    },
    tabSelected: {
      color: theme.palette.light.tertiary,
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
