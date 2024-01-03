import { Navigate, Route, Routes } from 'react-router-dom';
import { ActivateAccount } from '../../components/Auth/ActivateAccount/ActivateAccount';
import { ChangePassword } from '../../components/Auth/ForgotPassword/ChangePassword/ChangePassword';
import { ForgotPassword } from '../../components/Auth/ForgotPassword/ForgotPassword';
import { ForgotPasswordConfirmation } from '../../components/Auth/ForgotPassword/ForgotPasswordConfirmation/ForgotPasswordConfirmation';
import { Login } from '../../components/Auth/Login/Login';
import { Layout } from '../../components/Layout/Layout';
import GuardedRoute from './AuthenticatedRoute';
import { BaseRoute } from './BaseRoute';
import { Box } from '../components/Box/Box';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseRoute />}></Route>

      <Route path="login">
        <Route element={<Login />} index />
      </Route>

      <Route path="invitation/confirm/:email/:token" element={<ActivateAccount />} />

      <Route path="forgot-password">
        <Route element={<ForgotPassword />} index />
        <Route path="confirm/:token" element={<ForgotPasswordConfirmation />} />
        <Route path="change-password/:email" element={<ChangePassword />} />
      </Route>

      <Route path="/private" element={<GuardedRoute redirectRoute={'/login'} />}>
        <Route element={<Layout />}>
          <Route path="*" element={<Box>Inner page works</Box>} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
