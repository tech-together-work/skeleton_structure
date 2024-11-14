import { useNavigate } from 'react-router-dom';
import { RoutesEnum } from '../../../enums/RouteEnums';
import { useRouteError } from 'react-router-dom';
import Flex from '../Flex/Flex';
import { H1, H3 } from '../Text/Text';
import Button from '../Button/Button';
import { ColorsEnum } from '../../../enums/ColorsEnum';
import { GlobalError } from '../../../sanity/types/common';
import { useDispatch } from 'react-redux';
import { clearError } from '../../../store/slices/errorSlice';

const ErrorTemplate = ({ error }: GlobalError) => {
  const errorResponse: any = useRouteError();
  console.log('errorResponse', errorResponse, error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleResetError = () => {
    dispatch(clearError());
    navigate(RoutesEnum.HOME);
  };
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      height="100vh"
      gap="8px"
    >
      <H1 color={ColorsEnum.Primary}>Something went wrong!</H1>
      <H3 color={ColorsEnum.Secondary}>
        {errorResponse?.internal ? errorResponse.data : error.errorText}
      </H3>
      <Button onClick={handleResetError}>Reload</Button>
    </Flex>
  );
};

export default ErrorTemplate;
