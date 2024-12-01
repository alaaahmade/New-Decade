import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { PATH_LOGIN } from 'src/config-global'; 

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      // Make API call to request password reset
      await axios.post('http://122.248.219.118/api/password/request-reset/', {
        email,
      });

      // Handle successful request
      setSuccessMessage('Password reset request sent successfully.');
      setErrorMessage('');
    } catch (error) {
      // Handle request error
      setErrorMessage('Error sending password reset request. Please check your email and try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div style={{ backgroundColor: '#0C141F', height: '100vh', paddingTop: 100 }}>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <Typography variant="h4">Forget Password</Typography>
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
            />
            {successMessage && (
              <Typography variant="body2" color="success" style={{ textAlign: 'center', marginTop: '1rem' }}>
                {successMessage}
              </Typography>
            )}
            {errorMessage && (
              <Typography variant="body2" color="error" style={{ textAlign: 'center', marginTop: '1rem' }}>
                {errorMessage}
              </Typography>
            )}
            <Button
              onClick={handleResetPassword}
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '1rem', backgroundColor: '#2292F9' }}
            >
              Submit
            </Button>
            <Typography variant="body2" style={{ marginTop: '1rem', textAlign: 'center' }}>
              Remember your password? <Link to={PATH_LOGIN}>Login Here</Link>
            </Typography>
          </div>
        </Paper>
      </Container>
    </div>
  );
};

export default ForgotPasswordPage;
