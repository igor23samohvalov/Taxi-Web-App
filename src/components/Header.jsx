import React from 'react';
import { Box, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import lcLogo from '../assets/images/lc-logo.png'

const Header = () => {
  const handleClick = () => localStorage.removeItem('token');

  return (
    <Box sx={{ flexGrow: 1, height: 0.075, display: 'flex' }} alignItems="center">
      <AppBar position="static" sx={{ bgcolor: '#1B1A18'}}>
        
        <Toolbar style={{ justifyContent: "space-between" }} >
          <Grid>
            <img src={lcLogo} alt="Login Logo" />
          </Grid>
          <Grid style={{ display: 'flex' }}>
            <Typography variant="body1" component="div" sx={{ mx: 2 }}>
              <NavLink to="" end>Карта</NavLink>
            </Typography>
            <Typography variant="body1" component="div" sx={{ mx: 2 }}>
              <NavLink to="profile">Профиль</NavLink>
            </Typography>
            <Typography variant="body1" component="div" sx={{ mx: 2 }}>
              <NavLink to="/" onClick={handleClick}>Выйти</NavLink>
            </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header