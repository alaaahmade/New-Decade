/* eslint-disable no-nested-ternary */
import { Box, Checkbox, FormControlLabel, Radio, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import React from 'react'

export default function CustomOption({label, type ,check}) {
  return (
    <FormControlLabel
      sx={{
        width: type === 'create' ? '22%' : '47%',
        // backgroundColor: ,
        height: '40px',
        borderRadius:'8px',
        padding: '1.4em 1em',
        '@media (max-width: 600px)': {
          width: '90%',
        },
        backgroundColor: type === 'create' && check ? '#2292F9' : '#F0F2F4',
      }}
      control={
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          height: '100%',
          gap: 0.5,
        }}>
          <FormControlLabel
          sx={{
            color: type === 'create' ? (check ? '#fff': '#7E8695') : '#000',
            '& .MuiRadio-root.Mui-checked': {
              color: type === 'create' ? '#fff' : '#2292F9'
              },
            '& .MuiRadio-root':{
              color: type === 'create' ? (check ? '#fff': '#7E8695') : '#000'},
            }}
          value={label}
          control={<Radio />}
          label={label} />
      </Box>      }
    />
  )
}

CustomOption.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  check: PropTypes.bool
}

