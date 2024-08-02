import { useContext } from 'react';

import { AlertContext, type IAlertContextType } from '@/context/alert-provider';

export function useAlert(): IAlertContextType {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
}
