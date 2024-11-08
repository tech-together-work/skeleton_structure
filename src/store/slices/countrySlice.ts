import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from '../../sanity/types/country';

const initialState: Country[] = [];

const countrySlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    setCountries: (state, action: PayloadAction<Country[]>) => {
      state = action.payload;
    },
  },
});
export const { setCountries } = countrySlice.actions;

export default countrySlice.reducer;
