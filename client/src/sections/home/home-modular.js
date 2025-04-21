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


export default function HomeModular({data}) {
  const [designerData, setDesignerData] = useState({...data})
  const [list, setList] = useState([])
  const lang = localStorageGetItem('i18nextLng')

  useEffect(() => {
    if (lang === 'en') {
      setDesignerData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setDesignerData({...data, ...data?.lang?.ar})
    }else if (lang === 'Kurdi') {
      setDesignerData({...data, ...data?.lang?.cr})
    }
  }, [data])
  useEffect(() =>{
    setList(designerData?.apps)
  }, [designerData, designerData?.apps])
  const [text, setText] = useState('Fulfillment')
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
        boxShadow: `-80px 80px 80px ${
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
            {designerData?.titleOne} <StyledSpan sx={{
              color: light ? theme.palette.common.main : theme.palette.primary.light,
            }}>{designerData?.span}</StyledSpan> {designerData?.titleTow}
          </Typography>
          <Typography variant='body2' align='center' sx={{fontSize: upMd ? '16px' : '14px', width: '77%', pt: 0.7, mt: 1.5}} >
            {designerData?.descOne}
            </Typography>
            <Typography variant='body2' align='center' sx={{fontSize: upMd ? '16px' : '14px', width: '77%', pt: 0.7, mt: 1}} >
            {designerData?.descTow}
            </Typography>
        </Box>

      <Box sx={{
        width: '100%',
        mt: upMd ? 8 : 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }} variants={varFade().inUp}>
        {list?.length > 0 && list?.map((item, i) => (
          <Button 
            key={item.name}
          sx={{
            
            width: '15%',
            borderRadius: 0,
            backgroundColor: text === item.name ? '#959595' : light ? '#ccc' : '#4e4e4e',
            height: '3.5em',
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
            {list?.length > 0 && list?.filter(e => e.name === text)[0]?.title}
          </Typography>
          <Typography sx={{
            width: '100%',
            fontSize: upMd ? '17px' : '14px',
            mt: 2,

          }} variant='body2'>
            {list?.length > 0 && list?.filter(e => e.name === text)[0].descOne}
          </Typography>
          <Typography sx={{
            width: '100%',
            fontSize: upMd ? '17px' : '14px',
            mt: 2
          }} variant='body2'>
            {list?.length > 0 && list?.filter(e => e.name === text)[0].descTow}
          </Typography>
          <Box  sx={{
            width: '100%',
            mt: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: upMd ? 'flex-start' : 'center',
            gap: 3,
          }}>
            <Button
              sx={{
                height: '3.5em',
                width: '10em',
                backgroundColor: 'blue',
                color: '#fff',
                borderRadius: '0',
                border: '1px solid blue',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: 'blue',
                }
              }}
            >
              {list?.length > 0 && list?.filter(e => e.name === text)[0].buttonOne.text}
            </Button>
            <Button
              sx={{
                height: '3.5em',
                width: '10em',
                backgroundColor: 'transparent',
                color: 'blue',
                borderRadius: '0',
                border: '1px solid blue',
                '&:hover': {
                  backgroundColor: 'blue',
                  color: '#fff',
                }
              }}
            >{list?.length > 0 && list?.filter(e => e.name === text)[0].buttonTow.text}</Button>
          </Box>
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
        ...bgGradient({
            color: alpha(theme.palette.common.main, 0),
        
            imgUrl: light && '/assets/background/overlay_4.jpg',

          }),
        ...(upMd && {
          ...bgGradient({
            color: alpha(theme.palette.common.main, 0),
            imgUrl: light &&  '/assets/background/overlay_4.jpg',
          }),
        }),
      }}
    >
      <Container component={MotionViewport}>
            {renderDescriptionWithTitle}
      </Container>
    </Box>
  );
}

HomeModular.propTypes = {
  data: PropTypes.object.isRequired
}