import { useTheme } from '@emotion/react';
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import React from 'react'
import { useResponsive } from 'src/hooks/use-responsive';

export const AvenuesCard = ({text, textColor, img, other, setAvenues, avenues}) => {

  const upMd = useResponsive('up', 'md');

  const theme = useTheme();

  const light = theme.palette.mode === 'light'

  return (
      <Box
        sx={{
          width: '13%',
          height: upMd ? '100%' : '30%',
          background: light ? '#fff' : '#4e4e4e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          cursor: 'pointer',
          gap: 2
        }}
        onClick={() => setAvenues(text)}
      >
        <Box
          sx={{
            width: '100%',
            height: '70%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundPosition: 'center',
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',
            objectFit: 'contain',
            backgroundImage: `url(${img})`,
            p: 1,
            boxShadow: text === avenues && (light ? '-2px 2px 5px #ccc, 2px 2px 8px #ccc' : '-2px 2px 5px #000, 2px 2px 8px #000'),
            ...{other}
          }}
        >
          {/* <img src={img}/> */}
        </Box>
          <Typography align='center' sx={{p: '0 1em',fontSize: upMd ? '14px' : '9px', fontWeight: 'bold', color: textColor || '#000'}} >{text}</Typography>
      </Box>
       )
}

AvenuesCard.propTypes = {
  hero: PropTypes.func,
  avenues: PropTypes.string.isRequired
}