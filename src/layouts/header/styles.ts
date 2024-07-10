import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    title: {
      paddingTop: '32px',
      paddingLeft: '32px',
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px',
      marginBottom: '16px',
    },
    tabs: {
      marginBottom: '0px',
      paddingLeft: '15px',
    },
    tab: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#475569',
      textTransform: 'none',
      padding: '12px 8px',
    },
    tabSelected: {
      color: '#0055FF',
    },
    line: {
      width: '100%',
      borderTop: '1px solid #E2E8F0',
      marginTop: '-1px',
    },
    tabContent: {
      marginTop: '16px',
      width: '100%',
    },
  };
});
