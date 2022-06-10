import React, { useEffect, useState } from 'react';
import { Grid, Container } from '@mui/material';
import { fetchAddresses } from '../slices/addressesSlice';
import { fetchCardData } from '../slices/cardDataSlice';
import Header from '../components/Header.jsx';
import Map from '../components/Map.jsx';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import Profile from '../components/Profile';

const MainPage = () => {
  const dispatch = useDispatch();
  const [mapLink, setMapLink] = useState(null);

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCardData());
  }, [dispatch]);

  return (
    <Container maxWidth="false" sx={{ height: '100vh', bgcolor: 'transparent' }} disableGutters={true}>
      <Grid container sx={{ height: 1 }}>
        <Header />
        <Map setMap={setMapLink} />
        <Routes>
          <Route index element={<OrderForm mapLink={mapLink} />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Grid>
    </Container>
  )
}

export default MainPage