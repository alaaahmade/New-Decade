import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useNavigate } from 'react-router-dom';
import { PATH_LOGIN } from 'src/config-global';

import axiosInstance from 'src/utils/axios'

const Signup = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [workspaceName, setWorkspaceName] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    workspaceName: '',
  });

  const handleSignup = async () => {
    // Reset error messages
    setErrorMessages({
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      workspaceName: '',
    });

    // Validate fields
    let hasErrors = false;
    if (!username) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        username: 'Please enter Email Address!',
      }));
      hasErrors = true;
    }
    if (!firstName) {
        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            firstName: 'Please enter First Name!',
        }));
        hasErrors = true;
    }
    if (!lastName) {
        setErrorMessages((prevErrors) => ({
            ...prevErrors,
            lastName: 'Please enter Last Name!',
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
    if (!confirmPassword) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Please confirm Password!',
      }));
      hasErrors = true;
    }
    if (password !== confirmPassword) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match!',
      }));
      hasErrors = true;
    }
    if (!workspaceName) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        workspaceName: 'Invalid workspace name!',
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    try {
      // Make API call to sign up (placeholder URL)
      await axiosInstance.post('/api/signup/', {
        username: username,
        first_name: firstName,
        last_name: lastName,
        password: password,
        workspace_name: workspaceName,
      });

      // Handle successful sign up
      console.log('Sign up successful');
      navigate(PATH_LOGIN)
    } catch (error) {
      // Handle sign up error
      console.error('Sign up error:', error);
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
            justifyContent: 'center',
            p: 3,
          }}
        >
          <PersonAddIcon sx={{ fontSize: '2rem', mb: 2 }} />
          <Typography variant="h4">Sign Up</Typography>
          <Box sx={{ width: '100%', mt: 2 }}>
            <TextField
              label="Email Address"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              margin="normal"
              error={Boolean(errorMessages.username)}
              helperText={errorMessages.username}
            />
            <TextField
              label="First Name"
              variant="outlined"
              type="text"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              fullWidth
              margin="normal"
              error={Boolean(errorMessages.firstName)}
              helperText={errorMessages.firstName}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              type="text"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              fullWidth
              margin="normal"
              error={Boolean(errorMessages.lastName)}
              helperText={errorMessages.lastName}
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
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              margin="normal"
              error={Boolean(errorMessages.confirmPassword)}
              helperText={errorMessages.confirmPassword}
            />
            <TextField
              label="Workspace Name"
              variant="outlined"
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              fullWidth
              margin="normal"
              error={Boolean(errorMessages.workspaceName)}
              helperText={errorMessages.workspaceName}
            />
            <Button
              onClick={handleSignup}
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: '#2292F9',
                '&:hover': {
                  backgroundColor: '#0e5ebf',
                },
              }}
            >
              Create Account
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
    </div>
  );
};

export default Signup;
