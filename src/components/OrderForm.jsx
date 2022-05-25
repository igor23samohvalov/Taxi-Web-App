import React from 'react';
import {
  Box, Button, TextField, Paper, Grid, MenuItem,
} from '@mui/material';
import { useSelector } from 'react-redux';
import buisnessCar from '../assets/images/car-buiseness.png';
import standartCar from '../assets/images/card-standart.png';
import premiumCar from '../assets/images/car-premium.png';


function OrderForm() {
  const addresses = useSelector((state) => state.addresses.addresses);

  return (
    <Paper 
      className="orderForm"
      sx={{ width: 0.3, height: 0.4, py: 2, borderRadius: '20px'}}
      elevation={6}
    >
      <Box 
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexDirection: 'column',
          alignItems: 'center',
          px: 5,
          height: 1
        }}
      >
        <TextField
          id="whereFrom"
          select
          helperText="Откуда"
          defaultValue=""
          variant="standard"
          fullWidth
        >
          {addresses.map((address, i) => (
            <MenuItem key={i} value={address}>
              {address}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="whereTo"
          select
          helperText="Куда"
          defaultValue=""
          variant="standard"
          fullWidth
        >
          {addresses.map((address, i) => (
            <MenuItem key={i} value={address}>
              {address}
            </MenuItem>
          ))}
        </TextField>
        <Grid container justifyContent="space-between" sx={{ px: 2 }}>
          <Paper className="autoCard" elevation={4} sx={{ borderRadius: '20px' }}>
            <p>Стандарт</p>
            <span>Стоимость</span>
            <p>150Р</p>
            <img src={standartCar} alt="Buisness Car"/>
          </Paper>
          <Paper className="autoCard" elevation={4} sx={{ borderRadius: '20px' }}>
            <p>Бизнес</p>
            <span>Стоимость</span>
            <p>250Р</p>
            <img src={buisnessCar} alt="Buisness Car"/>
          </Paper>
          <Paper className="autoCard" elevation={4} sx={{ borderRadius: '20px' }}>
            <p>Премиум</p>
            <span>Стоимость</span>
            <p>350Р</p>
            <img src={premiumCar} alt="Buisness Car"/>
          </Paper>
        </Grid>
        <Button
          variant="contained"
          sx={{ bgcolor: '#FDBF5A', borderRadius: '40px', py: '15px' }}
          fullWidth
        >
          Заказать
        </Button>
      </Box>
    </Paper>
    
  )
}

export default OrderForm