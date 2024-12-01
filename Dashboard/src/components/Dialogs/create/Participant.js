import React from 'react';
import {GrFormClose} from 'react-icons/gr';

import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

export default function Participant({item, setParticipants}) {
  const removeItem = () => {
    setParticipants(prev => prev.filter(participant => 
      participant.id !== item.id ))
  }
  return (
    <Typography
    sx={{
      fontWeight: 'bold',
      fontSize: '13.4px',
      mt: 1,
      display: 'flex',
      alignItems: 'center',
      gap: 1
      }}
  >
    {item.name} <span style={{color: '#7E8695', marginLeft: '.3em'}}>
      {item.position}
      </span>
  <GrFormClose style={{
    marginBottom: -1.5,
    backgroundColor: '#E8E8EE',
    color: '#7E8695',
    padding: 1,
    borderRadius: '4px',
    cursor: 'pointer',
    width: '1.3em',
    height: '1.3em'
  }}
  onClick={removeItem}
  />
  </Typography>
  )
}

Participant.propTypes = {
  item: PropTypes.object,
  setParticipants: PropTypes.func
}