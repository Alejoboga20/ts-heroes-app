/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const LoginPage = React.lazy(
	() => /* webpackChunkName: 'LoginPage' */ import('../auth/pages/Login')
);

export enum Routes {
	Root = '/',
	Heroes = '/heroes',
	NotFound = '*',
}

export const router = createBrowserRouter([
	{
		path: Routes.Root,
		element: (
			<React.Suspense fallback={<div>Loading...</div>}>
				<PublicRoute>
					<LoginPage />
				</PublicRoute>
			</React.Suspense>
		),
	},
	{
		path: Routes.Heroes,
		element: (
			<PrivateRoute>
				<div>Heroes Route</div>
			</PrivateRoute>
		),
	},
	{
		path: Routes.NotFound,
		element: <div>404</div>,
	},
]);
