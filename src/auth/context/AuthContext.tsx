import { PropsWithChildren, createContext } from 'react';

type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking';

interface AuthContextProps {
	status: AuthStatus;
}

type AuthProviderProps = PropsWithChildren;

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
	return <AuthContext.Provider value={{ status: 'checking' }}>{children}</AuthContext.Provider>;
};
