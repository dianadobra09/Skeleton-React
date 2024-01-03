import { Navigate } from 'react-router-dom';

export const BaseRoute = () => {
  const isAuthenticated = localStorage.getItem('token') && localStorage.getItem('principal') ? true : false;
  return <>{isAuthenticated ? <Navigate to="/private" replace /> : <Navigate to="/login" replace />}</>;
};
