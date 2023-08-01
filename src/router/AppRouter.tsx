import { createBrowserRouter } from 'react-router-dom';

enum Routes {
	Home = '/',
	Heroes = '/heroes',
	NotFound = '*',
}

export const router = createBrowserRouter([
	{
		path: Routes.Home,
		element: <div>Home Route</div>,
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
