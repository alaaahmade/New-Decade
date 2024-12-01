import { useScroll } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import PlatformHero from '../Platform-hero';
import PlatformForAll from '../Platform-for-all';
import PlatformConvert from '../Platform-convert';
import { PlatformTransForms } from '../Platform-transforms';
import { endpoints, fetcher } from '../../../utils/axios';
import { useEffect, useState } from 'react';
import AboutPlatform from '../Platform-about';
import { useTheme } from '@emotion/react';
import { Link } from '@mui/material';
import { useResponsive } from 'src/hooks/use-responsive';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlatFormEdge from '../platform-edge';


// ----------------------------------------------------------------------

export default function PlatformView() {
  const { scrollYProgress } = useScroll();
  const [data, setData] = useState({})
  const [whatsNumber, setWhatsNumber] = useState('')

  const direction =  JSON.parse(localStorage.getItem('settings')).themeDirection //ltr  //rtl

  const theme = useTheme()


  useEffect(async() => {
    const newData = await fetcher([endpoints.data.platform])
    const newNumber= await fetcher([endpoints.layout]);
    setWhatsNumber(newNumber?.header?.whatsNumber)
  setData(newData)
  }, [])

  const mdUp = useResponsive('up', 'md');
  
  const light = theme.palette.mode === 'light'
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      {data.hero && <PlatformHero data={data.hero} />}
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: light ? '#fff' : '#4e4e4e',
        }}
      >
      {data?.about && <AboutPlatform data={data?.about}/>}
      </Box>
        
        <Box sx={{ position: 'relative',
          bgcolor: light && '#dedef875' ,
        }}>
          {data?.forAll && <PlatformForAll data={data?.forAll} />}
        </Box>
        <Box sx={{ position: 'relative' ,
        }}>
          {data?.edge && <PlatFormEdge data={data?.edge} />}
        </Box>
        <Box
          sx={{
            width: '100%',
            backgroundColor:light ? '#f1f0f0' : theme.palette.background.default,
            mt: 0
          }}
        >
        {data?.transform && <PlatformTransForms data={data?.transform} />}
          <ToastContainer/>
        </Box>
        {data?.convert && <PlatformConvert data={data?.convert} />}
        <Link
          sx={{
            width: '3em',
            height: '3em',
            backgroundColor: theme.palette.common.main || '#2a0a39',
            position:'fixed',
            bottom: 10,
            left: direction === 'ltl' ?(mdUp ? '7%' : '15%') : (mdUp ? '93%' : '85%'),
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
