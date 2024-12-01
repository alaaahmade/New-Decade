import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLayout from 'src/layouts/dashboard';
// components
import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const PageTwo = lazy(() => import('src/pages/dashboard/CreateProject'));
const HomePage = lazy(() => import('src/pages/dashboard/Home'));
const SittingsPage = lazy(() => import('src/pages/dashboard/Account/SettingsDetail'));

const UserCardsPage = lazy(() => import('src/pages/dashboard/user/cards'));
const HeaderEditPage = lazy(() => import('src/pages/dashboard/header/edit'))
const FooterEditPage = lazy(() => import('src/pages/dashboard/home-edit/footer/edit'))
const HomeHeroEditPage = lazy(() => import('src/pages/dashboard/home-edit/hero/edit'))
const HomeAboutEditPage = lazy(() => import('src/pages/dashboard/home-edit/About/edit'))
const HomeAvenuesEditPage = lazy(() => import('src/pages/dashboard/home-edit/Avenues/edit'))
const HomeModularEditPage = lazy(() => import('src/pages/dashboard/home-edit/Modular/edit'))
const HomeAdvantageEditPage = lazy(() => import('src/pages/dashboard/home-edit/Advantage/edit'))
const HomeCustomerWordsEditPage = lazy(() => import('src/pages/dashboard/home-edit/CustomerWords/edit'))
const HomeLogisticsSolutionsEditPage = lazy(() => import('src/pages/dashboard/home-edit/LogisticsSolution/edit'))
const HomeLatestInsightsEditPage = lazy(() => import('src/pages/dashboard/home-edit/LatestInsights/edit'))
const HomeChallengesEditPage = lazy(() => import('src/pages/dashboard/home-edit/challenges/edit'))
const HomeTrustedEditPage = lazy(() => import('src/pages/dashboard/home-edit/Trusted/edit'))
// platform
const PlatformHeroEditPage = lazy(() => import('src/pages/dashboard/platform-edit/hero/edit'))
const PlatformAboutEditPage = lazy(() => import('src/pages/dashboard/platform-edit/about/edit'))
const ThreeEditPage = lazy(() => import('src/pages/dashboard/platform-edit/three/edit'))
// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: (
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { element: <HomePage />, index: true },
      { path: 'two', element: <PageTwo /> },
      // edit home
      { path: 'edit/header/', element: <HeaderEditPage /> },
      {path: 'edit/hero', element: <HomeHeroEditPage/>},
      {path: 'edit/about', element: <HomeAboutEditPage/>},
      {path: 'edit/avenues', element: <HomeAvenuesEditPage/>},
      {path: 'edit/modular', element: <HomeModularEditPage/>},
      {path: 'edit/advantage', element: <HomeAdvantageEditPage/>},
      {path: 'edit/customerWords', element: <HomeCustomerWordsEditPage/>},
      {path: 'edit/logisticsSolutions', element: <HomeLogisticsSolutionsEditPage/>},
      {path: 'edit/latestInsights', element: <HomeLatestInsightsEditPage/>},
      {path: 'edit/challenges', element: <HomeChallengesEditPage/>},
      { path: 'edit/footer/', element: <FooterEditPage /> },
      {path: 'edit/trusted', element: <HomeTrustedEditPage/> },
      // edit platform
      {path: 'edit/platform/hero', element: <PlatformHeroEditPage/>},
      {path: 'edit/platform/about', element: <PlatformAboutEditPage/>},
      {path: 'edit/platform/three', element: <ThreeEditPage/>},

      {
        path: 'user',
        children: [
          { index: true, element: <UserCardsPage /> },
          { path: 'settings', element: <SittingsPage /> },
        ],
      },
    ],
  },
];
