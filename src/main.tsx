import React from 'react';
import { createRoot } from 'react-dom/client';

import { RootProvider } from '@/context/root-provider';

import './styles/global.css';
import { App } from './pages';

createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </React.StrictMode>,
);
