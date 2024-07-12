import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    container: {
      height: '60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    selectContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    paginationSelect: {
      width: 64,
      height: 32,
      fontSize: '0.875rem',
      borderRadius: '8px',
    },
    pagginationButtonsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    pagginationButton: {
      padding: '4px',
    },
    paginationTypography: {
      marginLeft: 8,
    },
    paginationBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 32,
      height: 32,
      borderRadius: '6px',
      padding: 6,
      cursor: 'pointer',
      border: `1px solid ${theme.palette.border.primary}`,
      margin: '0 4px',
    },
    paginationActive: {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.white.primary,
    },
    paginationInactive: {
      backgroundColor: theme.palette.white.primary,
      color: theme.palette.text.secondary,
    },
  };
});
