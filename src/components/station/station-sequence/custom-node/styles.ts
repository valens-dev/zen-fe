import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      border: `1px solid ${theme.palette.light.quinary}`,
      borderWidth: '0 0 0 5px',
      borderRadius: '12px',
      padding: '10px',
      position: 'relative',
      background: theme.palette.white.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minWidth: '180px',
      height: '72px',
    },
    iconButton: {
      padding: '0',
      position: 'absolute',
      right: '-10px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: theme.palette.light.quinary,
      '&:hover': {
        backgroundColor: theme.palette.light.quaternary,
      },
    },
    avatar: {
      width: '32px',
      height: '32px',
      marginRight: '8px',
      position: 'absolute',
      right: '-15px',
      top: '-15px',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontSize: '0.875rem',
      color: theme.palette.main.primary,
    },
    value: {
      fontSize: '1.25rem',
      color: theme.palette.light.tertiary,
      fontWeight: 'bold',
    },
    leftHandle: {
      borderRadius: '20px',
      marginLeft: '-7px',
      '&.react-flow__handle': {
        background: theme.palette.light.quaternary,
      },
    },
    rightHandle: {
      borderRadius: '20px',
      marginRight: '-12px',
      '&.react-flow__handle': {
        background: theme.palette.light.quaternary,
      },
    },
    stationIcon: {
      '& path': {
        stroke: theme.palette.main.primary,
      },
    },
  };
});
