import { APIKeysEnum } from '../enums/APIKeysEnum';
import { countryService } from '../sanity';
import { useQuery } from 'react-query';

export const getCountries = async () => {
  const data = await countryService.getCountries();
  return data;
};

export const useGetCountries = () => {
  const query = useQuery({
    //Key by which data will be saved into React query cache
    queryKey: [APIKeysEnum.COUNTRIES],
    queryFn: getCountries,
  });

  return query;
};
