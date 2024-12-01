// scrollbar
import 'simplebar-react/dist/simplebar.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// image
import 'react-lazy-load-image-component/src/effects/blur.css';

// ----------------------------------------------------------------------

// routes
import Router from 'src/routes/sections';
// theme
import ThemeProvider from 'src/theme';
// hooks
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
// components
import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';
import { SettingsProvider, SettingsDrawer } from 'src/components/settings';
import { FiltersContextProvider } from './context/filtersContext';
import { ProvideDashboard } from './context/DashboardContext';
import { ProvideAvenue } from './context/AvenueContext';
import { ProvideApps } from './context/appContext';
import { ProvideWords } from './context/WordsContext';
import { ProvideLogisticsSolution } from './context/logisticsSolution';
import { ProvideLatestInsights } from './context/latestInsights';
import { ProvideChallenges } from './context/challenges';
import { ProvideTrusted } from './context/Trusteds';
import { ProvideAuthGard } from './context/AuthContext';
import { ProvideRates } from './context/rates';
import { ProvideProps } from './context/props';
// auth
// import { AuthProvider, AuthConsumer } from 'src/auth/context/jwt';


// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    // <AuthProvider>
    <SettingsProvider
      defaultSettings={{
        themeMode: 'light', // 'light' | 'dark'
        themeDirection: 'ltr', //  'rtl' | 'ltr'
        themeContrast: 'default', // 'default' | 'bold'
        themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
        themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
        themeStretch: false,
      }}
    >
      <FiltersContextProvider>
        <ProvideAuthGard>
      <ThemeProvider>
        <MotionLazy>
          <SettingsDrawer />
          <ProgressBar />
          <ProvideDashboard>
          <ProvideAvenue>
          <ProvideApps>
          <ProvideWords>
          <ProvideLogisticsSolution>
          <ProvideLatestInsights>
          {/* <AuthConsumer> */}
          <ProvideChallenges>
          <ProvideTrusted>
          <ProvideRates>
          <ProvideProps>
          <Router />
          </ProvideProps>
          </ProvideRates>
          </ProvideTrusted>
          </ProvideChallenges>
          </ProvideLatestInsights>
          </ProvideLogisticsSolution>
          </ProvideWords>
          </ProvideApps>
          </ProvideAvenue>
          <ToastContainer/>
          {/* </AuthConsumer> */}
          </ProvideDashboard>
        </MotionLazy>
      </ThemeProvider>
        </ProvideAuthGard>
      </FiltersContextProvider>
    </SettingsProvider>
    /* </AuthProvider> */
  );
}
