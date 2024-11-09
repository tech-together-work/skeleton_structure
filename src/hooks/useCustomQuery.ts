import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { handleApiError, handleApiSuccess } from '../utils/apiUtils';
import { CustomUseQueryOptions } from '../sanity/types/common';

export const useCustomQuery = <TQueryFnData, TError>(
  queryKey: string | any[],
  queryFn: () => Promise<TQueryFnData>,
  options?: CustomUseQueryOptions<TQueryFnData, TError>
) => {
  const dispatch = useDispatch();

  return useQuery<TQueryFnData, TError>(queryKey, queryFn, {
    ...options,
    onError: (error: TError) => {
      handleApiError(error, dispatch, options?.onErrorMessage);
    },
    onSuccess: (data: TQueryFnData) => {
      handleApiSuccess(data, dispatch, options?.onSuccessMessage);
    },
  });
};
