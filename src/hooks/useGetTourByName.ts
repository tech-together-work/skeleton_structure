import { APIKeysEnum } from '../enums/APIKeysEnum';
import { cityService } from '../sanity';
import { useQuery } from 'react-query';

export const getTourByName = async (tourName: string) => {
  const data = await cityService.getTourByName(tourName);
  return data;
};

export const useGetTourByName = (tourName: string) => {
  const query = useQuery(
    [APIKeysEnum.TOUR, tourName],
    () => getTourByName(tourName),
    {
      onError: (error) => {
        console.error('Error fetching tour:', error);
      },
      onSuccess: (data) => {
        if (!data || data.length === 0) {
          throw new Error(`No tour found with the slug: ${tourName}`);
        }
      },
    }
  );

  return query;
};
