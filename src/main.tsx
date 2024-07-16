import { createRoot } from 'react-dom/client';

import { RootProvider } from 'context/root-provider';

import './styles/global.css';
import { App } from './pages';

createRoot(document.querySelector('#root')!).render(
  <RootProvider>
    <App />
  </RootProvider>,
);
