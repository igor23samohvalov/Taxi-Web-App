import { configureStore } from '@reduxjs/toolkit';
import addressesReducer from './addressesSlice.js';
import cardDataReducer from './cardDataSlice.js';

export default configureStore({
  reducer: {
    addresses: addressesReducer,
    cardData: cardDataReducer,
  }
});