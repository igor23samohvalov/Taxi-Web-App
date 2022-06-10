import React, { useState } from 'react';
import {
  Box, Button, TextField, Paper, Grid, MenuItem,
} from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import buisnessCar from '../assets/images/car-buiseness.png';
import standartCar from '../assets/images/card-standart.png';
import premiumCar from '../assets/images/car-premium.png';
import { drawRoute } from '../utilityFns/drawRoute';
import OrderDone from './OrderDone.jsx';

const carOptions = [
  {
    class: 'Стандарт',
    price: '150р',
    image: standartCar,
  },
  {
    class: 'Бизнес',
    price: '250р',
    image: buisnessCar,
  },
  {
    class: 'Премиум',
    price: '350р',
    image: premiumCar,
  },
]


function OrderForm({ mapLink }) {
  const addresses = useSelector((state) => state.addresses.addresses);
  const [activeCar, setActiveCar] = useState(0);
  const [isOrderDone, setOrderDone] = useState(false);

  const formik = useFormik({
    initialValues: {
      whereFrom: '',
      whereTo: '',
    },
    onSubmit: async ({ whereFrom, whereTo}) => {
      const response = await axios.get(`https://loft-taxi.glitch.me/route?address1=${whereFrom}&address2=${whereTo}`);
      drawRoute(mapLink, response.data);
      setOrderDone(true);
    }
  })
  if (isOrderDone) return <OrderDone />

  return (
    <Paper 
      className="orderForm"
      sx={{ 
        width: { xs: 1, md: 0.3 },
        height: { xs: 0.5, md: 0.5 },
        borderRadius: { xs: 0, md: '20px' },
      }}
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
        onSubmit={formik.handleSubmit}
      >
        <TextField
          id="whereFrom"
          name="whereFrom"
          select
          label="Откуда"
          value={formik.values.whereFrom}
          onChange={formik.handleChange}
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
          name="whereTo"
          select
          label='Куда'
          value={formik.values.whereTo}
          onChange={formik.handleChange}
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
          {carOptions.map((car, i) => (
            <Paper 
              key={i}
              elevation={4}
              className={i === activeCar ? 'autoCard' : 'autoCard opacity'}
              onClick={() => setActiveCar(i)}
              sx={{ borderRadius: '20px', overflow: 'hidden', height: '170px' }}
            >
              <b>{car.class}</b>
              <span>Стоимость</span>
              <i>{car.price}</i>
              <img src={car.image} alt={car.class} />
            </Paper>
          ))}
        </Grid>
        <Button
          variant="contained"
          type="submit"
          sx={{
            borderRadius: '40px',
            fontSize: '16px',
            fontWeight: 'bold',
            bgcolor: '#FDBF5A',
            '&:hover': {
              backgroundColor: '#FFA842',
            },
            py: '15px',
          }}
          fullWidth
        >
          Заказать
        </Button>
      </Box>
    </Paper>
    
  )
}

export default OrderForm