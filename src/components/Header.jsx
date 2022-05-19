import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import lcLogo from '../assets/images/lc-logo.png'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, height: 0.075 }}>
      <AppBar position="static" sx={{ bgcolor: '#1B1A18'}}>
        
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end'}} >
          <img src={lcLogo} alt="Login Logo" style={{ alignSelf: 'start', justifySelf: 'start'}} />
          <Typography variant="body1" component="div" sx={{ mx: 2 }}>
            Карта
          </Typography>
          <Typography variant="body1" component="div" sx={{ mx: 2 }}>
            Профиль
          </Typography>
          <Typography variant="body1" component="div" sx={{ mx: 2 }}>
            Выйти
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header