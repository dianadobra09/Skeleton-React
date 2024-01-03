import axiosInstance from '../config/axiosInstance';

export class ForgotPasswordService {
  forgotPassword = (email: string): Promise<void> => {
    return axiosInstance.post(`/forgot-password?email=${email}`);
  };

  confirmForgotPassword = (token: string): Promise<void> => {
    return axiosInstance.get(`/forgot-password/confirm?token=${token}`);
  };
}
