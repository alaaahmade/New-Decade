import { m } from 'framer-motion';
import PropTypes from 'prop-types';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import {AvenuesCard} from 'src/components/avenues'
import { useEffect, useState } from 'react';
import { localStorageGetItem } from 'src/utils/storage-available';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function HomeAvenues({data}) {
  const [avenuesData, setAvenuesData] = useState({})
  const [avenues, setAvenues] = useState('')
  const lang = localStorageGetItem('i18nextLng')

  const upMd = useResponsive('up', 'md');

  useEffect(() => {
    if (lang === 'en') {
      setAvenuesData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setAvenuesData({...data, ...data?.lang?.ar})
    }else if (lang === 'Kurdi') {
      setAvenuesData({...data, ...data?.lang?.cr})
    }
  }, [data])
  useEffect(()=> {
    if(avenuesData?.Avenues){
      setAvenues(avenuesData?.Avenues[0]?.name)
    }
  }, [avenuesData, avenuesData?.Avenues])

  const theme = useTheme();

  const light = theme.palette.mode === 'light'

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 8.5 },
        mb: 15,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }} variants={varFade().inDown}>
          <Typography variant="h3" sx={{
            fontSize:upMd ? '2.5em !important' : '1.2em !important',
          }}>
            {avenuesData?.titleOne} <span style={{
              color: '#0098ff'
            }}>{avenuesData?.span}</span> {avenuesData?.titleTow}
          </Typography>
          <Typography variant='body2' sx={{fontSize: upMd ? '16px' : '14px', width: upMd ? '55%' : '80%', pt: 0.7}} >
            {avenuesData?.desc}
            </Typography>
        </m.div>
      </Stack>

      <Box
        sx={{
          position: 'relative',
          border: '1px dashed #000',
          height: upMd ? '20.5em' : '20em',
          m: '0 1em',
          mt: upMd ? 15 : 0,
          display: 'flex',
        }}
      >
        {!upMd && (
          <Box sx={{
            width:'80%',
            height: '8em',
            backgroundImage: `url(${avenuesData?.Avenues?.filter(e => e.name === avenues)[0]?.descImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            m: '1.5em 0',
            borderRadius: '4px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
          )}
        <Box  sx={{
          width: '100%',
          height: '14em',
          position: 'absolute',
          top: upMd ? '-25%' : '-26%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}>
          {avenuesData?.Avenues?.length > 0 &&  avenuesData?.Avenues?.map((item, i) => (
            <AvenuesCard
            key={item.id}
            text={item.name}
            textColor={item.color}
            img={item.img}
            setAvenues={setAvenues}
            avenues={avenues}
            />
          ))}
      </Box>

      <Box
        sx={{
          backgroundColor: light ? '#fff' : '#4e4e4e',
          width: upMd ? '70%' : '90%',
          minHeight: '50%',
          position: upMd ? 'absolute' : 'relative',
          bottom: upMd ? '-35%' : '-65%',
          left: upMd ? '50%' : '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: upMd ? 'flex-start' : 'center',
          justifyContent: upMd ? 'flex-end' : 'center',
          mt: upMd ? 0: 10
        }}
      >
        {upMd && (
          <Box sx={{
            width:'50%',
            height: '13em',
            backgroundImage: `url(${avenuesData?.Avenues?.filter(e => e.name === avenues)[0]?.descImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            m: '0 1.5em',
            borderRadius: '4px'
          }} />
          )}
        <Box
          sx={{
            width: upMd ? '50%' : '100%',
            p: 2,
            pt: 0,
            mt: upMd ? -1 : -10
          }}
        >
          <Typography
          variant='h4'
          sx={{
            textAlign: !upMd  && 'center',
            fontWeight: 'bold',
            color: theme.palette.mode === 'light' ? 'common.main' : 'common.white',
            fontSize: !upMd && '14px'
            }}>{avenuesData?.Avenues?.filter(e => e.name === avenues).length > 0 && avenuesData?.Avenues?.filter(e => e.name === avenues)[0].title}
            </Typography>
            <Typography
          variant='body2'
          sx={{
            color: theme.palette.mode === 'light' ? 'common.main' : 'common.white',
            mt: 1,
            textAlign: !upMd  && 'center',
            }}>{avenuesData?.Avenues?.filter(e => e.name === avenues).length > 0 && avenuesData?.Avenues?.filter(e => e.name === avenues)[0].desc}</Typography>
        </Box>
      </Box>
      </Box>
    </Container>
  );
}

HomeAvenues.propTypes = {
  data: PropTypes.object
}
