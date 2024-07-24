import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px',
    },
    breadcrumbContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    breadcrumbLink: {
      display: 'flex',
      alignItems: 'center',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      textDecoration: 'none',
      color: theme.palette.main.primary,
      '&:not(:last-child)': {
        marginRight: '8px',
      },
    },
    icon: {
      width: '20px',
      height: '20px',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
    },
  };
});
