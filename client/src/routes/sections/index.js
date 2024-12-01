import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from 'src/layouts/main';
// config
// import { PATH_AFTER_LOGIN } from 'src/config-global';
//
import { mainRoutes, HomePage } from './main';
import PlatformPage from '../../pages/platform';

// ----------------------------------------------------------------------

export default function Router() {
  
  return useRoutes([
    // Main routes
    {
      path: '/',
      element: (
        <MainLayout/>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'platform',
          element: <PlatformPage />
        }
      ],
    },
    ...mainRoutes,

    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
