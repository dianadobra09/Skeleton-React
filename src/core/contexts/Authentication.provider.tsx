import { useEffect, useState } from 'react';
import { setAuthToken } from '../config/axiosInstance';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { AuthService } from '../services/AuthService';
import { BaseComponentProps } from '../types/Core';
import { createContext } from '../utils/createContext';
import { User } from '../types/User';

export type AuthContextValue = {
  isLoggedIn: boolean;
  principal: User | undefined;
  login: (email: string, password: string, twoFACode?: string) => Promise<User>;
  logout: () => Promise<void>;
  updatePrincipalTwoFAState: (twoFAEnabled: boolean) => void;
};

interface Props extends BaseComponentProps {
  authService: AuthService;
}

const [Provider, useAuth] = createContext<AuthContextValue>({
  name: 'AuthenticationContext'
});

const AuthenticationProvider = (props: Props) => {
  const localStorage = useLocalStorage();

  const authService = props.authService;
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [principal, setPrincipal] = useState<User | undefined>(undefined);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const principal = localStorage.getItem('principal');

    if (token && principal) {
      setAuthToken(token);
      setIsLoggedIn(true);
      setPrincipal(JSON.parse(principal));
    }
  }, []);

  const updatePrincipalTwoFAState = (twoFAEnabled: boolean) => {
    if (principal) {
      setPrincipal({ ...principal, hasTwoFactorAuthEnabled: twoFAEnabled });
      localStorage.setItem('principal', JSON.stringify({ ...principal, twoFAEnabled }));
    }
  };

  const login = async (email: string, password: string, twoFACode?: string): Promise<User> => {
    return authService.login(email, password, twoFACode).then(
      loginResponse => {
        const token = loginResponse.token;
        const user: User = loginResponse.user;

        //set JWT token to local
        localStorage.setItem('token', token);
        localStorage.setItem('principal', JSON.stringify(user));

        //set token to axios common header
        setAuthToken(token);

        setIsLoggedIn(true);
        setPrincipal(user);

        return user;
      },
      err => {
        setIsLoggedIn(false);
        setPrincipal(undefined);
        localStorage.removeItem('token');
        localStorage.removeItem('principal');
        throw err;
      }
    );
  };

  const logout = (): Promise<void> => {
    return authService
      .logout()
      .then(() => {
        setIsLoggedIn(false);
        setPrincipal(undefined);
        localStorage.removeItem('token');
        localStorage.removeItem('principal');
      })
      .catch(error => {
        error;
      });
  };

  return (
    <Provider
      value={{
        isLoggedIn,
        principal,
        login,
        logout,
        updatePrincipalTwoFAState
      }}
    >
      {props.children}
    </Provider>
  );
};

export { AuthenticationProvider, useAuth };
