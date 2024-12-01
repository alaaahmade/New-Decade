import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { FiltersContext } from 'src/context/filtersContext';
import { format } from 'date-fns';
import PropTypes from 'prop-types'
import Iconify from '../iconify/iconify'
import { CloseButton } from './Showing.styled';

export default function ShowingFiltersResult({
  handleOnCloseDateRange,
  handleOnCloseRevenue
}) {

  const {filters} = useContext(FiltersContext);

  if (
    filters.Time 
  ) {
    return (
      <Box
        sx={{
          m: '0 2em 1em 2em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 1.5
        }}
    >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 400,
            color: '#7E8695'
          }}
        >
          Showing result of
        </Typography>
        
        {filters.Time === 'Custom' && filters.startDate && filters.endDate && (
        <CloseButton>
          {format(filters.startDate, 'dd MMM yyyy')} - {format(filters.endDate, 'dd MMM yyyy')}
          <Iconify onClick={handleOnCloseDateRange} icon="mingcute:close-line" />
        </CloseButton>
        )}
        
          {filters.Time && filters.Time !== 'Custom' && (
            <CloseButton>
            {filters.Time}
            <Iconify onClick={handleOnCloseDateRange} icon="mingcute:close-line" />
          </CloseButton>
          )}
    
    </Box>
      )
  }
  

}

ShowingFiltersResult.propTypes = {
  handleOnCloseDateRange: PropTypes.func,
  handleOnCloseRevenue: PropTypes.func
}