import axiosInstance from '../config/axiosInstance';
import { InvitationStatus } from '../types/InvitationStatus';
import { LoginResponse } from '../types/LoginResponse';

export class InvitationService {
  confirmInvitation = (token: string, password: string): Promise<LoginResponse> => {
    const confirmInvitationRequest = {
      token,
      password
    };
    return axiosInstance.post('/invitation/confirm', confirmInvitationRequest);
  };

  verifyInvitation = (token: string): Promise<InvitationStatus> => {
    return axiosInstance.get(`/invitation/verify?token=${token}`);
  };
}
