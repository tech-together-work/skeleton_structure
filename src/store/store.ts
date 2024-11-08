import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slices/countrySlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
