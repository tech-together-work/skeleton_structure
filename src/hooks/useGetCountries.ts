import { useQuery } from '@tanstack/react-query';
import { countryService } from '../sanity';

export const getCountries = async () => {
  const data = await countryService.getCountries();
  return data;
};

export const useGetCountries = () => {
  const query = useQuery({
    enabled: true,
    queryKey: ['countries'],
    queryFn: getCountries,
  });

  return query;
};
