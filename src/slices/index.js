import { configureStore } from '@reduxjs/toolkit';
import addressesSlice from './addressesSlice.js';
import cardDataSlice from './cardDataSlice.js';

export default configureStore({
  reducer: {
    addresses: addressesSlice,
    cardData: cardDataSlice,
  }
});