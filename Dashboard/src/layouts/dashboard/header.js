import PropTypes from 'prop-types';
// @mui
import {
  Avatar,
  Box,
  Typography,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  useTheme,
} from '@mui/material';

// theme
import { useLocation, useParams } from 'react-router';
import { bgBlur } from 'src/theme/css';
// hooks
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { useResponsive } from 'src/hooks/use-responsive';

import {HiPlus} from 'react-icons/hi';

// components
import Logo from 'src/components/logo';
import SvgColor from 'src/components/svg-color';
import { useSettingsContext } from 'src/components/settings';
//
import { useEffect, useState } from 'react';
import { _orders } from 'src/_mock/_order';
import { _mockDetails } from 'src/_mock/-mockDetails';
import { AccountPopover, NotificationsPopover,
  // NotificationsPopover
} from '../_common';
import { HEADER, NAV } from '../config-layout';
import { useHeaderData } from './config-navigation';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const [tableData] = useState(_orders);
  const {id} = useParams()
  const [ details, setDetails ] = useState(_mockDetails[id])
  const {pathname} = useLocation();
  const [isDetails, setIsDetails] = useState(false);
  const theme = useTheme();

  const headerData = useHeaderData()
  const settings = useSettingsContext();

  const isNavHorizontal = settings.themeLayout === 'horizontal';

  const isNavMini = settings.themeLayout === 'mini';

  const lgUp = useResponsive('up', 'lg');

  const offset = useOffSetTop(HEADER.H_DESKTOP);

  const offsetTop = offset && !isNavHorizontal;
  
  useEffect(() => {
    if (pathname.includes('/details/')) {
      setDetails(_mockDetails[id])
      setIsDetails(true);
    }else {
      setIsDetails(false);
    }
  }, [id, pathname])

  const renderContent = (
    <>
      {lgUp && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />}

      {!lgUp && (
        <IconButton onClick={onOpenNav}>
          <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
        </IconButton>
      )}

      <Box 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          ml: 2,
        }}  
      >
        <Typography sx={{mr: 2.5, fontSize: '17.2px', fontWeight: 600}}>Welcome Admin</Typography>
      </Box>

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1 }}
      >
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
          height: HEADER.H_DESKTOP,
          ...(offsetTop && {
            height: HEADER.H_DESKTOP_OFFSET,
          }),
          ...(isNavHorizontal && {
            width: 1,
            bgcolor: 'background.default',
            height: HEADER.H_DESKTOP_OFFSET,
            borderBottom: `dashed 1px ${theme.palette.divider}`,
          }),
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_MINI + 1}px)`,
          }),
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
