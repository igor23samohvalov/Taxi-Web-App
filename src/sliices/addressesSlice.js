import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addressesSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    addAddress: (state, { payload }) => {
      state.push(payload)
    }
  }
})

export const { addAddress } = addressesSlice.actions;
export default addressesSlice.reducer;