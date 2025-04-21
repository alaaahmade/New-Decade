import { useScroll } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import HomeHero from '../home-hero';
import HomeAvenues from '../home-avenues';
import HomeCustomerWords from '../home-customer-words';
import HomeModular from '../home-modular';
import HomeLogisticsSolution from '../home-logistics-solution';
import {AboutView} from '../../about/view'
import { HomeAdvantage } from '../HomeAdvantage';
import HomeLatestInsights from '../home-latest-insights';
import { HomeChallenges } from '../home-challenges';
import { endpoints, fetcher } from '../../../utils/axios';
import { useEffect, useState } from 'react';
import HomeTrusted from '../home-trusted';
import { useTheme } from '@emotion/react';
import { Link } from '@mui/material';
import { useResponsive } from 'src/hooks/use-responsive';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(1, -1)',
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[900] : '#4e4e4e',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
  ...(anchor === 'myBottom' && {
    bottom: -1,
    transform: 'scale(-1, 1)',
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[900] : theme.palette.primary.main,
  })
}));

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();
  const [data, setData] = useState({})
  const [whatsNumber, setWhatsNumber] = useState('')

  // const direction =  JSON.parse(localStorage.getItem('settings')).themeDirection //ltr  //rtl

  const theme = useTheme()


  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetcher([endpoints.data.home]);
      const newNumber = await fetcher([endpoints.layout]);
  
      setWhatsNumber(newNumber?.header?.whatsNumber);
      setData(newData);
    };
  
    fetchData();
  }, []);
  

  const mdUp = useResponsive('up', 'md');
  
  const light = theme.palette.mode === 'light'
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      {data.hero && <HomeHero data={data.hero} />}
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: light ? '#transparent' : '#4e4e4e',
        }}
      >
      {data.trusted && <HomeTrusted data={data?.trusted}/>}
      </Box>

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: light ? '#ccc' : theme.palette.background.default,
        }}
      >
        {data.about && <AboutView data={data.about}/>}
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: light ? '#fff' : '#4e4e4e',
        }}
      >
      {data?.avenues && <HomeAvenues data={data?.avenues} />}
      </Box>
        
        {/* <HomeHugePackElements /> */}
        <Box sx={{ position: 'relative' }}>
          {data?.modular && <HomeModular data={data?.modular} />}
          <StyledPolygon />
          <StyledPolygon anchor="myBottom" />
        </Box>
        {data?.advantage && <HomeAdvantage data={data?.advantage}/>}
        <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: light ? '#fff' : '#4e4e4e',
        }}
      >
        {data.customerWords && <HomeCustomerWords data={data.customerWords} />}
        </Box>
        <Box
          sx={{
            width: '100%',
            backgroundColor:light ? '#f1f0f0' : theme.palette.background.default,
            mt: 0
          }}
        >
        {data?.logisticsSolution && <HomeLogisticsSolution data={data?.logisticsSolution} />}
        {data?.latestInsights && <HomeLatestInsights data={data?.latestInsights}/>}
        {data?.challenges && <HomeChallenges data={data?.challenges} />}
          <ToastContainer/>
        </Box>
        <Link
          sx={{
            width: '3em',
            height: '3em',
            backgroundColor: theme.palette.common.main || '#2a0a39',
            position:'fixed',
            bottom: 10,
            left: 'rtl',
            // left: direction === 'ltl' ?(mdUp ? '7%' : '15%') : (mdUp ? '93%' : '85%'),
            zIndex: 10000000000000,
            borderRadius: '50%',
            backgroundPosition: 'center',
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            objectFit: 'contain',
            backgroundImage: 'url(https://ik.imagekit.io/a83g0okds/whatsapp.png?updatedAt=1685026476302)',
            cursor: 'pointer',
          }}
          target="_blank"
          href={'https://api.whatsapp.com/send?phone=' + whatsNumber}
        />
    </>
  );
}
