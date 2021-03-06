import React from 'react';
import { LoggedUser } from '../lib/user';
import { LoginModalMode } from '../types/LoginModalMode';

export type LoginState = { mode: LoginModalMode; trigger: string };

export interface AuthContextData {
  user: LoggedUser;
  shouldShowLogin: boolean;
  showLogin: (trigger: string, mode?: LoginModalMode) => void;
  logout: () => Promise<void>;
  updateUser: (user: LoggedUser) => Promise<void>;
  loadingUser?: boolean;
  tokenRefreshed: boolean;
  loadedUserFromCache?: boolean;
  getRedirectUri: () => string;
}

const AuthContext = React.createContext<AuthContextData>(null);
export default AuthContext;
