import { APIKeysEnum } from '../enums/APIKeysEnum';
import { useCache } from '../hooks/useCache';
import { Country } from '../sanity/types/country';

export const getDestinationNameBySlug = (slug: string) => {
  const countryStates = useCache<Country[]>(APIKeysEnum.COUNTRIES);

  if (!countryStates) {
    console.log('Loading data...');
    return '';
  }

  const country = countryStates.find((country) => country.slug === slug);
  return country?.title ? country?.title : '';
};

export const getStateNameBySlug = (slug: string) => {
  const countryStates = useCache<Country[]>(APIKeysEnum.COUNTRIES);

  if (!countryStates) {
    console.log('Loading data...');
    return '';
  }

  for (const country of countryStates) {
    if (country.states) {
      const state = country.states.find((state) => state.slug === slug);
      if (state) {
        return state.title;
      }
    }
  }
  return '';
};
