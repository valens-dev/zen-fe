import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    valueRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
      height: '56px',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      borderBottom: `1px solid ${theme.palette.border.primary}`,
    },
    iconButton: {
      width: '52px',
      height: '56px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
    },
    input: {
      margin: '8px',
      width: '150px',
      height: '32px',
    },
    select: {
      margin: '8px',
      width: '150px',
      height: '32px',
    },
  };
});
