import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => ({
  root: {
    display: 'flex',
  },
  content: {
    flex: '1',
    padding: '20px',
  },
}));
