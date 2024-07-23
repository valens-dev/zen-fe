import type React from 'react';
import { I18nextProvider } from 'react-i18next';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import i18next from '../i18n';

import { ApiProvider } from './api-provider';

interface IRootProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function RootProvider({
  children,
}: IRootProviderProps): React.ReactNode {
  return (
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <ApiProvider>{children}</ApiProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}
