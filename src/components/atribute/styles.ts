import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    attributeWrapper: {
      padding: '16px 0',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '8px',
    },
    attributeContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      margin: '0 0 16px 16px',
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '1rem',
    },
    attributeRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      height: '56px',
    },
    newOptionInput: {
      flexGrow: 1,
      marginRight: '8px',
    },
    iconButton: {
      width: '52px',
      height: '56px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
    },
    addButton: {
      margin: '12px 0 0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    newOptionBox: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    selectContainer: {
      flexGrow: 1,
    },
    attributeSelect: {
      width: '100%',
      flexGrow: 1,
      height: '32px',
      padding: '6px 8px',
      borderRadius: '8px',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      textAlign: 'left',
      fontWeight: theme.typography.fontWeight.regular,
      fontSize: '0.875rem',
      lineHeight: '20px',
      color: theme.palette.text.primary,
      textTransform: 'none',
      justifyContent: 'flex-start',
    },
    popoverOption: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.main.primary,
      },
    },
  };
});
