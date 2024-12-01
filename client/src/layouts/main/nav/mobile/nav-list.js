import PropTypes from 'prop-types';
// @mui
import Collapse from '@mui/material/Collapse';
import { listClasses } from '@mui/material/List';
import { listItemTextClasses } from '@mui/material/ListItemText';
import { listItemButtonClasses } from '@mui/material/ListItemButton';
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// components
import { NavSectionVertical } from 'src/components/nav-section';
import { usePathname } from 'src/routes/hooks';
//
import NavItem from './nav-item';
import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export default function NavList({ item }) {
  const pathname = usePathname();

  const { path, children } = item;
  const [externalLink, setExternalLink ] = useState(false)

  useEffect(() => {
    if(path) {

      setExternalLink(path?.includes('http'))
    }

  }, [path])
  const nav = useBoolean();

  return (
    <>
      <NavItem
        item={item}
        open={nav.value}
        onClick={nav.onToggle}
        active={pathname === path}
        externalLink={externalLink}
      />

      {!!children && (
        <Collapse in={nav.value} unmountOnExit>
          <NavSectionVertical
            data={children}
            sx={{
              m: '0 2em'
            }}
          />
        </Collapse>
      )}
    </>
  );
}

NavList.propTypes = {
  item: PropTypes.object,
};
