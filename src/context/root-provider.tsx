import type React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface IRootProviderProps {
  children: React.ReactNode;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const queryClient = new QueryClient();

export function RootProvider({
  children,
}: IRootProviderProps): React.ReactNode {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
