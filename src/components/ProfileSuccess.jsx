import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function ProfileSuccess() {
  return (
    <Paper className="profileForm" sx={{ py: 3, px: 2, borderRadius: '10px', height: 0.2 }}>
      <Grid container textAlign="center" flexDirection="column" justifyContent="space-evenly" sx={{ height: 1 }}>
        <Typography variant="h4">Профиль</Typography>
        <Typography variant="body1">
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </Typography>
        <Link to="/main">
          <Button 
            variant="contained"
            sx={{ 
              borderRadius: '40px',
              fontSize: '16px',
              fontWeight: 'bold',
              bgcolor: '#FDBF5A',
              px: '20px',
              '&:hover': {
                backgroundColor: '#FFA842',
              },
            }}
          >
            Перейти на карту
          </Button>
        </Link>
      </Grid>
    </Paper>
  )
}

export default ProfileSuccess;
