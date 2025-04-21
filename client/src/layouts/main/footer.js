/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import Stack from '@mui/material/Stack';
import * as Yup from 'yup';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { useResponsive } from 'src/hooks/use-responsive';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
// routes
import { RouterLink } from 'src/routes/components';
// components
import Logo from 'src/components/logo';
import { Button, Input, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { localStorageGetItem } from 'src/utils/storage-available';
import axios from 'axios';
import axiosInstance from '../../utils/axios';


export default function Footer({footerData}) {
  const [data, setData] = useState({})
  const [platForm, setPlatForm] = useState([])
  const [industries, setIndustries] = useState([])
  const [resources, setResources] = useState([])
  const [company, setCompany] = useState([])
  const [error, setError] = useState('')

  const lang = localStorageGetItem('i18nextLng')
  const upMd = useResponsive('up', 'md');

  const theme = useTheme()

  const light = theme.palette.mode === 'light'

  const SubscribeSchema =  Yup.object().shape({
    email: Yup.string().min(4).matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).required('Please Enter Email'),
  });

  const defaultValues = {
    email: ''
  }


  const methods = useForm({
    resolver:  async (data, context, options) => {
      const valid =await yupResolver(SubscribeSchema)(data, context, options)
      return valid 
    },
    defaultValues,
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = methods;
  const values = watch();

  const changeEmile = (e) => {
    setValue('email', e.target.value)
  }

  const onSubmit = handleSubmit(async(data) => {
    try {
      await axiosInstance.post('/api/v1/user/subscribe', data)
      reset()
      toast.success('Subscribed successfully.')
    } catch (error) {
      console.log(error);
    }
  })


  useEffect(() => {
    if (lang === 'en') {
      setData({...footerData, ...footerData?.lang?.en})
      setPlatForm(footerData?.lang?.en?.platForm)
      setIndustries(footerData?.lang?.en?.industries)
      setResources(footerData?.lang?.en?.resources)
      setCompany(footerData?.lang?.en?.company)
    }else if (lang === 'ar') {
      setData({...footerData, ...footerData?.lang?.ar})
      setPlatForm(footerData?.lang?.ar?.platForm)
      setIndustries(footerData?.lang?.ar?.industries)
      setResources(footerData?.lang?.ar?.resources)
      setCompany(footerData?.lang?.ar?.company)
    }else if (lang === 'Kurdi') {
      setData({...footerData, ...footerData?.lang?.cr})
      setPlatForm(footerData?.lang?.cr?.platForm)
      setIndustries(footerData?.lang?.cr?.industries)
      setResources(footerData?.lang?.cr?.resources)
      setCompany(footerData?.lang?.cr?.company)
    }
  }, [footerData, footerData?.lang])

  useEffect(() => {
    if(methods?.formState?.errors?.email){
      setError(methods?.formState?.errors?.email)
    }
  }, [methods, methods?.formState?.errors?.email])

  const mainFooter = (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: theme.palette.common.main,
        zIndex: 0,
      }}
    >
      <Divider />

      

      <Container
        sx={{
          pt: 5,
          pb: 5,
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >

        <Grid
          container="true"
          justifyContent={{
            xs: 'center',
            md: 'center',
          }}
        >
          <Grid
            sx={{
              m: 'auto',
              mt: {sx: 12, md: 2},
              mb : 5,
              width: upMd ? '22% !important' :'100%'
            }}
          >
          <Logo sx={{ mb: 2 }} />
            <Typography
              variant="h6"
              sx={{
                maxWidth: '100%',
                mx: { xs: 'auto', md: 'unset' },
                color:!light ? theme.palette.primary.contrastText : '#ccc',
              }}
            >
              {data?.subscribeTitle}
            </Typography>
            <Box
              sx={{
                width: '100%',
                zIndex: 20
              }}
            > 

        <TextField
          fullWidth
          type='text'
          value={values.email}
          onChange={changeEmile}
          error={!!error}
          helperText={error ? error?.message : ''}
          placeholder='Email Address*'
          sx={{
            color: '#ccc',
            mt: 2,
            '& .MuiInputBase-input' : {
            color: '#ccc',
            zIndex: 20,
              background: theme.palette.background.default
            }
          }}
        />

            <Button
              sx={{
                backgroundColor: 'blue',
                color: '#fff',
                p: '0.8em',
                borderRadius:0,
                width: '100%',
                mt: 2
              }}
              onClick={onSubmit}
            >{data?.subscribeButton}</Button>
            </Box>

          </Grid>

          <Grid>
            <Stack spacing={0} direction={{ xs: 'row', md: 'row'}}
            sx={{
              mt: {sx: 12, md: 2},
              width: upMd ? '45em' : '100%',
              flexWrap: 'wrap',
              gap: 0
            }}
            container="true"
            justifyContent={{
              xs: 'center',
              md: 'space-between',
            }}
            >
                <Stack
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start', width : upMd ? '18% !important' : '45%' }}
                >
                  <Typography
                    sx={{
                        color: '#e500ff'
                    }}
                  variant="h6">
                    PlatForm
                  </Typography>

                  <Stack
                  spacing={.5}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  {platForm?.map((link) => (
                    <Link
                      key={link.title}
                      component={RouterLink}
                      href={link.path}
                      color={!light ? theme.palette.primary.contrastText : '#ccc'}
                      variant="body2"
                      sx={{
                        // width: '15em',
                        m: 0,
                        p: 0,
                        color: !light && '#ccc'
                      }}
                    >
                      {link.title}
                    </Link>
                  ))}
                  </Stack>
                </Stack>
                <Stack
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start', width : upMd ? '18% !important' : '45%' }}
                >
                  <Typography
                    sx={{
                        color: '#469dff'
                    }}
                  variant="h6">
                    Industries
                  </Typography>

                  <Stack
                  spacing={.5}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  {industries?.map((link) => (
                    <Link
                      key={link.title}
                      component={RouterLink}
                      href={link.path}
                      color={!light ? theme.palette.primary.contrastText : '#ccc'}
                      variant="body2"
                      sx={{
                        // width: '15em',
                        m: 0,
                        color: !light && '#ccc',
                        p: 0
                      }}
                    >
                      {link.title}
                    </Link>
                  ))}
                  </Stack>
                </Stack>
                <Stack
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start', width : upMd ? '18% !important' : '45%' }}
                >
                  <Typography
                    sx={{
                        color: '#0f8'
                    }}
                  variant="h6">
                    Resources
                  </Typography>

                  <Stack
                  spacing={.5}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  {resources?.map((link) => (
                    <Link
                      key={link.title}
                      component={RouterLink}
                      href={link.path}
                      color={!light ? theme.palette.primary.contrastText : '#ccc'}
                      variant="body2"
                      sx={{
                        // width: '15em',
                        m: 0,
                        color: !light && '#ccc',
                        p: 0
                      }}
                    >
                      {link.title}
                    </Link>
                  ))}
                  </Stack>
                </Stack>
                <Stack
                  spacing={2}
                  alignItems={{ xs: 'center', md: 'flex-start', width : upMd ? '18% !important' : '45%' }}
                >
                  <Typography
                    sx={{
                        color: '#f27029'
                    }}
                  variant="h6">
                    Company
                  </Typography>

                  <Stack
                  spacing={.5}
                  alignItems={{ xs: 'center', md: 'flex-start' }}
                >
                  {company?.map((link) => (
                    <Link
                      key={link.title}
                      component={RouterLink}
                      href={link.path}
                      color={!light ? theme.palette.primary.contrastText : '#ccc'}
                      variant="body2"
                      sx={{
                        // width: '15em',
                        m: 0,
                        color: !light && '#ccc',
                        p: 0
                      }}
                    >
                      {link.title}
                    </Link>
                  ))}
                  </Stack>
                </Stack>
                
            </Stack>
          </Grid>
        </Grid>

      </Container>.
      <Box
      
        sx={{
          pt: 3,
          pb: 3,
          textAlign: { xs: 'center', md: 'unset' },
          backgroundColor: theme.palette.mode === 'light'
          ? alpha(theme.palette.grey[500], 0.48)
          : alpha(theme.palette.common.black, 0.24),
          
          height: '2em',
          width: '100%',
          m: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="body2" sx={{
          color:!light ? theme.palette.primary.contrastText : '#ccc'
        }}>
        © 2024.
          <Link
            key="AlaaAhmed"
            component={RouterLink}
            href="https://www.linkedin.com/in/alaa-ahmed-38a0ba287/"
            color="inherit"
            variant="body2"
            target='_blank'
            sx={{
              ml: 1,
              color: !light && '#ccc',
              mr: 1
            }}
          >
            Dev.Alaa Ahmed
          </Link>
           كل الحقوق محفوظة{' '}
        </Typography>
        </Box>
    </Box>
  );

  return   mainFooter 
}

Footer.propTypes = {
  footerData: PropTypes.object.isRequired
}