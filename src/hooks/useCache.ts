import queryClient from '../utils/queryClient';

export const useCache = <T>(queryKey: string): T | undefined => {
  const cachedData = queryClient.getQueryData<T>(queryKey);

  return cachedData;
};
