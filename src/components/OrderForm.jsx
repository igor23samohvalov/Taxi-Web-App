import React from 'react';
import { Box, Button, FormControl, MenuItem, InputLabel, Select } from '@mui/material';

function OrderForm() {
  return (
    <Box component="form" sx={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column', alignItems: 'center', height: 500, bgcolor: '#fff', width: 600 }}>
      <div>
        <FormControl variant="standard" sx={{ m: 1 }} fullWidth>
          <InputLabel id="whereFrom">Откуда</InputLabel>
          <Select
            labelId="whereFrom"
            id="whereFrom"
            // value={age}
            // onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">Пулково (LED)</MenuItem>
            <MenuItem value="">Эрмитаж</MenuItem>
            <MenuItem value="">Кинотеатр Аврора</MenuItem>
            <MenuItem value="">Мариинский театр</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1 }} fullWidth>
          <InputLabel id="whereTo">Куда</InputLabel>
          <Select
            labelId="whereFrom"
            id="whereFrom"
            // value={age}
            // onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">Пулково (LED)</MenuItem>
            <MenuItem value="">Эрмитаж</MenuItem>
            <MenuItem value="">Кинотеатр Аврора</MenuItem>
            <MenuItem value="">Мариинский театр</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button variant="contained" sx={{ bgcolor: '#FDBF5A' }} fullWidth>Заказать</Button>
    </Box>
  )
}

export default OrderForm