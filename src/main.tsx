import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import { ThemeProvider } from '@emotion/react';

import './styles/global.css';
import i18next from './i18n';
import { App } from './pages';
import { theme } from './styles/theme';

createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
