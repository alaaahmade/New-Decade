import { Box, Button, Typography, styled, useTheme } from '@mui/material'
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react'
import { localStorageGetItem } from 'src/utils/storage-available';
import { useResponsive } from 'src/hooks/use-responsive';

const StyledSpan = styled('span')(({theme}) => ({
  color: theme.palette.mode === 'light' ? 'common.main' : 'common.white',
}))

export const HomeAdvantage = ({data}) => {
  const [advantageData, setAdvantageData] = useState({...data})
  const [buttonOne, setButtonOne] = useState({})
  const [buttonTow, setButtonTow] = useState({})
  const [clicked, setClicked] = useState('')
  const theme = useTheme()

  const lang = localStorageGetItem('i18nextLng')

  const mdUp = useResponsive('up', 'md');


  useEffect(() => {
    if (lang === 'en') {
      setAdvantageData({...data, ...data?.lang?.en})
    }else if (lang === 'ar') {
      setAdvantageData({...data, ...data?.lang?.ar})
    }else if (lang === 'cr') {
      setAdvantageData({...data, ...data?.lang?.cr})
    }

  }, [data])
  useEffect(() => {
    if(advantageData?.buttonOne){
      setButtonOne({
        text: advantageData?.buttonOne,
        img: advantageData?.buttonOneI
      })
      setClicked(advantageData?.buttonOne)
    }
    if(advantageData?.buttonTow){
      setButtonTow({
        text: advantageData.buttonTow,
        img: advantageData.buttonTowI
      })
    }
  }, [advantageData])

  return (
    <Box
      sx={{
        width: '100%',
        // height: '65vh',
        backgroundColor: theme.palette.common.main,
        pb: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <Typography variant="h2"  align='center' sx={{
            color: '#fff',
            p: 10,
            fontSize:mdUp ? '2.5em !important' : '1.2em !important',
          }}>
            {advantageData.titleOne} <StyledSpan sx={{
              color: 'common.secondary' ,
            }}>{advantageData.span}</StyledSpan> {advantageData.titleTow}
      </Typography>
      <Box
        sx={{
          mt: -5,
          border: '1px solid blue',
        }}
      >
        <Button
          sx={{
            backgroundColor: clicked === buttonOne.text ? 'blue' : '#fff',
            // border: '1px solid blue',
            color: clicked === buttonOne.text ? '#fff' : 'blue',
            borderRadius: 0,
            height: '3.5em',
            p: '0 3em',
            outline: 0,
            '&:hover': {
              backgroundColor: clicked === buttonOne.text ? '#fff' : 'blue',
              color: clicked === buttonOne.text ? 'blue' : '#fff'
            }
          }}
          onClick={() => setClicked(buttonOne.text)}
        >
          {buttonOne.text}
        </Button>
        <Button
          sx={{
            backgroundColor: clicked === buttonTow.text ? 'blue' : '#fff',
            // border: '1px solid blue',
            color: clicked === buttonTow.text ? '#fff' : 'blue',
            borderRadius: 0,
            height: '3.5em',
            outline: 0,
            p: '0 3em',
            '&:hover': {
              backgroundColor: clicked === buttonTow.text ? '#fff' : 'blue',
              color: clicked === buttonTow.text ? 'blue' : '#fff'
            }
          }}
          onClick={() => setClicked(buttonTow.text)}
        >
          {buttonTow.text}
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: mdUp ? '22em' : '15em',
          // backgroundColor: 'red',
          mt: mdUp ? '2em' : 2,
          mb: '2em',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundImage: `url(${clicked === buttonTow.text ? buttonTow.img : buttonOne.img})`,
          backgroundRepeat: 'no-repeat'
        }}
      ></Box>
    </Box>
  )
}

HomeAdvantage.propTypes = {
  data: PropTypes.object.isRequired
}