import type React from 'react';
import { I18nextProvider } from 'react-i18next';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import i18next from '../i18n';

import { AlertProvider } from './alert-provider';

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
        <AlertProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </AlertProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
}
