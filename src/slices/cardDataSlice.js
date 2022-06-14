import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCardData = createAsyncThunk(
  'cardData/fetchCardData',
  async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://loft-taxi.glitch.me/card?token=${token}`);
      if (!response.data.success) throw new Error(response.data.success.error)

      return response.data;
    } catch (error) {

      return {
        cardNumber: "",
        expiryDate: "0000",
        cardName: "",
        cvc: "",
      }
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

export const { actions } = cardDataSlice;
export default cardDataSlice.reducer;