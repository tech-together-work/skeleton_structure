import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../../enums/RouteEnums';
import { useRouteError } from 'react-router-dom';
import Flex from '../Flex/Flex';
import { H1, H3 } from '../Text/Text';
import Button from '../Button/Button';
import { ColorsEnum } from '../../../enums/ColorsEnum';
import { GlobalError } from '../../../sanity/types/common';

const ErrorTemplate = ({ error }: GlobalError) => {
  const errorResponse: any = useRouteError();

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
      <Link to={RoutesEnum.HOME}>
        <Button>Reload</Button>
      </Link>
    </Flex>
  );
};

export default ErrorTemplate;
