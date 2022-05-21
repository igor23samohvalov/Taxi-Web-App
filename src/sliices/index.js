import { configureStore } from '@reduxjs/toolkit';
import addressesReducer from './addressesSlice.js';

export default configureStore({
  reducer: {
    addresses: addressesReducer,
  }
});