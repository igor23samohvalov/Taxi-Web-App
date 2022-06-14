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
import SubmittingButton from './SubmittingButton.jsx';

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
const formatNumber = (string, chunkSize) => {
  string = String(string);
  const result = [];
  for (let i = 0; i < string.length; i += chunkSize) {
    result.push(string.slice(i, chunkSize + i))
  }

  return result.join(' ');
};


const getInitialValues = (data) => {
  if (Object.keys(data).length === 0) data = {
    cardNumber: '',
    expiryDate: '0000',
    cardName: '',
    cvc: '',
  }

  return data;
}

function Profile() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cardData.cardData);
  const [isProfileSaved, setProfileSaved] = useState(false);

  const formik = useFormik({
    initialValues: getInitialValues(data),
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
        formik.setFieldError('cardName', 'Ошибка сети')
        formik.setSubmitting(false);
      }
    }
  })

  if (isProfileSaved) return <ProfileSuccess />

  return (
    <Paper className="profileForm" 
      sx={{
        py: 3,
        px: 2,
        borderRadius: '10px',
        width: { xs: 0.83, md: 0.5 },
        height: { xs: 0.7, md: 0.4 },
      }}
    >
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
            <Grid container item spacing={2} xs={12} md={5}>
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
                  inputProps={{ maxLength: 16 }}
                  value={formik.values.cardNumber}
                  onChange={formik.handleChange}
                  error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                  helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="expiryDate"
                  label="MM/YY"
                  inputProps={{ maxLength: 4 }}
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
                  inputProps={{ maxLength: 3 }}
                  value={formik.values.cvc}
                  onChange={formik.handleChange}
                  error={formik.touched.cvc && Boolean(formik.errors.cvc)}
                  helperText={formik.touched.cvc && formik.errors.cvc}
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid 
              container
              item
              xs={12}
              md={6}
              alignContent="center"
              justifyContent="center"
              sx={{ height: { xs: 0.5, md: 0.8 } }}
            >
              <Paper 
                elevation={6}
                sx={{ 
                  height: { xs: 0.55, md: 0.7 },
                  width: { xs: 1, md: 0.7 },
                  py: 2,
                  px: 3,
                  borderRadius: '10px'
                }}
              >
                <Grid container justifyContent="space-between" sx={{ height: 1 }}>
                  <Grid item container xs={12} justifyContent="space-between">
                    <img src={profileLogo} alt="Taxi Logo" width="33px" height="33px" />
                    <span>{formatDate(formik.values.expiryDate)}</span>
                  </Grid>
                  <Grid item xs={12} justifyContent="flex-start" alignSelf="center">
                    {formatNumber(formik.values.cardNumber, 4)}
                  </Grid>
                  <Grid item container xs={12} justifyContent="space-between" alignSelf="flex-end">
                  <img src={profileVisa} alt="Visa Logo" />
                  <img src={profileVisa} alt="Visa Logo" />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={8} md={3}>
              {formik.isSubmitting ? (
                <SubmittingButton />
              ) : (
                <Button
                  sx={{ 
                    borderRadius: '40px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    bgcolor: '#FDBF5A',
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
              )}
            </Grid>
          </Box>
        </Grid>
        
      </Grid>
    </Paper>
  )
}

export default Profile;