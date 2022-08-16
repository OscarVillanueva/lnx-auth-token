import { AuthState } from './AuthContext';

type AuthAction = { type: 'SET_TOKEN', payload: string }

export const AuthReducer = (state: AuthState, action: AuthAction) : AuthState => {
  
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload
      }
  
    default:
      return {
        ...state
      }
  }

}