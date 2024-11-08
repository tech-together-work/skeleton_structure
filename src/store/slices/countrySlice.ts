import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country } from '../../sanity/types/country';

const initialState: Country[] = [];

const countrySlice = createSlice({
  name: 'countries',
  initialState: initialState,
  reducers: {
    setCountries: (_, action: PayloadAction<Country[]>) => {
      return action.payload;
    },
  },
});
export const { setCountries } = countrySlice.actions;

export default countrySlice.reducer;
