import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GlobalError } from '../../sanity/types/common';

const initialState: GlobalError = {
  error: { errorText: '', errorStatus: undefined },
};

const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {
    setError: (state, action: PayloadAction<GlobalError>) => {
      state.error.errorText = action.payload.error.errorText;
      state.error.errorStatus = action.payload.error.errorStatus;
    },
    clearError: (state) => {
      state.error.errorText = '';
      state.error.errorStatus = undefined;
    },
  },
});
export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
