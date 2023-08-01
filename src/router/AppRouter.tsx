/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

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
				<LoginPage />
			</React.Suspense>
		),
	},
	{
		path: Routes.Heroes,
		element: <div>Heroes Route</div>,
	},
	{
		path: Routes.NotFound,
		element: <div>404</div>,
	},
]);
