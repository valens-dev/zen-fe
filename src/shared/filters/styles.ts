import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    backGroundModal: {
      '& .MuiBackdrop-root': {
        backgroundColor: 'RGBA(0,0,0,0)',
      },
    },
    modalContainer: {
      transform: 'translate(-50%, -50%)',
      width: 272,
      height: 157,
      bgcolor: '#fff',
      boxShadow: '24px',
      border: '1px solid rgb(226, 232, 240)',
      borderRadius: '12px',
      zIndex: 1300,
    },
    // modalHeader: {
    //   width: '100%',
    //   height: '44px',
    //   padding: '12px',
    // },
    inputContainer: {
      display: 'flex',
      height: 56,
      width: '100%',
      padding: '12px',
      gap: '3%',
    },
    inputWrapper: {
      height: '32px',
      width: '120px',
      padding: '6px 8px',
      borderRadius: '10px',
      border: '1px solid rgb(226, 232, 240)',
    },
  };
});
//
