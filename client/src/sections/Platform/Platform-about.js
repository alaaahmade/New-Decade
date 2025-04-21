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
import { useEffect, useState } from 'react';
import { localStorageGetItem } from 'src/utils/storage-available';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ColumnBux, ItemBox, RowBox } from '../../components/trusted';
//
import { useResponsive } from 'src/hooks/use-responsive';
import { endpoints, fetcher } from '../../utils/axios';

// ----------------------------------------------------------------------

export default function AboutPlatform({data}) {
  const [aboutData, setAboutData] = useState({})
  const [trusted, setTrusted] = useState('')
  const [list, setList] = useState([])
  const lang = localStorageGetItem('i18nextLng')
  const [globalRateList, setGlobalRateList] = useState([])
  const [rateList, setRateList] = useState([])


  const mdUp = useResponsive('up', 'md');

  useEffect( () => {
    const getData = async () => {
    const {data} = await fetcher([endpoints.rateList]);
    setGlobalRateList(data)
    }
     getData()
  }, [endpoints.rateList])

  useEffect(() => {
    if (lang === 'en') {
      setAboutData({...data, ...data?.lang?.en})
      setRateList(data?.lang?.en?.rateList)
      setList(data?.lang?.en?.propList)
    }else if (lang === 'ar') {
      setAboutData({...data, ...data?.lang?.ar})
      setRateList(data?.lang?.ar?.rateList)
      setList(data?.lang?.ar?.propList)

    }else if (lang === 'Kurdi') {
      setAboutData({...data, ...data?.lang?.cr})
      setRateList(data?.lang?.cr?.rateList)
      setList(data?.lang?.cr?.propList)

    }
  }, [data])
  const theme = useTheme();

  const light = theme.palette.mode === 'light'

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 7 },
        mb: mdUp ? 0 : -5,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          mb: { xs: 5, md: 0 },
        }}
      >
        <m.div style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }} variants={varFade().inDown}>
          <Typography variant="h3" sx={{
            fontSize:mdUp ? '2.5em !important' : '1.2em !important',
            mb: 2,
            color: theme.palette.primary.main
          }}>
            {aboutData?.titleOne} 
          </Typography>
          <Typography sx={{
          fontWeight: '500',
          width: mdUp ? '76%' :'100%',
          fontSize: 18,
          color: light ? theme.palette.common.main : '',
          lineHeight: 1.5,
          mt: 3,
          mb: 6
        }} variant="body2" >
          {aboutData.desc} 
        </Typography>
        <m.div style={{
        display: 'flex',
        width: '50%',
        height: '4.5em',
        alignItems: 'center',
        justifyContent: mdUp ? 'flex-start' : 'center',
        gap: '5%',
      }} variants={varFade().inDown}>
        {globalRateList.length > 0 && globalRateList.map(item => 
          (
            <Box key={item.id}
            sx={{
              width: '45%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100%',
              backgroundImage: `url(${item.img})`,
            }}/>
          )
        )}

      </m.div>
        </m.div>
          {rateList.length > 0  && (
            <Stack
              sx={{
                p: 10,
                mb: 0
              }}
            >
            <m.div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 15,
                width: '100%'
              }}
            >
              {rateList.map(item => 
                <Box
                  sx={{
                    width: '45%',
                    p: 2,
                    height: '6em',
                    boxShadow: light ? '1px 1px 50px #dedef875, -1px -1px 50px #dedef875' : '1px 1px 50px #5d5d5d, -1px -1px 50px #5d5d5d ',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                key={item.id}>
                  <Box
                  sx={{
                    width: '30%',
                    height:'100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    objectFit: 'contain',
                    backgroundImage: `url(${item.stars})`
                  }}
                  />
                  <Typography
                    sx={{
                      width: '65%',
                      textAlign: 'left'
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              )}
            </m.div>
          </Stack>
          )}
          <Stack
            sx={{
              p: 2,
              mt: 0
            }}
          >
          <Typography
            sx={{
              width: '100%',
              backgroundColor: '#501e67',
              height: '4em',
              p: 0,
              mt: -1,
              mb: 1.5,
              color: light ? '#fff' : '#000',
              fontWeight: 'bold',
              fontSize: '1.5em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'

            }}
          > 
            {aboutData.titleTow}
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5%'
            }}
          >
            {
              list?.length > 0 && (
                list.map(item => <Box
                  key={item.id}
                  sx={{
                    width: `${(100 / 12) * item.list.length}%`,
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      backgroundColor: '#dedef875',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      p: 3,
                      fontWeight: 'bold',
                      mb: 1.5
                    }}
                  >
                    <Typography>
                    {item.title.split(' ').splice(0 ,item.title.split(' ').length -1).join(' ')}
                    </Typography>
                    <Typography>
                    {item.title.split(' ').splice(item.title.split(' ').length -1).join(' ')}
                    </Typography>
                  </Box>
                  <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 0.8
                  }}
                  >
                    {item?.list?.length> 0 && (
                      item?.list?.map(element => (
                        <Box
                        key={element.id}
                        sx={{
                          backgroundColor: '#dedef875',
                          m: 0,
                          width: `${(100 / item.list.length)}%`,
                          height: '10em',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Box
                          component={'img'}
                          src={element.img}
                          sx={{
                            p: 2
                          }}
                        /> 
                          {
                            element?.name?.split(' ').map(word => <Typography
                              sx={{
                                fontSize:'12px',
                                
                              }}
                            >{word}</Typography>)
                          }
                      </Box>
                      ))
                    )}

                  </Box>
                </Box>)
              )
            }
            
          </Box>
          <Box
            component={'img'}
            sx={{
              width: '100%',

            }}
            alt='certificatesLine'
            src={aboutData?.certificatesLine}
          />
          </Stack>
      </Stack>
    </Container>
  );
}

AboutPlatform.propTypes = {
  data: PropTypes.object.isRequired
}
