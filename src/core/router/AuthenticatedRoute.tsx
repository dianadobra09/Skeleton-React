import { Navigate, Outlet } from 'react-router-dom';

interface AuthenticatedRouteProps {
  /**
   * Route to be redirected to
   */
  redirectRoute?: string;
}

const AuthenticatedRoute = ({ redirectRoute = '/' }: AuthenticatedRouteProps): JSX.Element => {
  const isAuthenticated = localStorage.getItem('token') && localStorage.getItem('principal') ? true : false;
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectRoute} replace />;
};
export default AuthenticatedRoute;
