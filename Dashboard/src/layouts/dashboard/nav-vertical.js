import PropTypes from 'prop-types';
import { Fragment, useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// hooks
// import { useMockedUser } from 'src/hooks/use-mocked-user';
// components
import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';
import { usePathname } from 'src/routes/hooks';
import { NavSectionVertical } from 'src/components/nav-section';
//
import { NAV } from '../config-layout';
import { useNavData } from './config-navigation';
import { NavToggleButton, NavUpgrade } from '../_common';
import { useSettingsContext } from 'src/components/settings';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function NavVertical({ openNav, onCloseNav }) {
  // const { user } = useMockedUser();

  const pathname = usePathname();

  const lgUp = useResponsive('up', 'lg');


    const settings = useSettingsContext();


  const navData = useNavData();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        background: '#0C141F',
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        flexDirection: 'row',
      }}
      >
      <Logo openNav={openNav} sx={{ mt: 3, ml: 4, mb: 1, width: settings.themeLayout === 'mini' ? 40 : 40 }} />
      {settings.themeLayout === 'vertical' && <Typography variant="h6" sx={{ mb: 2, mx: 2.5, color: '#fff' }}>
      Dashboard
      </Typography>}
      </Stack>
      <NavSectionVertical
        data={navData}
        config={{
          currentRole: 'admin',
        }}
      />

      <Box sx={{ flexGrow: 1 }} />

      <NavUpgrade />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
      }}
    >
      <NavToggleButton />

      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.W_VERTICAL,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

NavVertical.propTypes = {
  onCloseNav: PropTypes.func,
  openNav: PropTypes.bool,
};
