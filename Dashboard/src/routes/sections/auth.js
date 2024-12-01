import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingScreen } from 'src/components/loading-screen';

// auth
// import { AuthGuard } from 'src/auth/guard';
// layouts


// ----------------------------------------------------------------------

const LoginPage = lazy(() => import('src/pages/auth/LoginPage'));
const SignUpPage = lazy(() => import('src/pages/auth/SignUpPage'));
const ForgotPasswordPage = lazy(() => import('src/pages/auth/ForgotPasswordPage'));

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: 'auth',
    element: (
          <Suspense fallback={<LoadingScreen />}>
            <Outlet />
          </Suspense>
      ),
    children: [
        { element: <LoginPage />, index: true },
        { path: 'signup', element: <SignUpPage /> },
        { path: 'forgotpassword', element: <ForgotPasswordPage /> },
      ],
  },
];
