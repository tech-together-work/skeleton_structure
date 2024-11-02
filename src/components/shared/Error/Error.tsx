import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../../enums/RouteEnums';
import { useRouteError } from 'react-router-dom';
import Flex from '../Flex/Flex';
import { H1 } from '../Text/Text';
import Button from '../Button/Button';
import { ColorsEnum } from '../../../enums/ColorsEnum';

const ErrorTemplate = () => {
  const errorResponse: any = useRouteError();
  console.log('errorResponse', errorResponse);
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      height="100vh"
      gap="8px"
    >
      <H1 color={ColorsEnum.Primary}>Something went wrong!</H1>
      <Link to={RoutesEnum.HOME}>
        <Button>Reload</Button>
      </Link>
    </Flex>
  );
};

export default ErrorTemplate;
