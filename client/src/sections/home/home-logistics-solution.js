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


export default function HomeLogisticsSolution({data}) {
  const theme = useTheme();
  const [solutionsData, setSolutionsData] = useState({...data})
  const [solutions, setSolutions] = useState([])

  const lang = localStorageGetItem('i18nextLng')

  const mdUp = useResponsive('up', 'md');

  const light = theme.palette.mode === 'light'

  useEffect(() => {
    if (lang === 'en') {
      setSolutionsData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setSolutionsData({...data, ...data?.lang?.ar})
    }else if (lang === 'cr') {
      setSolutionsData({...data, ...data?.lang?.cr})
    }

  }, [data])
  useEffect(() => {
    setSolutions(solutionsData.solutions)
  }, [solutionsData, solutionsData?.solutions])

  const renderSolutions = (
    <Box
    sx={{
      width: '100%',
      p: mdUp ? '0 5em' : 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: mdUp ? 'row': 'column'
    }}
  >
    {mdUp && solutions?.length > 0 && solutions?.map(item => (
      <Box
        key={item.id}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant='h3' sx={{color: item.color,fontSize: '2.5em !important',}}>{item.num}</Typography>
        <Typography variant='body2' sx={{fontWeight: 'bold', fontSize: '1em'}} >{item.title}</Typography>
        <Typography variant='body2' sx={{fontSize: '1em', color: '#9a9696'}} >---------------------</Typography>
      </Box>
    ))}

  {!mdUp && solutions?.length > 0 && 
        <>
        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
        {solutions.slice(0, 2)?.map(item => (
        <Box
          key={item.id}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            width: '10em'
          }}
        >
          <Typography variant='h3' sx={{color: item.color,fontSize: '1.2em !important',}}>{item.num}</Typography>
          <Typography variant='body2' sx={{fontWeight: 'bold', fontSize: '0.7em'}} >{item.title}</Typography>
          <Typography variant='body2' sx={{fontSize: '1em', color: '#9a9696'}} >---------------------</Typography>
        </Box>
      )
      )}
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
          }}
        >
       {solutions.slice(2, ).map(item => (
        <Box
        key={item.id}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexDirection: 'column',
          width: '10em'
        }}
      >
        <Typography variant='h3' sx={{color: item.color,fontSize: '1.2em !important',}}>{item.num}</Typography>
        <Typography variant='body2' sx={{fontWeight: 'bold', fontSize: '0.7em'}} >{item.title}</Typography>
        <Typography variant='body2' sx={{fontSize: '1em', color: '#9a9696'}} >---------------------</Typography>
      </Box>
      ))}
      </Box>
        </>
      }

  </Box>
  );

  const renderTitle = (
    <Stack sx={{p: '5em 0'}} component={m.div} variants={varFade().inUp} alignItems="center">
      <Typography align='center' sx={{
        width: mdUp ? '80%' : '100%',
        fontSize:mdUp ? '2.5em !important' : '1.2em !important !importantv',
        color: light ? theme.palette.common.main : '',
        mb: '1.5em',
      }} variant='h3'>
        {solutionsData?.titleOne} 
        <span style={{color: theme.palette.primary.orange}}>
          {solutionsData?.span}
          </span>
           {solutionsData?.titleTow}
        </Typography>
        {renderSolutions}
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
        {renderTitle}

        {/* {renderDescription} */}
      </Box>
    </Container>
  );
}

HomeLogisticsSolution.propTypes = {
  HomeAvenues: PropTypes.object.isRequired
}