import React from 'react';
import { Box, Typography, Popover } from '@mui/material';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function ParticipantPopup({anchorEl, setAnchorEl, handlePopoverClose}) {

  const open = Boolean(anchorEl);

  return (
    <div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            padding: '1.5em',
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}
          onMouseLeave={handlePopoverClose}
        >
          <Typography sx={{fontWeight: 500}}>Robert Arthur <span style={{color: '#7E8695', marginLeft: '1em', fontSize: '14px'}}>General Manager </span></Typography>
          <Typography sx={{fontWeight: 500}}>John F Kennedy <span style={{color: '#7E8695', marginLeft: '1em', fontSize: '14px'}}>Lead Sales Manager</span></Typography>
          <Typography sx={{fontWeight: 500}}>Thomas Shelby<span style={{color: '#7E8695', marginLeft: '1em', fontSize: '14px'}}>Accounting Staff</span></Typography>
          <Typography sx={{fontWeight: 500}}>Michael Moron<span style={{color: '#7E8695', marginLeft: '1em', fontSize: '14px'}}>Secretary</span></Typography>
        </Box>
      </Popover>
    </div>
  );
}

ParticipantPopup.prototype = {
  anchorEl: PropTypes.any,
  setAnchorEl: PropTypes.any,
  handlePopoverClose: PropTypes.any
}