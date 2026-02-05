import React from 'react';

import useKeydown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = ({ message, variant }) => {
    const newToast = { id: crypto.randomUUID(), message, variant };
    const newToasts = [...toasts, newToast];
    setToasts(newToasts);
  }

  const dismissToast = (idToDismiss) => {
    const nextToasts = toasts.filter(({ id }) => id !== idToDismiss);
    setToasts(nextToasts)
  }

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])

  useKeydown('Escape', handleEscape);

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
