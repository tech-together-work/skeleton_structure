import { UseQueryOptions } from 'react-query';
export interface Image {
  asset: {
    _ref: string;
    _type: string;
  };
}
export interface GlobalError {
  error: {
    errorText: string;
    errorStatus?: number;
  };
}
export interface CustomUseQueryOptions<TQueryFnData, TError>
  extends UseQueryOptions<TQueryFnData, TError> {
  onErrorMessage?: string;
  onSuccessMessage?: string;
}
