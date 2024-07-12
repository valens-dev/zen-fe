import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    container: {
      width: '100%',
      padding: '16px',
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
      margin: '16px',
      background: theme.palette.white.primary,
    },
    tableContainer: {
      borderRadius: '16px',
    },
    table: {
      border: `1px solid ${theme.palette.border.primary}`,
      borderRadius: '16px',
    },
    headerRow: {
      height: '40px',
      backgroundColor: theme.palette.light.secondary,
    },
    bodyRow: {
      height: '56px',
    },
    headerCell: {
      color: theme.palette.main.primary,
      fontWeight: theme.typography.fontWeight.medium,
      fontSize: '0.75rem',
      lineHeight: '16px',
      textAlign: 'center',
    },
    bodyCell: {
      fontSize: '0.75rem',
      lineHeight: '16px',
      width: '15.54%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      textAlign: 'center',
    },
    image: {
      width: '38px',
      height: '24px',
      marginRight: '8px',
      verticalAlign: 'middle',
    },
    textContainer: {
      display: 'inline-block',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '248px',
    },
    tableRow: {
      display: 'flex',
      alignItems: 'center',
    },
  };
});
