import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    cardsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
    },
    stationWrapper: {
      flex: '1 1 calc(50% - 1px)',
      maxWidth: 'calc(50% - 8px)',
    },
  };
});
