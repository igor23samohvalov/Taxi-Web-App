import React from 'react';
import { Grid, Container } from '@mui/material';
import Header from '../components/Header.jsx';
import Map from '../components/Map.jsx';

const MainPage = () => {
  return (
    <Container maxWidth="false" sx={{ bgcolor: '#1C1A19', height: '100vh'}} disableGutters={true}>
      <Grid container sx={{ height: 1 }}>
        <Header />
        <Map />
      </Grid>
    </Container>
  )
}

export default MainPage