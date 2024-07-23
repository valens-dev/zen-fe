import type React from 'react';

import { MaterialProvider } from '@/services/context/material-context';

interface IApiProviderProps {
  children: React.ReactNode;
}

export function ApiProvider({ children }: IApiProviderProps): React.ReactNode {
  return <MaterialProvider>{children}</MaterialProvider>;
}
