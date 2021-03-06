import React from 'react';
import { Paper, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function OrderDone() {
  return (
    <Paper 
      className="orderForm"
      sx={{ 
        width: { xs: 1, md: 0.3 },
        height: { xs: 0.3, md: 0.3 },
        borderRadius: { xs: 0, md: '20px' },
      }}
      
      elevation={6}
    >
      <Grid
        container
        textAlign="left"
        flexDirection="column"
        justifyContent="space-evenly"
        sx={{ height: 1, px: 5 }}
      >
        <Typography variant="h4">Заказ размещен</Typography>
        <Typography variant="body1">
          Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
        </Typography>
        <Link to="/">
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
            Сделать новый заказ
          </Button>
        </Link>
      </Grid>
    </Paper>
  )
}

export default OrderDone