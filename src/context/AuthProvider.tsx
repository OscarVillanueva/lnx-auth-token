import React, { useReducer, FC, ReactNode, useEffect} from 'react'

// Context
import { AuthState, AuthContext } from './AuthContext'
import { AuthReducer } from './AuthReducer'

interface AuthProviderProps {
  token: string,
  children: ReactNode
}

const INITIAL_STATE: AuthState = {
  token: ''
}

export const AuthProvider: FC<AuthProviderProps> = ({ token, children }) => {

  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE)

  useEffect(() => {
    setToken(token)
  }, [])

  const setToken = (token: string) : void => {
    
    const regex = new RegExp(/[A-Z]/);

    if (!token || !regex.test(token)) {
      throw new Error(`Token inválido: ${token}`);
      return
    } 

    dispatch({ type: 'SET_TOKEN', payload: token })

  }

  return (
    <AuthContext.Provider value={{
      ...state,
      setToken
    }}>
      { children }
    </AuthContext.Provider>
  )
}
