import React from 'react';

import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

export default function CustomNumber({number, active}) {
  return (
    <Typography
      sx={{
        mr: '7.5em',
        backgroundColor: active ? '#2292F9' : '#C7CAD1',
        width: '20px',
        height: '20px',
        borderRadius: '6px',
        fontSize: '12px',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}
        >{number}
    </Typography>
  )
}

CustomNumber.propTypes = {
  number: PropTypes.string,
  active: PropTypes.bool
}