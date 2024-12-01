import { Box } from '@mui/material'
import React from 'react'
import propTypes from 'prop-types'
export const ColumnBux = ({children}) => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 3,
      flexDirection: 'column',
      m: 0,
      p: 0,
      width: '12%',
    }}
  >
    {...children}
  </Box>
  )
}

ColumnBux.propTypes = {
  children: propTypes.element.isRequired
}

