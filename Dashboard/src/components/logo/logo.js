import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, openNav, sx, ...other }, ref) => {

  const logo = (v) => (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: v !== undefined ? 200 : 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <Box
        component="img"
        src="/logo/Logo.png"
        sx={{ width: '100%', height: '100%' }}
      />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/dashboard" sx={{ display: 'contents' }}>
      {logo(openNav)}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
  openNav: PropTypes.bool,
};

export default Logo;
