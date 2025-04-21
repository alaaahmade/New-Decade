import { m, useScroll } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

//lang
import { localStorageGetItem } from 'src/utils/storage-available';

// @mui
import { styled, alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { textGradient, bgGradient, bgBlur } from 'src/theme/css';
// layouts
import { HEADER } from 'src/layouts/config-layout';
// components
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { MotionContainer, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function PlatformHero({data}) {
  const [heroData, setHeroData] = useState({})
  const lang = localStorageGetItem('i18nextLng')
  const [image, setImage] = useState('/assets/images/home/hero.svg')
  useEffect(() => {
    setImage(heroData?.image)
  }, [heroData?.image, heroData])

  useEffect(() => {
    if (lang === 'en') {
      setHeroData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setHeroData({...data, ...data?.lang?.ar})
    }else if (lang === 'Kurdi') {
      setHeroData({...data, ...data?.lang?.cr})
    }
  }, [data])
  const mdUp = useResponsive('up', 'md');
  const theme = useTheme();
  const light = theme.palette.mode === 'light'

  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);


  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);

  const opacity = 1 - percent / 100;

  const renderDescription = (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 1,
        // mx: 'auto',
        maxWidth: 480,
        opacity: opacity > 0 ? opacity : 0,
        mt: mdUp ? 0 : 5,
        ml: 2.3,
      }}
    >

      <Box
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        
        <Typography
          variant="h2"
          sx={{
            // textAlign: 'left',
          fontWeight: '800',
          fontSize: '3em !important',
          lineHeight: 1,
          width: '100%',
          color: light ? theme.palette.common.main : theme.palette.primary.light
          }}
        >
          {heroData.title} 
        </Typography>
      </Box>

      <m.div variants={varFade().in}>
        <Typography sx={{
          fontWeight: '500',
          width: mdUp ? '99%' :'100%',
          fontSize: 16,
          color: light ? theme.palette.common.main : '',
          lineHeight: 1.5,
          mt: 3
        }} variant="body2" >
          {heroData.description}
        </Typography>
      </m.div>

      <Box  sx={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        gap: 2,
        // mt: 2,
        mt: 4
      }}>
        <Button sx={{
          flexGrow: 0.45 ,
          backgroundColor: 'blue',
          borderRadius: 0,
          height: '3.2em',
          p: 0,
          color: '#fff',
          fontSize: '1em',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'blue',
          }
        }}>
          {heroData.buttonOne && heroData.buttonOne.text}
        </Button>
        <Button sx={{
          flexGrow: 0.3,
          border: '1px solid blue',
          height: '3.2em',
          borderRadius: 0,
          fontWeight: 'bold',
          color: 'blue',
          fontSize: '1em',
        }}>
          {heroData.buttonTow && heroData.buttonTow.text}
        </Button>

      </Box>
    </Stack>
  );

  return (
    
      <Box
        ref={heroRef}
        sx={{
          width: '100%',
          height: '75vh'
        }}
      >
          <Container component={MotionContainer} sx={{ height: 1.2 }}>
            <Grid container columnSpacing={{ md: 10 }} sx={{ height: 1.2 }}>
              <Grid xs={12} md={'100%'}>
              <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              width: '100%',
              
            }}
          >
            {renderDescription}
            {mdUp && (
              <Box sx={{
                width:'40%',
                height: '28em',
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                // m: '0 1.5em',
                alignSelf: 'flex-start',
                opacity: opacity > 0 ? opacity : 0,


          }} />
        )}
          </Box>

              </Grid>

            </Grid>
          </Container>

      </Box>
  );
}
PlatformHero.propTypes = {
  hero: PropTypes.object.isRequired
}
