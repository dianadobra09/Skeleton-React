import axiosInstance from '../config/axiosInstance';
import { LoginResponse } from '../types/LoginResponse';

export class AuthService {
  login = (email: string, password: string, twoFACode?: string): Promise<LoginResponse> => {
    const loginRequest = {
      email,
      password,
      code: twoFACode
    };

    return axiosInstance.post('/login', loginRequest);
  };

  logout = (): Promise<void> => {
    return axiosInstance.put('/logout');
  };

  changePassword = (oldPassword: string, newPassword: string): Promise<void> => {
    const changePasswordRequest = {
      oldPassword,
      newPassword
    };

    return axiosInstance.put('/change-password', changePasswordRequest);
  };
}
