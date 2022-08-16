import { createContext } from 'react'

export interface AuthState {
  token: string
}

export interface AuthActions extends AuthState {
  setToken: (token: string) => void
}

export const AuthContext = createContext({} as AuthActions)