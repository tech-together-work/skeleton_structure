import { APIKeysEnum } from '../enums/APIKeysEnum';
import { countryService } from '../sanity';
import { useCustomQuery } from './useCustomQuery';

export const getCountries = async () => {
  const data = await countryService.getCountryStates();
  return data;
};

export const useGetCountryStates = () => {
  return useCustomQuery([APIKeysEnum.COUNTRIES], () => getCountries(), {
    onErrorMessage: 'Error counttry tour',
    onSuccessMessage: `Fetching Country States API Failed`,
  });
};
