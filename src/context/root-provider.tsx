import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IRootProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function RootProvider({ children }: IRootProviderProps): JSX.Element {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.StrictMode>
  );
}
