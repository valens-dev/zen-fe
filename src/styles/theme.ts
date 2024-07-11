import { createTss } from 'tss-react';

import { type ITheme } from '@/types/theme';

function useContext(): { theme: ITheme } {
  const theme = {
    palette: {
      main: {
        primary: '#475569',
      },
      white: {
        primary: '#FFFFFF',
        secondary: '#E3F2FD',
        tertiary: '#BBDEFB',
      },
      light: {
        primary: '#EFF8FF',
      },
      text: {
        primary: '#0055FF',
      },
      border: {
        primary: '#E2E8F0',
      },
    },
    typography: {
      fontWeight: {
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
    },
  };

  return { theme };
}

export const { tss } = createTss({ useContext });

const style = { styles: 1 };

export const useStyles = tss.create({ style });
