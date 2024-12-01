import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { Children, forwardRef, useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CardActionArea from '@mui/material/CardActionArea';
// routes
import { RouterLink } from 'src/routes/components';
// components
import Iconify from 'src/components/iconify';
//
import { ListItem } from './styles';
import { StyledArrow } from '../../../../components/styled/Arrow';

// ----------------------------------------------------------------------

export const NavItem = forwardRef(
  ({ item, open, offsetTop, active, subItem, externalLink, hov, setHov, ...other }, ref) => {
    const { title, path, children } = item;

    // console.log(hov);

    const styles = {
        mt: open && `1em !important`,
    }
    const renderContent = (
      <ListItem
        ref={ref}
        disableRipple
        offsetTop={offsetTop}
        subItem={subItem}
        active={active}
        open={open}
        {...other}
      >
        {title}

        {children && (
          <StyledArrow arrow={ open ? 'top-right' :'bottom-right'}
          sx={styles}
        />
        )}
      </ListItem>
    );

    if (externalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <Link sx={{
      }}  href={path} underline="none">
        {renderContent}
      </Link>
    );
  }
);

NavItem.propTypes = {
  active: PropTypes.bool,
  externalLink: PropTypes.bool,
  item: PropTypes.object,
  offsetTop: PropTypes.bool,
  open: PropTypes.bool,
  subItem: PropTypes.bool,
};

// ----------------------------------------------------------------------

export function NavItemDashboard({ item, sx, ...other }) {
  return (
    <Link  href={item.path} sx={{ width: 1 }} {...other}>
      <CardActionArea
        sx={{
          py: 5,
          px: 10,
          minHeight: 400,
          borderRadius: 1.5,
          color: 'text.disabled',
          bgcolor: 'background.neutral',

          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}

NavItemDashboard.propTypes = {
  item: PropTypes.object,
  sx: PropTypes.object,
};
