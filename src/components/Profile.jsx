import React, { useState } from 'react';
import {
  Grid, Box, TextField, Button, Typography, Paper
} from '@mui/material';
import axios from 'axios';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../slices/cardDataSlice.js';
import profileLogo from '../assets/images/subtract-profile.png';
import profileVisa from '../assets/images/visa-profile.png';
import ProfileSuccess from './ProfileSuccess.jsx';

const validationSchema = yup.object({
  cardName: yup
    .string('Только письменные символы')
    .required('Обязательное поле'),
  cardNumber: yup
    .number('Только числа')
    .required('Обязательное поле'),
  expiryDate: yup
    .string('Только числа')
    .required('Обязательное поле'),
  cvc: yup
    .number('Только числа')
    .required('Обязательное поле'),
});

const formatDate = (date = '0000') => `${date.slice(0, 2)}/${date.slice(2)}`;

function Profile() {
  const dispatch = useDispatch();
  const {
    cardName, expiryDate, cardNumber, cvc
  } = useSelector((state) => state.cardData.cardData);
  const formattedDate = formatDate(expiryDate);

  const [isProfileSaved, setProfileSaved] = useState(false);

  const formik = useFormik({
    initialValues: {
      cardName: cardName,
      cardNumber: cardNumber,
      expiryDate: formattedDate,
      cvc: cvc,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values) => {
      const token = localStorage.getItem('token');
      try {
        const response = await axios({
          method: 'post',
          url: 'https://loft-taxi.glitch.me/card',
          header: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({...values, token}),
        });

        if (!response.data.success) throw new Error(response.data.error)

        dispatch(actions.setCardData(values));
        setProfileSaved(true);
      } catch (error) {
        console.log(error.message)
      }
    }
  })

  if (isProfileSaved) return <ProfileSuccess />

  return (
    <Paper className="profileForm" sx={{ py: 3, px: 2, borderRadius: '10px' }}>
      <Grid container spacing={2} justifyContent="center" alignContent="center" sx={{ height: 1 }}>
        <Grid item xs={12} textAlign="center" sx={{ height: 0.2 }}>
          <Typography variant="h4">Профиль</Typography>
          <Typography variant="body1">Введите платежные данные</Typography>
        </Grid>
        <Grid item xs={12} sx={{ height: 0.8 }}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              alignItems: 'center',
              height: 1,
              px: 2,
            }}
            onSubmit={formik.handleSubmit}
          >
            <Grid container item spacing={2} xs={5}>
              <Grid item xs={12}>
                <TextField
                  id="cardName"
                  label="Имя владельца"
                  variant="standard"
                  value={formik.values.cardName}
                  onChange={formik.handleChange}
                  error={formik.touched.cardName && Boolean(formik.errors.cardName)}
                  helperText={formik.touched.cardName && formik.errors.cardName}
                  margin="dense"
                  fullWidth 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="cardNumber"
                  label="Номер карты"
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                  helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                  variant="standard"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="expiryDate"
                  label="MM/YY"
                  value={formik.values.expiryDate}
                  onChange={formik.handleChange}
                  error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
                  helperText={formik.touched.expiryDate && formik.errors.expiryDate}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="cvc"
                  label="cvc"
                  value={formik.values.cvc}
                  onChange={formik.handleChange}
                  error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                  helperText={formik.touched.cvc && formik.errors.cvc}
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid container item xs={6} alignContent="center" justifyContent="center" sx={{ height: 0.8 }}>
              <Paper elevation={6} sx={{ height: 0.7, width: 0.7, py: 2, px: 3, borderRadius: '10px' }}>
                <Grid container justifyContent="space-between" sx={{ height: 1 }}>
                  <Grid item container xs={12} justifyContent="space-between">
                    <img src={profileLogo} alt="Taxi Logo" width="33px" height="33px" />
                    <span>{formik.values.expiryDate}</span>
                  </Grid>
                  <Grid item xs={12} justifyContent="flex-start" alignSelf="center">
                    {formik.values.cardNumber}
                  </Grid>
                  <Grid item container xs={12} justifyContent="space-between" alignSelf="flex-end">
                  <img src={profileVisa} alt="Visa Logo" />
                  <img src={profileVisa} alt="Visa Logo" />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Button
                sx={{ 
                  borderRadius: '40px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  bgcolor: '#FDBF5A',
                  px: '20px',
                  '&:hover': {
                    backgroundColor: '#FFA842',
                  },
                }}
                variant="contained"
                type="submit"
                fullWidth
              >
                Сохранить
              </Button>
            </Grid>
          </Box>
        </Grid>
        
      </Grid>
    </Paper>
  )
}

export default Profile;