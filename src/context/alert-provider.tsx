import { useMemo, useState, useCallback, createContext } from 'react';

import { Snackbar, Alert as BaseAlert } from '@mui/material';

import { AlertSeverity } from '@/types/alert';

export interface IAlertContextType {
  showAlert: (alertMessage: string, alertSeverity: AlertSeverity) => void;
}

export const AlertContext = createContext<IAlertContextType | undefined>(
  undefined,
);

export function AlertProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertSeverity>(AlertSeverity.Info);

  const showAlert = useCallback(
    (alertMessage: string, alertSeverity: AlertSeverity): void => {
      setMessage(alertMessage);
      setSeverity(alertSeverity);
      setOpen(true);
    },
    [],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const contextValue = useMemo(() => {
    return { showAlert };
  }, [showAlert]);

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <BaseAlert onClose={handleClose} severity={severity}>
          {message}
        </BaseAlert>
      </Snackbar>
    </AlertContext.Provider>
  );
}
