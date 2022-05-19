import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, TextField, Button, Typography, Paper } from '@mui/material';
import frontLogo from '../assets/images/front-logo.png';

const SignupPage = () => {
  return (
    <Grid container sx={{ height: 1 }}>
      <Grid item container xs={4} justifyContent="center" alignContent="center">
        <img src={frontLogo}  alt="Taxi Logo" />
      </Grid>
      <Grid item container xs={8} className='loginpage-container' justifyContent="center" alignContent="center">
        <Paper sx={{ width: 0.4, height: 0.4, py: 5, borderRadius: '20px' }} elevation={6}>
            <Box component="form" sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', px: 10, alignItems: 'center', height: 1 }}>
              <Typography variant="h4">Регистрация</Typography>
              <div style={{ width: '100%' }}>
                <TextField id="email" label="Адрес электронной почты" variant="standard" margin="dense" fullWidth  />
                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} >
                  <TextField id="name" label="Имя" variant="standard" margin="dense" sx={{ width: 0.48 }} />
                  <TextField id="surname" label="Фамилия" variant="standard" margin="dense" sx={{ width: 0.48 }} />
                </Grid>
                <TextField id="signupPassword" label="Пароль" variant="standard" margin="dense" fullWidth />
              </div>
              <Button sx={{ borderRadius: '40px', fontSize: '1.3rem', bgcolor: '#FDBF5A' }} variant="contained" fullWidth>Зарегистрироваться</Button>
              <Typography variant="body1">Уже зарегистрированы? <Link to="/login" style={{ color: "#FDBF5A", textDecoration: "none" }}>Войти</Link></Typography>
            </Box>
          </Paper>
      </Grid>
    </Grid>
  )
}

export default SignupPage