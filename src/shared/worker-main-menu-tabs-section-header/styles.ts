import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      width: '100%',
    },
    headerWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'flex-end',
    },
    tabs: {
      marginBottom: '0px',
      paddingLeft: '15px',
      width: '60%',
    },
    profile: {},
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
      backgroundColor: theme.palette.light.primary,
      borderRadius: '12px',
      '&.Mui-selected': {
        color: theme.palette.light.tertiary,
      },
      '& svg path': {
        stroke: theme.palette.light.tertiary,
      },
      '&:hover': {
        backgroundColor: theme.palette.white.secondary,
      },
    },
    line: {
      width: '100%',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      margin: '0',
    },
    tabContent: {
      width: '100%',
      margin: '2% 0 0 0',
    },
    tabIndicator: {
      display: 'none',
    },
  };
});
