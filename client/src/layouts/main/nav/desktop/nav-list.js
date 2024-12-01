import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// @mui
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';
//
import { NavItem, NavItemDashboard } from './nav-item';
import { StyledSubheader, StyledMenu, StyledMenuArrow } from './styles';
import { HEADER } from '../../../config-layout';
import { useOffSetTop } from 'src/hooks/use-off-set-top';
import { Box, useTheme } from '@mui/material';
import { useOffSetLeft } from '../../../../hooks/use-off-set-left';

// ----------------------------------------------------------------------
      // {
      //   subheader: 'management',
      //   items: [
      //     {
      //       title: 'user',
      //       path: paths.dashboard.group.root,
      //       icon: ICONS.user,
      //       children: [
      //         { title: 'four', path: paths.dashboard.group.root },
      //         { title: 'five', path: paths.dashboard.group.five },
      //         { title: 'six', path: paths.dashboard.group.six },
      //       ],
      //     },
      //   ],
      // },

export default function NavList({ item, offsetTop, subItem }) {
  const pathname = usePathname();

  const nav = useBoolean();

  const { path, children } = item;

  const active = useActiveLink(path, false);

  const externalLink = path.includes('http');

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  const handleOpenMenu = () => {
    if (children) {
      nav.onTrue();
    }
  };

  const theme = useTheme()  
  return (
    <>
      <NavItem
        item={item}
        offsetTop={offsetTop}
        active={active}
        open={nav.value}
        externalLink={externalLink}
        onMouseEnter={handleOpenMenu}
        onMouseLeave={nav.onFalse}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '0',
          m: 0
        }}
        subItem={subItem || false}
      />

      {children && nav.value &&  (
        <Portal>
          <Fade in={nav.value}>
            <StyledMenu
              onMouseEnter={handleOpenMenu}
              onMouseLeave={nav.onFalse}
              sx={{ display: 'flex',
              borderRadius: '0',
              width : '15em',
              mt: 2
            }}
            >
              <StyledMenuArrow/>
              {children.map((list) => (
                <NavSubList
                  key={list?.subheader || ''}
                  subheader={list?.subheader || ''}
                  items={list.items}
                  isDashboard={list?.subheader === 'Dashboard'}
                  onClose={nav.onFalse}
                />
              ))}
            </StyledMenu>
          </Fade>
        </Portal>
      )}
      <div />
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.object,
  offsetTop: PropTypes.bool,
  subItem: PropTypes.bool
};

// ----------------------------------------------------------------------

function NavSubList({ items, isDashboard, subheader, onClose }) {
  const pathname = usePathname();
  
  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  const nav = useBoolean();

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  const handleOpenMenu = () => {
      nav.onTrue();
  };
  return (
    <Stack
      spacing={2}
      alignItems="flex-start"
      sx={{
        flexGrow: 1,
        ...(isDashboard && {
          maxWidth: 540,
        }),
      }}
    >

      {items.map((item) =>
        isDashboard ? (
          <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        ) : (
          <>
            {!item.children && <NavItem
              subItem
              key={item.title}
              item={item}
              active={pathname === `${item.path}/`}
              onClick={onClose}
              onMouseEnter={handleOpenMenu}
              onMouseLeave={nav.onFalse}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                gap: '0',
                m: 0
              }}
          />}
          {item.children && <NavList item={item} offsetTop={offsetTop} subItem={true}/>}
          </>

          
        )
      )}
    </Stack>
  );
}

NavSubList.propTypes = {
  isDashboard: PropTypes.bool,
  items: PropTypes.array,
  onClose: PropTypes.func,
  subheader: PropTypes.string,
};
