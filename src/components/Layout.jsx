import React from 'react';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container maxWidth="false" sx={{ bgcolor: '#1C1A19', height: '100vh'}} disableGutters={true}>
      <Outlet />
    </Container>
  )
}

export default Layout