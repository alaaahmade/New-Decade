import PropTypes from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
// @mui
import Collapse from '@mui/material/Collapse';
// routes
import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';
//
import NavItem from './nav-item';

// ----------------------------------------------------------------------

export default function NavList({ data, depth, hasChild, config, Sub }) {
  const pathname = usePathname();

  const active = useActiveLink(data.path, hasChild);

  const [externalLink, setExternalLink ] = useState(false)

  useEffect(() => {
    if(data?.path) {

      setExternalLink(data?.path?.includes('http'))
    }

  }, [data, data?.path])
  const [open, setOpen] = useState(active);

  useEffect(() => {
    if (!active) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        active={active}
        externalLink={externalLink}
        onClick={
          data?.itemAction === 'create_project'
            ? () => {
                // console.log('saeeeeeeed');
              }
            : handleToggle
        }
        config={config}
        Sub={Sub}
        isOpen={open && hasChild}
      />

      {hasChild && (
        <Collapse in={open} unmountOnExit>
          <NavSubList Sub data={data.children} depth={depth} config={config} />
        </Collapse>
      )}
    </>
  );
}

NavList.propTypes = {
  config: PropTypes.object,
  data: PropTypes.object,
  depth: PropTypes.number,
  hasChild: PropTypes.bool,
  Sub: PropTypes.bool,
};

// ----------------------------------------------------------------------

function NavSubList({ data, depth, config, Sub }) {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 0}
          hasChild={!!list.children}
          config={config}
          Sub={Sub}
        />
      ))}
    </>
  );
}

NavSubList.propTypes = {
  config: PropTypes.object,
  data: PropTypes.array,
  depth: PropTypes.number,
  Sub: PropTypes.bool,
};
