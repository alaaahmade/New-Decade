import { m } from 'framer-motion';
import PropTypes from 'prop-types';
// @mui
import { useTheme, alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
import { textGradient, bgGradient } from 'src/theme/css';
// routes
import { paths } from 'src/routes/paths';
// components
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import { useEffect, useState } from 'react';
import { localStorageGetItem } from 'src/utils/storage-available';

// ----------------------------------------------------------------------

const StyledSpan = styled('span')(({theme}) => ({
  color: theme.palette.mode === 'light' ? 'common.main' : 'common.white',
}))


export default function PlatFormEdge({data}) {
  const [edgeData, setEdgeData] = useState({...data})
  const [list, setList] = useState([])
  const lang = localStorageGetItem('i18nextLng')

  useEffect(() => {
    if (lang === 'en') {
      setEdgeData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setEdgeData({...data, ...data?.lang?.ar})
    }else if (lang === 'Kurdi') {
      setEdgeData({...data, ...data?.lang?.cr})
    }
  }, [data])
  useEffect(() =>{
    setList(edgeData?.list)
  }, [edgeData, edgeData?.list])
  const [text, setText] = useState('Modular')
  const theme = useTheme();

  const light = theme.palette.mode === 'light'

  const upMd = useResponsive('up', 'md');
  const renderImg = (
    <Box
      component={m.img}
      src={list?.length > 0 && list?.filter(e => e.name === text)[0]?.img}
      sx={{
        height: 1,
        width: '50%',
        objectFit: 'cover',
      }}
    />
  );
  const renderDescriptionWithTitle = (
    <Box sx={{ textAlign: { xs: 'center', md: 'unset' }, mt: { xs: 20, md: 15 }, pb: 10  }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          mt: -8
        }} variants={varFade().inDown}>
          <Typography variant="h3" sx={{
            fontSize: upMd ? '2.5em !important' : '1.2em !important',
          }}>
            {edgeData?.title}
          </Typography>
        </Box>

      <Box sx={{
        width: '100%',
        mt: upMd ? 8 : 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 5,
        pt: 0,
        pb: 0
      }} variants={varFade().inUp}>
        {list?.length > 0 && list?.map((item, i) => (
          <Button sx={{
            // width: '12%',
            p: '1.5em 4em',
            borderRadius: 0,
            backgroundColor: text === item.name ? '#959595' : light ? '#ccc' : '#4e4e4e',
            // height: '3.5em',
            fontSize: upMd ? '0.8em' : '0.6em' 
          }}
          kye={item.name}
          onClick={() => setText(item.name)}
          >{item.name}</Button>
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          mt: upMd ? 8 : 5,
        }}
      >
      <Box sx={{ width: {sm: '100%', md: '40%', lg: '40%'}, }} variants={varFade().inUp}>


          <Typography sx={{
            width: '100%',
            fontSize: upMd ? '1em' : '0.8em' 
          }} variant='h4'>
            {list?.length > 0 && list?.filter(e => e.name === text)[0]?.name}
          </Typography>
          <Typography sx={{
            width: '100%',
            fontSize: upMd ? '17px' : '14px',
            mt: 2,

          }} variant='body2'>
            {list?.length > 0 && list?.filter(e => e.name === text)[0]?.desc}
          </Typography>
      </Box>
          


          {upMd && renderImg}
      </Box>

      
    </Box>
  );



  return (
    <Box
      sx={{
        minHeight: 560,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Container component={MotionViewport}>
            {renderDescriptionWithTitle}
      </Container>
    </Box>
  );
}

PlatFormEdge.propTypes = {
  data: PropTypes.object.isRequired
}