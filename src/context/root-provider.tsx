import type React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IRootProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function RootProvider({
  children,
}: IRootProviderProps): React.ReactNode {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
