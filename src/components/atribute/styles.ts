import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    attributeWrapper: {
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
    attributeRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: '100%',
      borderTop: `1px solid ${theme.palette.border.primary}`,
      borderBottom: `1px solid ${theme.palette.border.primary}`,
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
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 16px',
      textTransform: 'none',
      justifyContent: 'start',
      width: '100%',
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
    attributeInput: {
      height: '40px',
      padding: 0,
    },
    optionCheckbox: {
      padding: '12px 10px 12px 14px',
      color: theme.palette.border.primary,
    },
    optionText: {
      color: theme.palette.main.primary,
    },
  };
});
