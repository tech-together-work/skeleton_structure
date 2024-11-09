// src/utils/apiUtils.ts

import { useDispatch } from 'react-redux';
import { setError } from '../store/slices/errorSlice';

const dispatchError = (
  dispatch: ReturnType<typeof useDispatch>,
  errorText: string,
  errorStatus: number
) => {
  console.log('Inside Dispacth');
  dispatch(
    setError({
      error: {
        errorText,
        errorStatus,
      },
    })
  );
};

export const handleApiError = (
  error: any,
  dispatch: ReturnType<typeof useDispatch>,
  message: string = 'Something went wrong'
) => {
  console.error(message, error);
  dispatchError(dispatch, message, 500);
};

export const handleApiSuccess = (
  data: any,
  dispatch: ReturnType<typeof useDispatch>,
  message: string = 'No data available'
) => {
  console.log('Data from API:', data);

  if (!data || data.length === 0) {
    dispatchError(dispatch, message, 404);
  } else {
    dispatchError(dispatch, '', 0);
  }
};
