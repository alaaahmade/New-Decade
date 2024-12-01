import { Box } from '@mui/material'
import React from 'react'
import propTypes from 'prop-types'
export const RowBox = ({children}) => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 3,
      flexDirection: 'row',
      m: 0,
      p: 0,
      width: '100%',
    }}
  >
    {...children}
  </Box>
  )
}

RowBox.propTypes = {
  children: propTypes.element.isRequired
}

