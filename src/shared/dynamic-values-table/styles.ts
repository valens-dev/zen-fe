import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      margin: '10px 0',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '8px',
      width: '100%',
    },
    attributeContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      margin: '16px',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
    },
    addButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      textTransform: 'none',
      justifyContent: 'start',
      width: '100%',
    },
  };
});
