import { configureStore } from '@reduxjs/toolkit';
import addOnsReducer from './Slices/addOnsSlice';
export const store = configureStore({
  reducer: {
    addOns: addOnsReducer,
  },
});
