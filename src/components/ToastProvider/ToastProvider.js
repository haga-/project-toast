import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const onClose = (idToRemove) => {
    setToasts(prevToasts => prevToasts.filter(({ id }) => id !== idToRemove))
  }

  const addToast = ({ message, currentVariant }) => {
    const id = crypto.randomUUID();
    const newToast = { id, message, variant: currentVariant, onClose };
    const newToasts = [...toasts, newToast];
    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
