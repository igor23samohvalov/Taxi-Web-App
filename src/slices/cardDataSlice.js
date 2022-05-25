import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCardData = createAsyncThunk(
  'cardData/fetchCardData',
  async () => {
    try {
      // const token = localStorage.getItem('token');
      const response = await axios.get(`https://loft-taxi.glitch.me/card?token=AUTH_TOKEN`);

      if (response.status !== 200) throw new Error(`Response Error, code: ${response.status}`)

      return response.data;
    } catch (error) {
      console.log(error.message)
    }
  }
)

const initialState = { cardData: {} };

const cardDataSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    setCardData: (state, { payload }) => {
      state.cardData = payload;
    }
  },
  extraReducers: {
    [fetchCardData.fulfilled]: (state, { payload }) => {
      state.cardData = payload;
    }
  }
})

export const { setCardData } = cardDataSlice.actions;
export default cardDataSlice.reducer;