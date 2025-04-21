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

const StyledRoot = styled('div')(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.94),
    imgUrl: '/assets/background/overlay_3.jpg',
  }),
  width: '100%',
  height: '100dvh', 
    position: 'relative',
  [theme.breakpoints.up('md')]: {
    top: 45,
    left: 0,
    position: 'fixed',
  },
}));

const StyledWrapper = styled('div')(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    marginTop: HEADER.H_DESKTOP_OFFSET,
  },
}));

const StyledTextGradient = styled(m.h1)(({ theme }) => ({
  padding: 0,
  marginTop: 4,
  lineHeight: 1.5,
  marginBottom: 24,
  letterSpacing: 0,
  textAlign: 'center',
  backgroundSize: '400%',
  fontSize: '35px !important',
  fontFamily: "'Barlow', sans-serif",
  [theme.breakpoints.up('md')]: {
    fontSize: `${64 / 16}rem`,
  },
  
}));

const StyledEllipseTop = styled('div')(({ theme }) => ({
  top: -80,
  width: 480,
  right: -80,
  height: 480,
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledEllipseBottom = styled('div')(({ theme }) => ({
  height: 400,
  bottom: -200,
  left: '10%',
  right: '10%',
  borderRadius: '50%',
  position: 'absolute',
  filter: 'blur(100px)',
  WebkitFilter: 'blur(100px)',
  backgroundColor: alpha(theme.palette.primary.darker, 0.12),
}));

const StyledPolygon = styled('div')(({ opacity = 1, anchor = 'left', theme }) => ({
  ...bgBlur({
    opacity,
    color: theme.palette.background.default,
  }),
  zIndex: 9,
  bottom: 0,
  height: 80,
  width: '50%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  ...(anchor === 'left' && {
    left: 0,
    ...(theme.direction === 'rtl' && {
      transform: 'scale(-1, 1)',
    }),
  }),
  ...(anchor === 'right' && {
    right: 0,
    transform: 'scaleX(-1)',
    ...(theme.direction === 'rtl' && {
      transform: 'scaleX(1)',
    }),
  }),
}));

// ----------------------------------------------------------------------

export default function HomeHero({data}) {
  const [heroData, setHeroData] = useState({})
  const lang = localStorageGetItem('i18nextLng')
  const [image, setImage] = useState('/assets/images/home/hero.svg')

useEffect(() => {
  if (heroData?.image) {
    setImage(heroData.image);
  }
}, [heroData]);

  useEffect(() => {
    if(lang){
    if (lang === 'en') {
      setHeroData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setHeroData({...data, ...data?.lang?.ar})
    }else if (lang === 'Kurdi') {
      setHeroData({...data, ...data?.lang?.cr})
    }
  }
  }, [data])
  const mdUp = useResponsive('up', 'md');
  const theme = useTheme();
  const light = theme.palette.mode === 'light'

  const heroRef = useRef(null);

  const { scrollY } = useScroll();

  const [percent, setPercent] = useState(0);

  const fadeInVariant = varFade().in;

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

  const hide = percent > 120;

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
          fontSize: '3.4em !important',
          width: '100%',
          color: light ? theme.palette.common.main : theme.palette.primary.darkMain
          }}
        >
          {heroData.titleOne} 
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: '3.4em !important',
            mt: -1.5 ,
            mb: 1,
            width: '100%',
            color: light ? theme.palette.common.main : theme.palette.primary.darkMain
          }}
        >
          {heroData.titleTow} 
        </Typography>
      </Box>

      <m.div variants={fadeInVariant}>
        <Typography sx={{
          fontWeight: '500',
          width: '100%',
          fontSize: 16,
          color: light ? theme.palette.common.main : '',
          lineHeight: 1.5
        }} variant="body2" >
          {heroData.description}
        </Typography>
      </m.div>

        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1.5,
            fontWeight: '500',
            width: '100%',
            fontSize: 16,
            color: light ? theme.palette.common.main : '',
            lineHeight: 1.5,
            mt: 2.5
        }} variant="body2" align='left' >
          Featured in:
          <m.div variants={fadeInVariant}>
        <StyledTextGradient
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            repeatType: 'reverse',
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          sx={{
            mt: '0 !important',
            mb: '0 !important',
            color: light ? theme.palette.common.main : theme.palette.primary.darkMain,
          }}
        >
          {heroData.featured}
        </StyledTextGradient>
      </m.div>
        </Box>
      <Box  sx={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        width: '100%',
        gap: 2,
        mt: 2,
        // zIndex: 100000000000
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

  const renderPolygons = (
    <>
      <StyledPolygon anchor="right" opacity={0.48} />
      <StyledPolygon anchor="right" opacity={0.48} sx={{ height: 48, zIndex: 10 }} />
      <StyledPolygon anchor="right" sx={{ zIndex: 11, height: 24 }} />
    </>
  );

  const renderEllipses = (
    <>
      {mdUp && <StyledEllipseTop />}
      <StyledEllipseBottom />
    </>
  );

  return (
    
    <>
      <StyledRoot
        ref={heroRef}
        sx={{
          zIndex: 0,
          ...(hide && {
            opacity: 0,
          }),
        }}
      >
        <StyledWrapper>
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

              {/* {mdUp && <Grid md={6}>{renderSlides}</Grid>} */}
            </Grid>
          </Container>

          {renderEllipses}
        </StyledWrapper>
      </StyledRoot>

      {mdUp && renderPolygons}

      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
HomeHero.propTypes = {
  data: PropTypes.object.isRequired
}
