import PropTypes from 'prop-types';
import { m, } from 'framer-motion';
import { varFade } from 'src/components/animate';
import { localStorageGetItem } from 'src/utils/storage-available';
import { useResponsive } from 'src/hooks/use-responsive';

import { Box, Button, Stack, Typography, alpha, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'


export const PlatformTransForms = ({data}) => {
  const [transformData, setTransformData] = useState({...data})
  const [list, setList] = useState([{}])
  const theme = useTheme()

  const lang = localStorageGetItem('i18nextLng')

  const mdUp = useResponsive('up', 'md');

  const light = theme.palette.mode === 'light'

  useEffect(() => {
    if (lang === 'en') {
      setTransformData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setTransformData({...data, ...data?.lang?.ar})
    }else if (lang === 'cr') {
      setTransformData({...data, ...data?.lang?.cr})
    }

  }, [data])

  useEffect(() => {
    setList(transformData?.list)
  }, [transformData?.list, transformData])

  const renderImg = (
    <Box
      component={m.img}
      src={transformData?.img}
      // variants={varFade().in}
      alt='Transformation Image'
      sx={{
        height: '100%',
        width: '30%',
        objectFit: 'cover',
        // position: 'absolute',
        // mb: mdUp ? '-6em' : '0',
        boxShadow: `-80px 80px 80px ${
          theme.palette.mode === 'light'
            ? alpha(theme.palette.grey[400], 0.48)
            : alpha(theme.palette.common.black, 0.24)
        }`,
      }}
    />
  );
  return (
    <Box
      sx={{
        p: '5em 3em',
        // width: '100%'
      }}
    >

    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent:mdUp ? 'space-evenly': 'center',
        flexDirection: mdUp ? 'row' : 'column'
      }}
    >

      <Box
      sx={{
      width: mdUp ? '45%' : '150%',
      display: mdUp ? 'block' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}
      >
      <m.div variants={varFade().in}>
      <Typography
          variant="h2"
          sx={{
            fontSize:mdUp ? '2.5em !important' : '1.2em !important',
            width: '80%' ,
            lineHeight: 1.1,
            color: light && theme.palette.common.main,
            mb: 2
          }}
        >
          {`${transformData?.title} `}
        </Typography>
        <Typography sx={{
          // mt: 3,
          fontWeight: '500',
          width: '75%',
          fontSize: 16,
          color: light && theme.palette.common.main,
          lineHeight: 1.5,
          textAlign: !mdUp ? 'center' : 'unset',
        }} variant="body2" >
          {transformData?.desc}
        </Typography>
      </m.div>
      <Box  sx={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: mdUp ? 'flex-start' : 'center',
        width: '100%',
        gap: 2,
        mt: 5,
        zIndex: 10000
      }}>
        {transformData?.button && <Button target='_blanc' href={transformData?.button?.link} sx={{
          // flexGrow: 0.45 ,
          backgroundColor: 'blue',
          borderRadius: 0,
          height: '3.2em',
          p: mdUp ? '1em 2em' : '2em',
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
          {transformData?.button?.text}
        </Button>}

      </Box>
      </Box>
      {mdUp && renderImg}
    </Box>
    </Box>

  )
}

PlatformTransForms.propTypes = {
  PlatformAvenues: PropTypes.object.isRequired
}
