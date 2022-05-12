import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, TextField, Button, Typography } from '@mui/material';

const SignupPage = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item container xs={4} justifyContent="center" alignContent="center">

      </Grid>
      <Grid item container xs={8} sx={{ bgcolor: '#F6F6F4' }} justifyContent="center" alignContent="center">
          <Grid item sx={{ width: 1/2, height: 1/2, bgcolor: '#fff', px: 10, py: 7 }}>
            <Box component="form" sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center', height: 1 }}>
              <Typography variant="h4">Регистрация</Typography>
              <div>
                <TextField id="email" label="Адрес электронной почты" variant="standard" margin="dense" fullWidth  />
                <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} >
                  <TextField id="name" label="Имя" variant="standard" margin="dense" sx={{ width: 0.48 }} />
                  <TextField id="surname" label="Фамилия" variant="standard" margin="dense" sx={{ width: 0.48 }} />
                </Grid>
                <TextField id="signupPassword" label="Пароль" variant="standard" margin="dense" fullWidth />
              </div>
              <Button variant="contained" sx={{ bgcolor: '#FDBF5A' }} fullWidth>Зарегистрироваться</Button>
              <Typography variant="body1">Уже зарегистрированы? <Link to="/login" color="#FDBF5A" underline="none">Войти</Link></Typography>
            </Box>
          </Grid>
      </Grid>
    </Grid>
  )
}

export default SignupPage