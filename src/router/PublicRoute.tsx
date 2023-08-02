import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../auth/hooks/useAuth';
import { Routes } from './AppRouter';

export const PublicRoute = ({ children }: PropsWithChildren) => {
	const { status } = useAuth();

	const isChecking = status === 'checking';
	const isAuthenticated = status === 'authenticated';

	if (isChecking) return <div>Checking...</div>;

	return <>{isAuthenticated ? <Navigate to={Routes.Heroes} /> : children}</>;
};
