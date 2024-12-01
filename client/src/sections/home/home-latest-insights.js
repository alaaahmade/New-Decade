import { Box, Button, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { localStorageGetItem } from 'src/utils/storage-available';
import { useResponsive } from 'src/hooks/use-responsive';


const HomeLatestInsights = ({data}) => {
  const theme = useTheme()
  const [insightsData, setInsightsData] = useState({...data})
  const [list, setList] = useState([])

  const lang = localStorageGetItem('i18nextLng')
  const mdUp = useResponsive('up', 'md');

  const light = theme.palette.mode === 'light'

  useEffect(() => {
    if (lang === 'en') {
      setInsightsData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setInsightsData({...data, ...data?.lang?.ar})
    }else if (lang === 'cr') {
      setInsightsData({...data, ...data?.lang?.cr})
    }

  }, [data])
  useEffect(() => {
    setList(insightsData?.insights)
  }, [insightsData?.insights, insightsData])
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: light ? '#f8f9fb' : '#4e4e4e',
        p: mdUp ? '5em 7em' : '2em',
      }}
    >
      <Typography align='center' sx={{
        width: '100%',
        fontSize: mdUp ? '2.5em !important' : '1.2em !important',
        color:light && theme.palette.common.main,
        mb: '1.5em'
      }} variant='h3'>
        {insightsData?.title} 
        <span style={{color: theme.palette.primary.blue}}>
          {` ${insightsData?.span}`}
          </span>
        </Typography>
        {mdUp && <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {list?.length > 0 && list?.map(item => (
            <Box
              key={item.id}
              sx={{
                width: '23%',
                // boxShadow: '1px 1px 5px #ccc',
                backgroundColor: light ? '#fff' : theme.palette.background.default,
                height: '28em',
                display: 'flex',
                alignItems: 'space-between',
                justifyContent: 'space-between',
                flexDirection: 'column',
                m: 0,
                p: 0
              }}
            >
              <Box
                sx={{
                  width: '100% !important',
                  height: '10em !important',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100%',
                  objectFit: 'contain',
                  backgroundImage: `url(${item.img})`,
                  m: 0,
                  p: 0,
                  mt: -0.5,
                  ml: -0.1111
                }}
              />
              <Box
                sx={{
                  p: '1.5em 1em',
                  height: '18em',
                  width: '100% !important',
                  display: 'flex',
                  alignItems: 'space-between',
                  justifyContent: 'space-between',
                  flexDirection: 'column'
                }}
              >
              <Box
                sx={{
                  width: '100%',
                  mb: 1
                }}
              >
              <Typography sx={{fontWeight: 'bold', fontSize: '14px', mb: 1.5}} variant='body2'>{item.title}</Typography>
              <Typography sx={{fontWeight: 'bolder', fontSize: '1.3em'}} variant='body2'>{item.description}</Typography>
              </Box>
              <Button
                href={item.link}
                sx={{
                  borderRadius: '0',
                  color: '#fff',
                  backgroundColor: 'blue',
                  p: '1em 3em',
                  fontWeight: 'bold',
                  '&:hover' : {
                  color: 'blue',
                  }
                }}
              >Download</Button>
              </Box>
            </Box>
          ))}
        </Box>}
        {!mdUp && <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1em',
            flexWrap: 'wrap'
          }}
        >
          {list?.length > 0 && list?.map(item => (
            <Box
              key={item.id}
              sx={{
                width: '47%',
                // boxShadow: '1px 1px 5px #ccc',
                backgroundColor: light ? '#fff' : theme.palette.background.default,
                p: '1.5em 1em',
                height: '20em',
                display: 'flex',
                alignItems: 'space-between',
                justifyContent: 'space-between',
                flexDirection: 'column'
              }}
            >
              <Box
              component={'img'}
              src={item.img}
                sx={{
                  width: '100%',
                }}
              />
              <Box
                sx={{
                  width: '100%',
                  mb: 1
                }}
              >
              <Typography sx={{fontWeight: 'bold', fontSize: '12px', mb: 1.5}} variant='body2'>{item.title}</Typography>
              <Typography sx={{fontWeight: 'bolder', fontSize: '0.8em'}} variant='body2'>{item.description}</Typography>
              </Box>
              <Button
                sx={{
                  borderRadius: '0',
                  color: theme.palette.primary.contrastText,
                  backgroundColor: 'blue',
                  p: '1em 3em',
                  fontWeight: 'bold'
                }}
              >Download</Button>
            </Box>
          ))}
        </Box>}
    </Box>
  )
}

export default HomeLatestInsights
