import { Navigate, useRoutes } from 'react-router-dom';
// config
import { PATH_LOGIN } from 'src/config-global';
//
import { mainRoutes } from './main';

import { authRoutes } from './auth';
import { dashboardRoutes } from './dashboard';
import Page500 from 'src/pages/500';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to={PATH_LOGIN} replace />,
    },

    // Auth routes
    ...authRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    {path: 'sererError', element: <Page500/>},
    // No match 404\
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
