import {
  useMemo,
  useState,
  useCallback,
  createContext,
  type ReactNode,
} from 'react';

import { Snackbar, type AlertProps, Alert as MuiAlert } from '@mui/material';

export interface IAlertContextType {
  showAlert: (
    alertMessage: string,
    alertSeverity: AlertProps['severity'],
  ) => void;
}

export const AlertContext = createContext<IAlertContextType | undefined>(
  undefined,
);

export function AlertProvider({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertProps['severity']>('info');

  const showAlert = useCallback(
    (alertMessage: string, alertSeverity: AlertProps['severity']): void => {
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
        <MuiAlert onClose={handleClose} severity={severity}>
          {message}
        </MuiAlert>
      </Snackbar>
    </AlertContext.Provider>
  );
}
