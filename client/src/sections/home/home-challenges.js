import PropTypes from 'prop-types';
import { m, } from 'framer-motion';
import { varFade } from 'src/components/animate';
import { localStorageGetItem } from 'src/utils/storage-available';
import { useResponsive } from 'src/hooks/use-responsive';

import { Box, Button, Stack, Typography, alpha, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'


export const HomeChallenges = ({data}) => {
  const [challengesData, setChallengesData] = useState({...data})
  const [list, setList] = useState([{}])
  const theme = useTheme()

  const lang = localStorageGetItem('i18nextLng')

  const mdUp = useResponsive('up', 'md');

  const light = theme.palette.mode === 'light'

  useEffect(() => {
    if (lang === 'en') {
      setChallengesData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setChallengesData({...data, ...data?.lang?.ar})
    }else if (lang === 'cr') {
      setChallengesData({...data, ...data?.lang?.cr})
    }

  }, [data])

  useEffect(() => {
    setList(challengesData?.list)
  }, [challengesData?.list, challengesData])

  const renderImg = (
    <Box
      component={m.img}
      src={challengesData?.img}
      // variants={varFade().in}
      sx={{
        height: '100%',
        width: '40%',
        objectFit: 'cover',
        // position: 'absolute',
        mb: mdUp ? '-6em' : '0',
        boxShadow: `-80px 80px 80px ${
          theme.palette.mode === 'light'
            ? alpha(theme.palette.grey[500], 0.48)
            : alpha(theme.palette.common.black, 0.24)
        }`,
      }}
    />
  );
  return (
    <Box
      sx={{
        p: '3em 1em',
      }}
    >
            <Typography
          variant="h2"
          sx={{
            fontSize:mdUp ? '2.5em !important' : '1.2em !important',
            width: '100%' ,
            color: light && theme.palette.common.main,
            textAlign:'center'
          }}
        >
          {`${challengesData?.titleOne} `}
          <span style={{color: theme.palette.primary.blue}}>
            {challengesData?.span}
            </span>{challengesData?.titleTow}
        </Typography>
    <Box
      sx={{
        width: mdUp ? 'calc(100% - 15em)' : '80%',
        m: mdUp ? '3em' : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent:mdUp ? 'space-evenly': 'center',
        flexDirection: mdUp ? 'row' : 'column'
      }}
    >

      <Box
      sx={{
      width: mdUp ? '50%' : '100%',
      display: mdUp ? 'block' : 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}
      >
      <m.div variants={varFade().in}>
        <Typography sx={{
          mt: 3,
          fontWeight: '500',
          width: mdUp ? '85%' : '100%',
          fontSize: 16,
          color: light && theme.palette.common.main,
          lineHeight: 1.5,
          textAlign: !mdUp ? 'center' : 'unset'
        }} variant="body2" >
          {challengesData?.descOne}
        </Typography>
        <ul
        style={{
          margin: '1em 2em'
        }}
        >
          {list?.length > 0 && list?.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </m.div>

        <Typography sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1.5,
            fontWeight: '500',
            width: '90%',
            fontSize: 16,
            color: light && theme.palette.common.main,
            lineHeight: 1.5,
            mt: 2.5,
            textAlign: !mdUp ? 'center' : 'unset'

        }} variant="body2" align='left' >
          {challengesData?.descTow}
          <m.div variants={varFade().in}>
      </m.div>
        </Typography>
      <Box  sx={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: mdUp ? 'flex-start' : 'center',
        width: '100%',
        gap: 2,
        mt: 5,
        zIndex: 10000
      }}>
        {challengesData?.buttonOne && <Button sx={{
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
          {challengesData?.buttonOne?.text}
        </Button>}
        {challengesData?.buttonTow && <Button sx={{
          // flexGrow: 0.3,
          border: '1px solid blue',
          height: '3.2em',
          borderRadius: 0,
          fontWeight: 'bold',
          color: 'blue',
          p: mdUp ? '1em 2em' : '2em',
          fontSize: '1em',
          '&:hover': {
            color: '#fff',
            backgroundColor: 'blue',
            border: '1px solid blue',
            outline: 0,
          }
        }}>
          {challengesData?.buttonTow?.text}
        </Button>}

      </Box>
      </Box>
      {mdUp && renderImg}
    </Box>
    </Box>

  )
}

HomeChallenges.propTypes = {
  HomeAvenues: PropTypes.object.isRequired
}
