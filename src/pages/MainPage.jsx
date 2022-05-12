import { Grid } from '@mui/material';
import React from 'react';
import Header from '../components/Header.jsx';
import Map from '../components/Map.jsx';

const MainPage = () => {
  return (
    <Grid container sx={{ height: 1 }}>
      <Header />
      <Map />
    </Grid>
  )
}

export default MainPage