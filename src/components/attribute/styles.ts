import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    selectContainer: {
      width: '100%',
    },
    attributeSelect: {
      width: '100%',
      flexGrow: 1,
      height: '32px',
      padding: '6px 8px',
      borderRadius: '8px',
      border: `1px solid ${theme.palette.border.primary}`,
      textAlign: 'left',
      fontWeight: theme.typography.fontWeight.regular,
      fontSize: '0.875rem',
      lineHeight: '20px',
      color: theme.palette.text.primary,
      textTransform: 'none',
      justifyContent: 'flex-start',
    },
    popoverOption: {
      height: '40px',
      margin: '2px',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.light.secondary,
      },
    },
    optionText: {
      color: theme.palette.main.primary,
    },
    attributeInput: {
      height: '40px',
      padding: 0,
    },
    newOptionBox: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
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
    newOptionInput: {
      flexGrow: 1,
      marginRight: '8px',
    },
    optionCheckbox: {
      padding: '12px 10px 12px 14px',
      color: theme.palette.border.primary,
    },
    attributeRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      borderBottom: `1px solid ${theme.palette.border.primary}`,
      height: '56px',
    },

    iconButton: {
      width: '52px',
      height: '56px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
    },
  };
});
