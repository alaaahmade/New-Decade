import PropTypes from 'prop-types';
import { m, } from 'framer-motion';
import { forwardRef, useEffect, useState } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';
import { endpoints, fetcher } from '../../utils/axios';

// ----------------------------------------------------------------------

const SmallLogo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();
  const [data, setData] = useState({})

const getLogo = async() => {
  const newData = await fetcher([endpoints.layout]);
  setData(newData.header)
}

  useEffect(() => {
    getLogo()
  }, [])
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 'auto',
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
    <Box
      component={m.img}
      src={data.smallLogo}
      sx={{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        // position: 'absolute',
        boxShadow: `-80px 80px 80px ${
          theme.palette.mode === 'light'
            ? alpha(theme.palette.grey[500], 0.48)
            : alpha(theme.palette.common.black, 0.24)
        }`,
      }}
    />
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

SmallLogo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default SmallLogo;
