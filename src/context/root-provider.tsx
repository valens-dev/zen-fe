import React from 'react';
import { I18nextProvider } from 'react-i18next';

import i18next from 'i18n';
import { ThemeProvider } from '@emotion/react';

import { theme } from '@/styles/theme';

interface IRootProviderProps {
  children: React.ReactNode;
}

export function RootProvider({ children }: IRootProviderProps): JSX.Element {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
