import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

const validationSchema = yup.object({
  username: yup
    .string('Supposed to be a string')
    .required('Username is required'),
  password: yup
    .string('Password must be a string')
    .required('Password is required'),
});

function LoginForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: () => {
      const auth = {email: 'email@example.com', password: 'password'}
      axios({
        method: 'post',
        url: 'https://loft-taxi.glitch.me/auth',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(auth),
      })
      .then(({ data }) => localStorage.setItem('token', JSON.stringify(data.token)))
      .then(() => navigate('/main'))
    },
  });

  return (
    <Box 
      component="form" 
      sx={{ 
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems: 'center',
        px: {
          xs: 5,
          md: 8,
        },
        height: 1
      }}
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h4">Войти</Typography>
      <div style={{ width: '100%' }}>
        <TextField 
          id="username"
          label="Имя пользователя"
          variant="standard"
          margin="dense"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
          fullWidth
        />
        <TextField
          id="password"
          label="Пароль"
          variant="standard"
          margin="dense"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          fullWidth 
        />
      </div>
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
          }
        }}
        fullWidth
      >
        Войти
      </Button>
      <Typography variant="body1" sx={{ alignSelf: 'flex-start' }}>Новый пользователь?
        <br />
        <Link to="/signup" style={{ color: "#FDBF5A", textDecoration: "none" }}>
          Зарегистрируйтесь
        </Link>
      </Typography>
    </Box>
  )
}

export default LoginForm;
