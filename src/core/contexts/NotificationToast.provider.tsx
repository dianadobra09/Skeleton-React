import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCustomTheme } from '../hooks/useThemeMode';

export const NotificationToastProvider: React.FC = () => {
  const { themeMode } = useCustomTheme();

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={themeMode}
      style={{ zIndex: 100000 }}
    />
  );
};
