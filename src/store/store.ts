import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './slices/errorSlice';

const store = configureStore({
  reducer: {
    error: errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
