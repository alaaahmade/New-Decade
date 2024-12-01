import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Iconify from 'src/components/iconify/iconify'
import MicIcon from '@mui/icons-material/Mic';
import ArticleIcon from '@mui/icons-material/Article';
import PropTypes from 'prop-types';
import { useHomeData } from 'src/layouts/dashboard/config-navigation';

export default function UploadBox({label}) {

  const homeData = useHomeData()
  // Audio
  return (
    <Box sx={{
      width: '50%',
      height: '12.7em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      padding: '1.4em 1em',
      border: '1px dashed #D6D8E1',
      borderRadius: '.5em',
      flexDirection: 'column',
    }}>
      <Typography sx={{ fontWeight: 500 }} >{label}</Typography>
      {/* <img style={{cursor: 'pointer'}} src='/public/assets/Import Icon.png' alt='import' /> */}
      <Box
        sx={{
          width: '40px',
          height: '40px',
          borderRadius: '50px',
          backgroundColor: '#D8EBFD',
          color: '#2292F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': {
            color: '#D8EBFD',
            backgroundColor: '#2292F9',
          },
        }}
      >
        {homeData[0].cloud}
      </Box>
      <Typography sx={{ color: '#7E8695' }} >{label === 'AUDIO' ? 'flac, mp3, mp4, wav' : 'word, text and pdf'}</Typography>
      <Button
      color="inherit"
      onClick={()=> console.log('create')}
      sx={{
        width: '160px',
        height: '37px',
        borderRadius: '6px',
        backgroundColor: 'transparent',
        border: '1px solid #000',
        color: '#000',
        fontSize: '14px',
        '&:hover': {
          color: '#fff',
          backgroundColor: '#1A2638',
          border: 0
        },
      }}
      startIcon={
        label === 'AUDIO' ?
        <Iconify>
          {homeData[0].mic}
        </Iconify> :
        <Iconify>
          {homeData[0].file}
        </Iconify>
      }
    >
        <Typography sx={{width: 'fit-content'}}>BROWSE FILE</Typography>
    </Button>
    </Box>
  )
}

UploadBox.propTypes = {
  label: PropTypes.string
}
