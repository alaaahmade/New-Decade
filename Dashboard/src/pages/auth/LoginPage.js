/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PATH_SIGN_UP, PATH_AFTER_LOGIN, PATH_FORGOT_PASSWORD } from 'src/config-global';
import { axiosReq } from 'src/utils/axiosReq';
import JwtService from 'src/services/JwtService';
import { AuthGardContext } from 'src/context/AuthContext';
import { LoadingButton } from '@mui/lab';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
    authentication: '', 
  });



  const {signIn, user} = useContext(AuthGardContext)

  useEffect(() => {
    const token = JwtService.getToken()
    const tokenC = document.cookie
    if(token && tokenC.length && user) {
      navigate('/dashboard')
    }

  }, [user])
  const handleLogin = async () => {
    // Reset error messages
    setLoading(true)
    setErrorMessages({ email: '', password: '', authentication: '' });

    // check what we get in username and password state
    console.warn(email, password);

    // Validate fields
    let hasErrors = false;
    if (!email) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter email!',
      }));
      hasErrors = true;
    }
    if (!password) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        password: 'Please enter Password!',
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    try {

      await signIn({email, password})
      console.log('Login successful');
      setLoading(false)


    } catch (error) {
      setLoading(false)
      console.error('Login error:', error);
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        authentication: 'Wrong email/password!',
      }));
    }
  };

  return (
    <div style={{ backgroundColor: '#0C141F', height: '100vh', paddingTop: 100 }}>
        <Container component="main" maxWidth="xs">
        <Paper elevation={3}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', // Center vertically
                p: 3,
            }}
            >
            <LockIcon sx={{ fontSize: '2rem', mb: 2 }} />
            <Typography variant="h4">Login</Typography>
            <Box sx={{ width: '100%', mt: 2 }}>
                <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                error={Boolean(errorMessages.email)}
                helperText={errorMessages.email}
                />
                <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                error={Boolean(errorMessages.password)}
                helperText={errorMessages.password}
                />
                <LoadingButton
                onClick={handleLogin}
                variant="contained"
                color="primary"
                loading={loading}
                fullWidth
                sx={{
                    mt: 2,
                    backgroundColor: '#2292F9',
                    '&:hover': {
                    backgroundColor: '#0e5ebf',
                    },
                }}
                >
                Login
                </LoadingButton>
                {errorMessages.authentication && (
                <Typography
                    variant="body2"
                    color="error"
                    sx={{ mt: 1, textAlign: 'center' }}
                >
                    {errorMessages.authentication}
                </Typography>
                )}

                {/* <Typography
                variant="body2"
                sx={{ mt: 1, textAlign: 'center' }}
                >
                Don't have an account?{' '}
                <Link to={PATH_SIGN_UP}>Sign Up Here</Link>
                </Typography> */}

                {/* <Typography
                variant="body2"
                sx={{ mt: 1, textAlign: 'center' }}
                >
                Forgot Password?{' '}
                <Link to={PATH_FORGOT_PASSWORD}>Reset Here</Link>
                </Typography> */}
            </Box>
            </Box>
        </Paper>
        </Container>
    </div>
  );
};

export default Login;
