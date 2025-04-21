import { m } from 'framer-motion';
import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { localStorageGetItem } from 'src/utils/storage-available';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------


export default function PlatformConvert({data}) {
  const theme = useTheme();
  const [convertData, setConvertData] = useState({...data})
  const lang = localStorageGetItem('i18nextLng')

  const mdUp = useResponsive('up', 'md');

  const light = theme.palette.mode === 'light'

  useEffect(() => {
    if (lang === 'en') {
      setConvertData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setConvertData({...data, ...data?.lang?.ar})
    }else if (lang === 'Kurdi') {
      setConvertData({...data, ...data?.lang?.cr})
    }

  }, [data])


  const renderContent = (
    <Stack sx={{p: '5em 0'}} component={m.div} variants={varFade().inUp} alignItems="center">
      <Typography align='center' sx={{
        width: mdUp ? '60%' : '100%',
        fontSize:mdUp ? '2.5em !important' : '1.2em !important !importantv',
        color: light ? theme.palette.common.main : '',
        mb: '0.8em',
        lineHeight: 1.1
      }} variant='h3'>
        {convertData?.title} 
        </Typography>
        {convertData?.button && <Button target='_blanc' href={convertData?.button?.link} sx={{
          // flexGrow: 0.45 ,
          backgroundColor: 'blue',
          m: 0,
          borderRadius: 0,
          height: '3.2em',
          p: mdUp ? '1em 2em' : '2.2em',
          color: '#fff',
          fontSize: '1em',
          fontWeight: 'bold',
          '&:hover': {
            color: 'blue',
            backgroundColor: 'transparent',
            border: '1px solid blue',
            outline: 0,
          }
        }}>
          {convertData?.button?.text}
        </Button>}
    </Stack>
  );

  return (
    <Container component={MotionViewport}>
      <Box
        alignItems="center"
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          width: mdUp ? '100%': '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        {renderContent}

        {/* {renderDescription} */}
      </Box>
    </Container>
  );
}

PlatformConvert.propTypes = {
  PlatformAvenues: PropTypes.object.isRequired
}