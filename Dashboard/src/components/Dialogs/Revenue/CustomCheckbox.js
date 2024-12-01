import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import React, { useContext } from 'react'
import { FiltersContext } from 'src/context/filtersContext';

export default function CustomCheckbox({label, handleCheckboxChange}) {
  const {filters} = useContext(FiltersContext);
  return (
    <FormControlLabel
      sx={{
        width: '47%',
        backgroundColor: '#F0F2F4',
        height: '40px',
        borderRadius:'8px',
        padding: '1.4em 1em',
        '@media (max-width: 600px)': {
          width: '90%',
        }
      }}
      control={
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
          height: '100%',
          gap: 0.5
        }}>
        <Checkbox
          name='Revenue'
          sx={{ color: '#000', '&.Mui-checked': { color: '#2292F9'} }}
          value={label}
          onChange={handleCheckboxChange}
          checked={filters.Revenue.includes(label) === true}
          />
        <Typography sx={{ fontWeight: 500, color: '#000', paddingTop: '0.2em' }}>
          {label}
        </Typography>
      </Box>      }
    />
  )
}

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  handleCheckboxChange: PropTypes.func
}

