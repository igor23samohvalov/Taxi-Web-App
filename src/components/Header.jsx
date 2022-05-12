import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: '#1B1A18'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end'}} >
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