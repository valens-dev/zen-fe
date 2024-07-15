import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    title: {
      paddingTop: '32px',
      paddingLeft: '32px',
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.5rem',
      lineHeight: 2.28,
      marginBottom: '16px',
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
      '&:hover': {
        color: theme.palette.text.primary,
      },
    },
    tabSelected: {
      '&.Mui-selected': {
        color: theme.palette.text.primary,
      },
    },
    line: {
      width: '100%',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      marginTop: '-1px',
      margin: '0 16px',
    },
    tabContent: {
      width: '100%',
    },
    tabIndicator: {
      backgroundColor: theme.palette.text.primary,
    },
  };
});
