import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, TextField, Paper, Grid, MenuItem,
} from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import buisnessCar from '../assets/images/car-buiseness.png';
import standartCar from '../assets/images/card-standart.png';
import premiumCar from '../assets/images/car-premium.png';
import { drawRoute } from '../utilityFns/drawRoute';
import OrderDone from './OrderDone.jsx';
import SubmittingButton from './SubmittingButton.jsx';
import { useSelector } from 'react-redux';

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
  const [whereFromMenus, setWhereFrom] = useState(addresses);
  const [whereToMenus, setWhereTo] = useState(addresses);

  useEffect(() => {
    setWhereFrom(addresses);
    setWhereTo(addresses);
  }, [addresses])

  const formik = useFormik({
    initialValues: {
      whereFrom: '',
      whereTo: '',
    },
    onSubmit: async ({ whereFrom, whereTo}) => {
      try {
        const response = await axios.get(`https://loft-taxi.glitch.me/route?address1=${whereFrom}&address2=${whereTo}`);
        drawRoute(mapLink, response.data);
        setOrderDone(true);
      } catch (err) {
        formik.setFieldError('whereFrom', 'Ошибка сети')
        formik.setSubmitting(false);
      }
    },
  })
  if (isOrderDone) return <OrderDone />

  const handleChange = (e) => {
    if (e.target.name === 'whereFrom') {
      setWhereTo(addresses.filter((m) => m !== e.target.value));
    } else {
      setWhereFrom(addresses.filter((m) => m !== e.target.value));
    }
    formik.handleChange(e);
  }

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
          onChange={(e) => handleChange(e)}
          variant="standard"
          fullWidth
          error={Boolean(formik.errors.whereFrom)}
          helperText={formik.errors.whereFrom}
        >
          {whereFromMenus.map((address, i) => (
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
          onChange={(e) => handleChange(e)}
          variant="standard"
          fullWidth
        >
          {whereToMenus.map((address, i) => (
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
        {formik.isSubmitting ? (
          <SubmittingButton />
        ) : (
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
            }}
            fullWidth
          >
            Заказать
          </Button>
        )}
      </Box>
    </Paper>
  )
}

OrderForm.propTypes = {
  mapLink: PropTypes.object,
}

export default OrderForm