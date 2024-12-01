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


export default function PlatformForAll({data}) {
  const [forAllData, setForAllData] = useState({...data})
  const [list, setList] = useState([])
  const lang = localStorageGetItem('i18nextLng')

  useEffect(() => {
    if (lang === 'en') {
      setForAllData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setForAllData({...data, ...data?.lang?.ar})
    }else if (lang === 'cr') {
      setForAllData({...data, ...data?.lang?.cr})
    }
  }, [data])
  useEffect(() =>{
    setList(forAllData?.list)
  }, [forAllData, forAllData?.list])
  const [text, setText] = useState('Fulfillment Automation')
  const theme = useTheme();

  const light = theme.palette.mode === 'light'

  const upMd = useResponsive('up', 'md');
  const renderImgOne = (
    <Box
      component={m.img}
      src={list?.length > 0 && list?.filter(e => e.name === text)[0]?.imgOne}
      sx={{
        height: 1,
        width: '50%',
        objectFit: 'cover',
        boxShadow: `-80px 80px 80px ${
          theme.palette.mode === 'light'
            ? alpha(theme.palette.grey[500], 0.48)
            : alpha(theme.palette.common.black, 0.24)
        }`,
      }}
    />
  );

  const renderImgTow = (
    <Box
      component={m.img}
      src={list?.length > 0 && list?.filter(e => e.name === text)[0]?.imgTow}
      sx={{
        height: 1,
        width: '50%',
        objectFit: 'cover',
        boxShadow: `80px 80px 80px ${
          theme.palette.mode === 'light'
            ? alpha(theme.palette.grey[500], 0.48)
            : alpha(theme.palette.common.black, 0.24)
        }`,
      }}
    />
  );
  const renderDescriptionWithTitle = (
    <Box sx={{ textAlign: { xs: 'center', md: 'unset' }, mt: { xs: 20, md: 20 }, pb: 10  }}>
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
            {forAllData?.title}
          </Typography>
        </Box>



      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 1,
          width: '100%',
          mt: upMd ? 8 : 5,
        }}
      >
      <Box sx={{
        width: '30%',
        mt: upMd ? 0 : 5,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1.5
      }} variants={varFade().inUp}>
        {list?.length > 0 && list?.map((item, i) => (
          <Button sx={{
            width: '100%',
            borderRadius: 0,
            backgroundColor: text === item.name ? '#d6b7db' : light ? '#e8dde6' : '#4e4e4e',
            height: '5em',
            fontSize: upMd ? '0.9em' : '0.6em',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#d6b7db'
            }
          }}
          kye={item.name}
          onClick={() => setText(item.name)}
          >{item.name}</Button>
        ))}
      </Box>
      <Box sx={{ width: {sm: '100%', md: '60%', lg: '60%'}, }} variants={varFade().inUp}>
          <Typography sx={{
            width: '100%',
            fontSize: upMd ? '1em' : '0.8em' 
          }} variant='h4'>
            {list?.length > 0 && list?.filter(e => e.name === text)[0]?.title}
          </Typography>
          <Typography sx={{
            width: '100%',
            fontSize: upMd ? '17px' : '14px',

          }} variant='body2'>
            {list?.length > 0 && list?.filter(e => e.name === text)[0]?.descOne}
          </Typography>
          <Typography sx={{
            width: '100%',
            fontSize: upMd ? '17px' : '14px',
            mt: 2
          }} variant='body2'>
            {list?.length > 0 && list?.filter(e => e.name === text)[0]?.descTow}
          </Typography>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              mt: 5
            }}
          >
          {upMd && renderImgOne}
          <Box
          sx={{
            position: 'absolute',
            top: '25%',
            width: '100%',
            left: '40%'
          }}
            >
          {upMd && renderImgTow}
          </Box>
          </Box>
      </Box>
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

PlatformForAll.propTypes = {
  data: PropTypes.object.isRequired
}