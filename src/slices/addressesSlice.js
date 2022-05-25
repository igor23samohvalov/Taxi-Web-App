import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAddresses = createAsyncThunk(
  'addresses/fetchAddresses',
  async () => {
    try {
      const response = await axios.get('https://loft-taxi.glitch.me/addressList');
      if (response.status !== 200) throw new Error(`Response Error, code: ${response.status}`)

      return response.data;
    } catch (error) {
      console.log(error.message)
    }
  }
)

const initialState = { addresses: [] };

const addressesSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    addAddress: (state, { payload }) => {
      state.push(payload)
    }
  },
  extraReducers: {
    [fetchAddresses.fulfilled]: (state, { payload }) => {
      state.addresses = payload.addresses;
    }
  }
})

export const { addAddress } = addressesSlice.actions;
export default addressesSlice.reducer;