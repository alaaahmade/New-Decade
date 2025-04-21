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
import { Fragment, useEffect, useState } from 'react';
import { localStorageGetItem } from 'src/utils/storage-available';
import { Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ColumnBux, ItemBox, RowBox } from '../../components/trusted';
//
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

export default function HomeTrusted({data}) {
  const [trustedData, setTrustedData] = useState({})
  const [trusted, setTrusted] = useState('')
  const [list, setList] = useState([])
  const lang = localStorageGetItem('i18nextLng')

  const mdUp = useResponsive('up', 'md');


  useEffect(() => {
    if (lang === 'en') {
      setTrustedData({...data, ...data?.lang?.en})
      setList(prev => ([
        ...prev,
        {...data?.lang?.en?.listOne, list: data.listOne},
        {...data?.lang?.en?.listTow, list: data.listTow},
        {...data?.lang?.en?.listThree, list: data.listThree},
        {...data?.lang?.en?.listFour, list: data.listFour},
      ]))
    }else if (lang === 'ar') {
      setTrustedData({...data, ...data?.lang?.ar})
      setList(prev => ([
        ...prev,
        {...data?.lang?.ar?.listOne, list: data.listOne},
        {...data?.lang?.ar?.listTow, list: data.listTow},
        {...data?.lang?.ar?.listThree, list: data.listThree},
        {...data?.lang?.ar?.listFour, list: data.listFour},
      ]))
    }else if (lang === 'cr') {
      setTrustedData({...data, ...data?.lang?.cr})
      setList(prev => ([
        ...prev,
        {...data?.lang?.cr?.listOne, list: data.listOne},
        {...data?.lang?.cr?.listTow, list: data.listTow},
        {...data?.lang?.cr?.listThree, list: data.listThree},
        {...data?.lang?.cr?.listFour, list: data.listFour},
      ]))
    }
  }, [data])
  useEffect(()=> {
    if(trustedData?.listOne){
      setTrusted(trustedData?.listOne.name)
    }
  }, [trustedData, trustedData?.listOne])
  const theme = useTheme();

  const light = theme.palette.mode === 'light'

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 8.5 },
        mb: mdUp ? 15 : -5,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          justifyContent: 'center',
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
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
            mb: 2
          }}>
            {trustedData?.titleOne} <span style={{
              color: '#f27029'
            }}>{trustedData?.span}</span> {trustedData?.titleTow}
          </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                gap: mdUp ? 8 : 1,
                m: 2,
                mb: 0
              }}
            >
              {list?.length > 0 && list?.map(item => (
                <Button
                  key={`${item.id} ${item.name}`}
                  sx={{
                    borderBottom: trusted === item.name && '2px solid #0098ff',
                    color: trusted === item.name && '#0098ff',
                    borderRadius: 0,
                    fontWeight: 'bold',
                    fontSize: mdUp ? '1.1em' : '0.7em' ,
                  }}
                  onClick={() => {
                    setTrusted(item.name)
                  }}
                >
                  {item.name}

                </Button>
              ))}
            </Box>
        </m.div>
      </Stack>

      <Box
        sx={{
          position: 'relative',
          height: mdUp ? '24em' : '12em',
          width: '100%',
          m: mdUp ? '0 1em' : '5em 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: mdUp ? 'row' : 'column',
          gap: 3
        }}
      >
          {list?.length > 0 &&  list?.map((item, i) => (
            trusted === item.name && (
              mdUp ? (
                <Fragment
                key={`${item.id} ${item.name}`}
                >
                {item?.list[0] && <ItemBox img={item.list[0]?.img}/>}
  
                {item?.list[1] && item?.list[2] && (
                  <ColumnBux>
                    <ItemBox sx={{width: '100%'}} img={item.list[1]?.img}/>
                    <ItemBox sx={{width: '100%'}} img={item.list[2]?.img}/>
                  </ColumnBux>
                )}
  
                {item?.list[3] && <ItemBox img={item.list[3]?.img}/>}
  
                {item?.list[4] && item?.list[5] && (
                  <ColumnBux>
                  <ItemBox sx={{width: '100%'}} img={item.list[4]?.img}/>
                  <ItemBox sx={{width: '100%'}} img={item.list[5]?.img}/>
                  </ColumnBux>
                )}
  
                {item?.list[6] && <ItemBox img={item.list[6]?.img}/>}
  
                {item?.list[7] && item?.list[8] && (
                  <ColumnBux>
                  <ItemBox sx={{width: '100%'}} img={item.list[8]?.img}/>
                  <ItemBox sx={{width: '100%'}} img={item.list[8]?.img}/>
                  </ColumnBux>
                )}
  
                {item?.list[9] && <ItemBox img={item.list[9]?.img}/>}
                </Fragment>
              ) : (
                <Fragment
                  key={`${item.id} ${item.name}`}
                >
                {item?.list[0] && item?.list[1] && item?.list[2] && (
                  <RowBox>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[0]?.img}/>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[1]?.img}/>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[2]?.img}/>
                  </RowBox>
                )}  
                {item?.list[3] && item?.list[4] && item?.list[5] && item?.list[6] && (
                  <RowBox>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[3]?.img}/>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[4]?.img}/>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[5]?.img}/>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[6]?.img}/> 
                  </RowBox>
                )}   
  
                {item?.list[7] && item?.list[8] && item?.list[9] && (
                  <RowBox>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[7]?.img}/>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[8]?.img}/>
                    <ItemBox sx={{width: '4em', height: '4em'}} img={item.list[9]?.img}/>
                  </RowBox>
                )}  
                </Fragment>
              )
            )
          ))}
      {/* </Box> */}
      </Box>
    </Container>
  );
}

HomeTrusted.propTypes = {
  data: PropTypes.any.isRequired
}
