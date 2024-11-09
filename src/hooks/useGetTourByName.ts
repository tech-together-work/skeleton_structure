import { APIKeysEnum } from '../enums/APIKeysEnum';
import { cityService } from '../sanity';
import { useCustomQuery } from './useCustomQuery';

export const getTourByName = async (tourName: string) => {
  const data = await cityService.getTourByName(tourName);
  return data;
};

export const useGetTourByName = (tourName: string) => {
  return useCustomQuery(
    [APIKeysEnum.TOUR, tourName],
    () => getTourByName(tourName),
    {
      onErrorMessage: 'Error fetching tour',
      onSuccessMessage: `Fetching Tour API for '${tourName}' Failed`,
    }
  );
};
