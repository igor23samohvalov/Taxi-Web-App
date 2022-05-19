import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, TextField, Typography, Button, Paper } from '@mui/material';
import frontLogo from '../assets/images/front-logo.png';

const LoginPage = () => {
  return (
    <Grid container sx={{ height: 1 }}>
      <Grid item container xs={4} justifyContent="center" alignContent="center">
        <img src={frontLogo}  alt="Taxi Logo" />
      </Grid>
      <Grid item container className='loginpage-container' xs={8} justifyContent="center" alignContent="center">
          <Paper sx={{ width: 0.4, height: 0.4, py: 5, borderRadius: '20px' }} elevation={6}>
            <Box component="form" sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', px: 10, alignItems: 'center', height: 1 }}>
              <Typography variant="h4">Войти</Typography>
              <div style={{ width: '100%' }}>
                <TextField id="loginUsername" label="Имя пользователя" variant="standard" margin="dense" fullWidth />
                <TextField id="loginPassword" label="Пароль" variant="standard" margin="dense" fullWidth />
              </div>
              <Button sx={{ borderRadius: '40px', fontSize: '1.3rem', bgcolor: '#FDBF5A' }} variant="contained" fullWidth>Войти</Button>
              <Typography variant="body1">Новый пользователь? <Link to="/signup" style={{ color: "#FDBF5A", textDecoration: "none" }}>Зарегистрируйтесь</Link></Typography>
            </Box>
          </Paper>
      </Grid>
    </Grid>
  )
}

export default LoginPage