import React from 'react';
import { Box, TextField, Typography, Button, Grid } from '@mui/material';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object({
  email: yup
    .string('Email to be a string')
    .email('Invalid email address')
    .required('Email is required'),
  name: yup
    .string('Name must be a string')
    .required('Name is required'),
  surname: yup
    .string('Surname must be a string')
    .required('Surname is required'),
  password: yup
    .string('Password must be a string')
    .min(6, 'Must be 6 characters or more')
    .required('Password is required'),
});

function SignupForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      surname: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(formik.errors.email)
      axios({
        method: 'post',
        url: 'https://loft-taxi.glitch.me/register',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(values),
      })
      .then((response) => {
        if (!response.data.success) {
          formik.setFieldError('email', response.data.error)
        } else {
          localStorage.setItem('token', JSON.stringify(response.data.token))
          navigate('/')
        }
      })
      .catch((error) => {
        console.log(error.message)
        formik.setFieldError('password', 'Ошибка сети')
      })
    },
  });

  return (
    <Box 
      component="form" 
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        px: {
          xs: 5,
          md: 8,
        },
        alignItems: 'center',
        height: 1
      }}
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h4">Регистрация</Typography>
      <div style={{ width: '100%' }}>
        <TextField
          id="email"
          label="Адрес электронной почты"
          variant="standard"
          margin="dense"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />
        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <TextField
            id="name"
            label="Имя"
            variant="standard"
            margin="dense"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ width: 0.48 }}
          />
          <TextField
            id="surname"
            label="Фамилия"
            variant="standard"
            margin="dense"
            value={formik.values.surname}
            onChange={formik.handleChange}
            error={formik.touched.surname && Boolean(formik.errors.surname)}
            helperText={formik.touched.surname && formik.errors.surname}
            sx={{ width: 0.48 }}
          />
        </Grid>
        <TextField
          id="password"
          label="Пароль"
          type="password"
          variant="standard"
          margin="dense"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          fullWidth
        />
      </div>
      <Button
        sx={{
          borderRadius: '40px',
          fontSize: '16px',
          fontWeight: 'bold',
          bgcolor: '#FDBF5A',
          '&:hover': {
            backgroundColor: '#FFA842',
          }
        }}
        variant="contained"
        type="submit"
        fullWidth
      >
        Зарегистрироваться
      </Button>
      <Typography variant="body1" sx={{ alignSelf: 'flex-start' }}>Уже зарегистрированы?
        <br />
        <Link to="/" style={{ color: "#FDBF5A", textDecoration: "none" }}>
          Войти
        </Link>
      </Typography>
    </Box>
  )
}

export default SignupForm;