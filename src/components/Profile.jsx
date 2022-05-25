import React from 'react';
import {
  Grid, Box, TextField, Button, Typography, Paper
} from '@mui/material';
import { useSelector } from 'react-redux';
import profileLogo from '../assets/images/subtract-profile.png';
import profileVisa from '../assets/images/visa-profile.png';

function Profile() {
  const {
    cardName, expiryDate, cardNumber, cvc
  } = useSelector((state) => state.cardData.cardData);

  const formattedDate = `${expiryDate.slice(0, 2)}/${expiryDate.slice(2)}`;

  return (
    <Paper className="profileForm" sx={{ py: 3, px: 2, borderRadius: '10px' }}>
      <Grid container spacing={4} justifyContent="center" alignItems="space-between" sx={{ height: 1 }}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h4">Профиль</Typography>
          <Typography variant="body1">Введите платежные данные</Typography>
        </Grid>
        <Grid item xs={5}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexDirection: 'column',
              alignItems: 'center',
              height: 1,
              px: 2,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="profileName"
                  label="Имя владельца"
                  variant="standard"
                  value={cardName}
                  margin="dense"
                  fullWidth 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="profileCardNumber"
                  label="Номер карты"
                  value={cardNumber}
                  variant="standard"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="data"
                  label="MM/YY"
                  value={formattedDate}
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="CVC"
                  label="CVC"
                  value={cvc}
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item container xs={6} alignContent="center" justifyContent="center">
          <Paper elevation={6} sx={{ height: 0.7, width: 0.7, py: 2, px: 3, borderRadius: '10px' }}>
            <Grid container justifyContent="space-between" sx={{ height: 1 }}>
              <Grid item container xs={12} justifyContent="space-between">
                <img src={profileLogo} alt="Taxi Logo" width="33px" height="33px" />
                <span>{formattedDate}</span>
              </Grid>
              <Grid item xs={12} justifyContent="flex-start" alignSelf="center">
                {cardNumber}
              </Grid>
              <Grid item container xs={12} justifyContent="space-between" alignSelf="flex-end">
              <img src={profileVisa} alt="Visa Logo" />
              <img src={profileVisa} alt="Visa Logo" />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Button
            sx={{ borderRadius: '40px', fontSize: '1.3rem', bgcolor: '#FDBF5A', px: '20px' }}
            variant="contained"
            type="submit"
            fullWidth
          >
            Сохранить
          </Button>
        </Grid>
      </Grid>

    </Paper>
  )
}

export default Profile;