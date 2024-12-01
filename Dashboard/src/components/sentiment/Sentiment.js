import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import { fPercent } from 'src/utils/format-number';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export default function Sentiment ({sentiment}) {
  const [status, setStatus] = useState({});
  useEffect(() => {
    if (sentiment < 50) {
      setStatus({
        backgroundColor: '#ff000073',
        color: 'red'
      })
    } else if (sentiment >= 50 && sentiment < 70) {
      setStatus({
        backgroundColor: '#F4E7C6',
        color: '#ae7914'
      })
    } else if (sentiment >= 70 && sentiment < 90) {
      setStatus({
        backgroundColor: '#EEF1EE',
        color: '#bac3b9'
      })
    } else if (sentiment >= 90) {
      setStatus({
        backgroundColor: '#C9F4C6',
        color: '#4eb346'
      })    }
    
  }, [sentiment])
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '72px',
      height: '30px',
      borderRadius: '24px',
      gap: '4px',
      ...status
    }}>
      {sentiment >= 90 && <SentimentSatisfiedAltIcon/>}
      {sentiment >= 70 && sentiment < 90 && <SentimentNeutralIcon/>}
      {sentiment >= 50 && sentiment < 70 && <SentimentDissatisfiedIcon/>}
      {sentiment < 50 && <SentimentVeryDissatisfiedIcon/>}
      <Typography> {fPercent(sentiment)} </Typography>
    </Box>
  )
}

Sentiment.propTypes = {
  sentiment: PropTypes.number,
};
