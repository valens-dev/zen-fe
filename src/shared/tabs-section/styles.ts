import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      width: '100%',
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
        color: theme.palette.light.tertiary,
      },
    },
    tabSelected: {
      '&.Mui-selected': {
        color: theme.palette.light.tertiary,
      },
      '& svg path': {
        stroke: theme.palette.light.tertiary,
      },
    },
    line: {
      width: '100%',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      margin: '0',
    },
    tabContent: {
      width: '100%',
    },
    tabIndicator: {
      backgroundColor: theme.palette.light.tertiary,
    },
  };
});
