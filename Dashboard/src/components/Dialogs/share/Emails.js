import React from 'react';
import { Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

export default function Emails({emails, removeEmail}) {
  return (
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      flexWrap: 'wrap',
      p: '1em 0 0 0',
    }}
  >
    {emails.length > 0 && emails.map((email, index) => (
          <Typography
          key={index}
          sx={{
            color: '#2292F9',
            fontSize: '14px',
            backgroundColor: '#D8EBFD',
            width: 'fit-content',
            padding: '0.5em 1em',
            borderRadius: '50px',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          {email}
          <CloseIcon onClick={() => removeEmail(index)} sx={{fontSize: '16px'}}/>
        </Typography>
    ))}
  </Box>
  )
}

Emails.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.string),
  removeEmail: PropTypes.func
}