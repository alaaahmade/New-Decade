import React from 'react'
import propTypes from 'prop-types'
import { Box } from '@mui/material'
import { useTheme } from '@emotion/react';

export const ItemBox = ({img, sx}) => {

  const theme = useTheme();

  const light = theme.palette.mode === 'light'

  return (
    <Box
      sx={{
        width: '12%',
        height: '9em',
        backgroundColor: light ? '#fff' : '#4e4e4e',
        boxShadow: light ? '1px 1px 20px #ccc, -1px -1px 20px #ccc' : '1px 1px 20px #000, -1px -1px 20px #000 ',
        backgroundSize: '60%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${img})`,
        objectFit: 'contain',
        ...sx
      }}
    />
)
}

ItemBox.propTypes = {
  img: propTypes.string.isRequired,
  sx: propTypes.object
}