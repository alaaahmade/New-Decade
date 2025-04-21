import { m } from 'framer-motion';
import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import { Box, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { localStorageGetItem } from 'src/utils/storage-available';

// ----------------------------------------------------------------------

export default function CustomerWords({data}) {
  const [wordsData, setWordsData] = useState({...data})
  const [list, setList] = useState([])
  const [rateOne, setRateOne] = useState('')
  const [rateTow, setRateTow] = useState('')

  const lang = localStorageGetItem('i18nextLng')

  useEffect(() => {
    if (lang === 'en') {
      setWordsData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setWordsData({...data, ...data?.lang?.ar})
    }else if (lang === 'cr') {
      setWordsData({...data, ...data?.lang?.cr})
    }
    setRateOne(data.rateOne)
    setRateTow(data.rateTow)

  }, [data])
  
  useEffect(() => {
    setList(wordsData?.words)
  },[wordsData, wordsData?.words])

  const mdUp = useResponsive('up', 'md');
  const theme = useTheme()

  const light = theme.palette.mode === 'light'

  const renderBtn = (
    <m.div style={{
      margin: mdUp ? '2.5em 0 0 0' : '0 0 4em 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: mdUp ? 'flex-start' : 'center',
      gap: '2em',
      width: '100%',
    }} variants={varFade().inDown}>
    <Button
      color="inherit"
      variant="outlined"
      size='large'
      target="_blank"
      rel="noopener"
      href="/"
      sx={{
        width: '45%',
        borderRadius: 0,
        color: '#fff',
        backgroundColor: 'blue',
        border: 0,
        outline: 0,
        '&:hover': {
          color: 'blue',
          backgroundColor: 'transparent',
          border: '1px solid blue',
          outline: 0,
        }
      }}
      endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
    >
      {wordsData?.buttonOne?.text}
    </Button>
    <Button
      color="inherit"
      variant="outlined"
      size='large'
      target="_blank"
      rel="noopener"
      href="/"
      sx={{
        width: '35%',
        borderRadius: 0,
        color: 'blue',
        border: '1px solid blue',
        backgroundColor: 'transparent',
        '&:hover': {
          color: '#fff',
          backgroundColor: 'blue',
          border: 0
        }
      }}
      endIcon={<Iconify icon="eva:arrow-ios-forward-fill" />}
    >
      {wordsData?.buttonTow && wordsData?.buttonTow?.text}
    </Button>
    </m.div>
  );

  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'left',
        },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            mt: mdUp ? -10 : -3,
            mb: { md: 5, },
            color: light && theme.palette.common.main,
            fontSize:mdUp ? '2.5em !important' : '1.2em !important',
          }}
        >
              {wordsData?.title} 
               <span style={{
          color: theme.palette.primary.orange
         }}> {wordsData?.span}</span> 
        </Typography>
        <Typography sx={{
          mt: mdUp ? -1 : 2,
          fontSize: '18px',
          mb: '1.5em'
        }} variant='body2'>
          {wordsData?.disc}</Typography>
      </m.div>
      <m.div style={{
        display: 'flex',
        width: '100%',
        height: '4.5em',
        alignItems: 'center',
        justifyContent: mdUp ? 'flex-start' : 'center',
        gap: '5%',
      }} variants={varFade().inDown}>
      <Box sx={{
          width: '45%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100%',
          backgroundImage: `url(${rateOne})`,
        }}/><Box sx={{
          width: '45%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100%',
          backgroundImage: `url(${rateTow})`,
        }}/>
      </m.div>

      {mdUp &&  renderBtn}
    </Stack>
  );

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 12 },
        mb: -10
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
        <Grid xs={15} md={5}>
          { wordsData &&  renderDescription }
        </Grid>

        <Grid xs={12} md={7}>
          <Box sx={{
            minHeight: '90vh',
            maxHeight: '110vh',
            // maxWidth: '40em',
            width: mdUp ? '37em' : '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflowX: 'scroll',
            p: '1em !important',
            zIndex: 10000,
            mb: mdUp ? 10 : 0,
            gap: 2,
          }} variants={varFade().inUp}>
            {list?.length && list?.map(e => (
              <Box
              key={e.id}
              sx={{
                height: '100vh',
                minWidth: '16em',
                width: '16em',
                boxShadow: light ? '1px 1px 10px #ccc' : '1px 1px 10px #000',
                position: 'relative',
                p: '2.5em',
                // border: '0.5px solid #ccc',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
              }}
              >
                <Box
                sx={{
                  position: 'absolute',
                  top: -15,
                  left: '20%'
            }}>
            <Image  disabledEffect alt="coma" src="/assets/images/aword/quotation-mark.svg" />
                </Box>
                <Box 
                  sx={{
                    maxWidth: '50%',
                    maxHeight: '6em',
                    height: '6em',
                    minHeight: '6em',
                    width: '50%',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${e.image})`,
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              <Typography sx={{m: '1em 0'}} variant='body2'>
                {e.paragraph}
              </Typography>
              <Box>
              <Typography sx={{fontWeight: 'bold'}} variant='body2' >{e.name}</Typography>
              <Typography  variant='body2' >{e.nickname}</Typography>
              </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {!mdUp && (
          <Grid xs={12} sx={{ textAlign: 'center' }}>
            {renderBtn}
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

CustomerWords.propTypes = {
  data: PropTypes.object.isRequired
}