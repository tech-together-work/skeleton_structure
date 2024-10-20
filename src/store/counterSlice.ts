import { createSlice } from '@reduxjs/toolkit';

// Define the type for the state
interface CounterState {
  value: number;
}

// Set the initial state with the defined type
const initialState: CounterState = {
  value: 0,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export the actions
export const { increment, decrement } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
