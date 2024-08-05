import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '55%',
      height: '55%',
      background: theme.palette.white.primary,
      borderRadius: '12px',
    },
    header: {
      height: '13%',
      display: 'flex',
      justifyContent: 'space-between',
      mb: 2,
      padding: '16px',
    },
    tableContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      maxHeight: '264px',
      margin: '0',
      overflow: 'scroll',
      '&::-webkit-scrollbar': {
        width: '0',
      },
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      justifyContent: 'flex-end',
      mt: 2,
      height: '15%',
    },
    headerText: {
      fontSize: '1rem',
      fontWeight: theme.typography.fontWeight.medium,
      lineHeight: 1.5,
    },
    addButton: {
      width: '100%',
      height: '40px',
      borderRadius: '12px',
      padding: '8px 16px',
      textTransform: 'none',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '0.875rem',
      lineHeight: 1.25,
      backgroundColor: theme.palette.light.tertiary,
      color: theme.palette.white.primary,
      '&:hover': {
        backgroundColor: theme.palette.background.primary,
      },
    },
  };
});
