import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import MapIcon from '@mui/icons-material/Map';

function MobileToolbar ({ logOut }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem>
            <MapIcon sx={{ mr: 1 }} />
            <ListItemText>
              <Link to="" className="mobileLink">
                Карта
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <AccountBoxIcon sx={{ mr: 1 }} />
            <ListItemText>
              <Link to="profile" className="mobileLink">
                Профиль
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <LogoutIcon sx={{ mr: 1 }} />
            <ListItemText>
              <Link to="/" className="mobileLink" onClick={() => logOut()}>
                Выйти
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ zIndex: 1000 }}>
        <Menu />
      </IconButton>
    </>
  )
}

export default MobileToolbar;