/* eslint-disable react/no-unescaped-entities */
import { m } from 'framer-motion';
import PropTypes from 'prop-types';

// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// utils
import { fPercent } from 'src/utils/format-number';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import { useEffect, useState } from 'react';
//lang
import { localStorageGetItem } from 'src/utils/storage-available';

// ----------------------------------------------------------------------

const StyledSpan = styled('span')(({theme}) => ({
  color: theme.palette.mode === 'light' ? 'common.main' : 'common.white',
}))

export default function AboutWhat({data}) {
  const [aboutData, setAboutData] = useState({...data})
  
  const lang = localStorageGetItem('i18nextLng')

  
  useEffect(() => {
    if (lang === 'en') {
      setAboutData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setAboutData({...data, ...data?.lang?.ar})
    }else if (lang === 'Kurdi') {
      setAboutData({...data, ...data?.lang?.cr})
    }
  }, [data])
  const theme = useTheme();
  
  const light = theme.palette.mode === 'light'

  const mdUp = useResponsive('up', 'md');
  
  
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 6, md: 6 },
        textAlign: { xs: 'center', md: 'unset' },
        width: '100% !important',
      }}
    >
        <m.div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          marginBottom: '2em'
        }} variants={varFade().inRight}>
            <Typography variant="h3" align='center'
            sx={{ 
              mb: mdUp ? 3 : 0,
              fontSize:mdUp ? '2.5em !important' : '1.2em !important',
              width: mdUp ? '50%' : '100%'
              }}>
              <StyledSpan sx={{
                color: light ? theme.palette.common.main : theme.palette.primary.light,
              }}>{aboutData.span}</StyledSpan>{aboutData.title}
            </Typography>
          </m.div>
      <Grid container columnSpacing={{ md: 5 }} alignItems="center">
      {mdUp && (
              <Box sx={{
                width:'28em',
                height: '24em',
                backgroundImage: `url(${aboutData?.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                m: '0 1.5em'
              }} />
        )}
        <Grid xs={12} md={6} lg={6.5}>
          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'common.main' : 'common.white',
                p: 1,
                fontSize: mdUp ? '16px' : '14px',
              }}
            >
              {aboutData.descOne}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'common.main' : 'common.white',
                p: 1,
                fontSize: mdUp ? '16px' : '14px',
              }}
            >
              {aboutData.descTow}
            </Typography>
          </m.div>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: mdUp ?'flex-start' : 'center',
            gap: 1.5,
            p: '1em 0.5em',
          }} variants={varFade().inRight}>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href={aboutData.buttonOne && aboutData.buttonTow.link}
              target='_blank'
              sx={{
                borderRadius: '0',
                backgroundColor: 'blue',
                fontWeight: 'bold',
                color: '#fff',
                p: '1em 2em',
                maxHeight: '3em',
                border: '1px solid blue',
                '&:hover': { color: 'blue', border: '1px solid blue', backgroundColor: 'transparent'  },

              }}
            >
              {aboutData.buttonOne && aboutData.buttonOne.text}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              target='_blank'
              href={aboutData.buttonTow && aboutData.buttonTow.link}
              sx={{
                borderRadius: '0',
                fontWeight: 'bold',
                maxHeight: '3em',
                color: 'blue',
                p: '1em 2em',
                border: '1px solid blue',
                '&:hover': { backgroundColor: 'blue', color: '#fff', border: '1px solid blue',  },
              }}
            >
              {aboutData.buttonTow && aboutData.buttonTow.text}
            </Button>
          </Box>
        </Grid>
        
      </Grid>
    </Container>
  );
}


AboutWhat.propTypes = {
  data: PropTypes.object.isRequired
}
