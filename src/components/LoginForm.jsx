import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import SubmittingButton from './SubmittingButton.jsx';

const validationSchema = yup.object({
  email: yup
    .string('Supposed to be a string')
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string('Password must be a string')
    .required('Password is required'),
});

function LoginForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      axios({
        method: 'post',
        url: 'https://loft-taxi.glitch.me/auth',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(values),
      })
      .then(({ data }) => {
        if (data.success) localStorage.setItem('token', JSON.stringify(data.token))
        else throw new Error(data.error)
      })
      .then(() => navigate('/main'))
      .catch((err) => {
        formik.setFieldError('email', err.message)
        formik.setSubmitting(false);
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
          name="email"
          label="Email"
          variant="standard"
          margin="dense"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          fullWidth
        />
        <TextField
          name="password"
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
            }
          }}
          fullWidth
        >
          Войти
        </Button>
      )}
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
