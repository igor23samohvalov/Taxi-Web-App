import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Grid, Paper, Container } from '@mui/material';
import frontLogo from '../assets/images/front-logo.png';

function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/main')
  }, [navigate])

  return (
    <Container maxWidth="false" sx={{ bgcolor: '#1C1A19', height: '100vh'}} disableGutters={true}>
      <Grid container sx={{ height: 1 }}>
        <Grid item container xs={4} justifyContent="center" alignContent="center">
          <img src={frontLogo}  alt="Taxi Logo" />
        </Grid>
        <Grid item container className='loginpage-container' xs={8} justifyContent="center" alignContent="center">
            <Paper sx={{ width: 0.4, height: 0.4, py: 5, borderRadius: '20px' }} elevation={6}>
              <Outlet />
            </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default LoginPage;