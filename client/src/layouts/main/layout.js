import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
// routes
import { usePathname } from 'src/routes/hooks';
//
import Footer from './footer';
import Header from './header';
import { styled } from '@mui/material';
import { endpoints, fetcher } from '../../utils/axios';
import { SplashScreen } from 'src/components/loading-screen';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router';

// ----------------------------------------------------------------------


export default function MainLayout() {
  const [data, setData] = useState({})  

  useEffect(() => {

    async function fetchData() {
      const newData = await fetcher([endpoints.layout])
      setData(newData);
    }
    fetchData();

    }, [endpoints.layout])
  const pathname = usePathname();

  const isHome = pathname === '/';
  return (
    <Box 
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: 1,
      
    }}
    >
      {data.header && <Header headerData={data.header} />
}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        <Suspense fallback={<SplashScreen />}>
          <Outlet />
        </Suspense>
        </Box>

      {data.footer && <Footer footerData={data.footer} />}
    </Box>
  );
}

