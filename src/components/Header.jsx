import React from 'react';
import { Box,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import lcLogo from '../assets/images/lc-logo.png';
import MobileToolbar from './MobileToolbar.jsx';

const Header = () => {
  const handleClick = () => localStorage.removeItem('token');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isMobile ? <MobileToolbar logOut={handleClick} /> 
      : (
        <Box sx={{ flexGrow: 1, height: 0.075, display: 'flex' }} alignItems="center">
          <AppBar
            position="static"
            sx={{ bgcolor: "#1B1A18" }}
          >
            <Toolbar style={{ justifyContent: "space-between" }} >
              <Grid sx={{ display: { xs: 'none', md: 'block' } }}>
                <Link to=""><img src={lcLogo} alt="Login Logo" /></Link> 
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
      )}
    </>
  )
}

export default Header