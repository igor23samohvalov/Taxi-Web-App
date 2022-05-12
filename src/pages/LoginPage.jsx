import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, TextField, Button, Typography, } from '@mui/material';

const LoginPage = () => {
  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item container xs={4} justifyContent="center" alignContent="center">

      </Grid>
      <Grid item container xs={8} sx={{ bgcolor: '#F6F6F4' }} justifyContent="center" alignContent="center">
          <Grid item sx={{ width: 1/2, height: 1/2, bgcolor: '#fff', px: 10, py: 7 }}>
            <Box component="form" sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center', height: 1 }}>
              <Typography variant="h4">Войти</Typography>
              <div>
                <TextField id="loginUsername" label="Имя пользователя" variant="standard" margin="dense" fullWidth  />
                <TextField id="loginPassword" label="Пароль" variant="standard" margin="dense" fullWidth />
              </div>
              <Button variant="contained" sx={{ bgcolor: '#FDBF5A' }} fullWidth>Войти</Button>
              <Typography variant="body1">Новый пользователь? <Link to="/signup" color="#FDBF5A" underline="none">Зарегистрируйтесь</Link></Typography>
            </Box>
          </Grid>
      </Grid>
    </Grid>
  )
}

export default LoginPage