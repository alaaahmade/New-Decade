import React from 'react';
import PropTypes from 'prop-types';
// @mui

//lang
import { localStorageGetItem } from 'src/utils/storage-available';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Badge, { badgeClasses } from '@mui/material/Badge';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';
// theme// routes
import { paths } from 'src/routes/paths';
// components
import Logo from 'src/components/logo';
//
import { HEADER } from '../config-layout';
import { navConfig } from './config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';
//
import { SettingsButton, HeaderShadow, LoginButton } from '../_common';
import useLocales from '../../locales/use-locales'
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function Header({headerData}) {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');
  
  const lang = localStorageGetItem('i18nextLng')

  const light = theme.palette.mode === 'light'

  const {onChangeLang} = useLocales()
  const [data, setData] = useState({...headerData})
  const [list, setList] = useState([])
  const [dLang, setDLang] = useState(false)

  useEffect(() => {
      if (lang === 'en') {
        setData({...headerData, ...headerData?.lang?.en})
      }else if (lang === 'ar') {
        setData({...headerData, ...headerData?.lang?.ar})
      }else if (lang === 'cr') {
        setData({...headerData, ...headerData?.lang?.cr})
      }
    }, [headerData])

    useEffect(() => {
      if(data?.list){
        setList(data.list)
      }
    }, [data?.list, data])


  const offsetTop = useOffSetTop(40);
  return (
    <AppBar
    sx={{
      position: 'relative'
    }}
    >
      <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        height: 45,
        width: '100%',
        fontSize: mdUp ? 14 : 10,
        color: light ? theme.palette.common.main : theme.palette.primary.darkMain,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      {data?.headLine && 
      <>
      <Typography sx={{
        fontSize: mdUp ? 14 : 10,
        // color: theme.palette.primary.contrastText
      }}>
        {data.headLine.text}
      </Typography>
      <a style={{
        cursor: 'pointer'
      }}target='_blank'
      href={data.headLine.link.link}>{`${data.headLine.link.text} >`}</a>
      </>
      }
    </Box>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          backgroundColor: offsetTop ? theme.palette.background.default : theme.palette.primary.main,
          width: '100%',
          position: offsetTop ? 'fixed' : 'relative',
          // top: offsetTop ? 0 : 4
        }}
      >
        <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
          <Badge
            sx={{
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
            badgeContent={
              <Link
                href={paths.changelog}
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{ ml: 1 }}
              >
              </Link>
            }
          >
            <Logo logo={data?.logo} />
          </Badge>

          <Box sx={{ flexGrow: 1 }} />

          {mdUp && list && <NavDesktop offsetTop={offsetTop} data={list} />}  

          <Stack alignItems="center" direction={{ xs: 'row', md: 'row-reverse' }}>
          {
              mdUp && offsetTop && (
                <Button
                  sx={{
                    backgroundColor: 'blue',
                    color: '#fff',
                    borderRadius: '0',
                    height: '2.5em',
                    '&:hover' : {
                      backgroundColor: 'blue',
                      color: '#fff'
                    }
                  }}
                >
                  Schedule a demo
                </Button>
              )
            }
            <Box
              sx={{
                position: 'relative',
                m: '0 1em'
              }}
            >
            <Button
              sx={{
                color: offsetTop ? theme.palette.primary.contrastText  : '#fff'
              }}
              onClick={() => {
                setDLang(!dLang)
              }}
            >{lang}
            </Button>
            {dLang && (
            <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 1,
              width: '3em',
              position: 'absolute',
              top: 2,
              right: '-2em',
              backgroundColor: '#ccc',
              color: '#000',
              borderRadius: '2px'
            }}
          >
          <Button
            sx={{
              color: '#fff'
            }}
            onClick={() => {
              onChangeLang('ar')
              window.location.reload()
            }}
          >ar
          </Button>
          <Button
            sx={{
              color: '#fff'
            }}
            onClick={() => {
              onChangeLang('en')
              window.location.reload()
            }}
          >en
          </Button>
          <Button
            sx={{
              color: '#fff'
            }}
            onClick={() => {
              onChangeLang('cr')
              window.location.reload()
            }}
          >cr
          </Button>
          </Box>
            )}

            </Box>


            {
              !offsetTop && (
                <SettingsButton
                sx={{
                  mr: { xs: 1, md: 0 },
                  ml: { md: 2 },
                }}
              />
              )
            }

            
            {!mdUp && list && <NavMobile offsetTop={offsetTop} data={list} />}
          </Stack>
        </Container>
      </Toolbar>

      {offsetTop && <HeaderShadow />}
    </AppBar>
  );
}
Header.propTypes = {
  headerData: PropTypes.object.isRequired,
};
