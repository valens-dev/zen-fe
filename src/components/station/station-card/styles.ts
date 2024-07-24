import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    containerBox: {
      height: '100%',
      width: '100%',
      padding: '16px',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      background: theme.palette.background.secondary,
    },
    baseBox: {
      height: '100%',
      width: '100%',
      borderRadius: '12px',
      border: `1px solid ${theme.palette.border.primary}`,
      background: theme.palette.white.primary,
    },
    headerRow: {
      height: '56px',
      width: '100%',
      padding: '16px',
      borderBottom: `1px solid ${theme.palette.border.primary}`,
      gap: '8px',
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.25rem',
      color: theme.palette.text.primary,
    },
    contentContainer: {
      display: 'flex',
      gap: '12px',
      padding: '16px',
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      flex: '1',
    },
    image: {
      height: '80px',
      width: '80px',
      borderRadius: '400px',
    },
    customerName: {
      lineHeight: '24px',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
    infoContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      flex: '2',
    },
    box: {
      flex: '1 1 calc(50% - 12px)',
      border: 'none',
      background: theme.palette.light.secondary,
      borderRadius: '8px',
      padding: '12px',
      gap: '4px',
    },
    boxHeader: {
      fontWeight: theme.typography.fontWeight.regular,
      fontSize: '0.875rem',
      color: theme.palette.main.primary,
      textAlign: 'left',
      lineHeight: '20px',
    },
    boxValue: {
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.25rem',
      color: theme.palette.text.primary,
    },
    workList: {
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.25rem',
      color: theme.palette.light.tertiary,
    },
    edited: {
      fontWeight: theme.typography.fontWeight.semiBold,
      fontSize: '1.25rem',
      color: theme.palette.text.secondary,
    },
  };
});
