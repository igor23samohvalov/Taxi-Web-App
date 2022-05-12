import React from 'react';
import { Grid, Box, TextField, Button, Typography } from '@mui/material';

function Profile() {
  return (
    <Grid sx={{ width: 1/2, height: 1/2, bgcolor: '#fff', px: 10, py: 7 }}>
      <Box component="form" sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center', height: 1 }}>
        <Typography variant="h4">Профиль</Typography>
        <Typography variant="body1">Введите платежные данные</Typography>
        <div>
          <TextField id="profileName" label="Имя владельца" variant="standard" margin="dense" fullWidth  />
          <TextField id="profileCardNumber" label="Номер карты" variant="standard" type="number" margin="dense" fullWidth />
          <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} >
            <TextField id="name" label="Имя" variant="standard" margin="dense" sx={{ width: 0.45 }} />
            <TextField id="surname" label="Фамилия" variant="standard" margin="dense" sx={{ width: 0.45 }} />
          </Grid>
        </div>
        <Button variant="contained" sx={{ bgcolor: '#FDBF5A' }} fullWidth>Зарегистрироваться</Button>
        <Typography variant="body1">Уже зарегистрированы? <Link to="/login" color="#FDBF5A" underline="none">Войти</Link></Typography>
      </Box>
    </Grid>
  )
}

export default Profile