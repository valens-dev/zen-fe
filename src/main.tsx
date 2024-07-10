import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './pages';

import './styles/global.css';

createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
