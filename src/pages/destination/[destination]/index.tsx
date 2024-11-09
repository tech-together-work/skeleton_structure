import DestinationPage from '../../../components/DestinationPage/DestinationPage';
import Breadcrumbs from '../../../components/shared/common/Breadcrumbs/Breadcrumbs';
import useQueryParams from '../../../hooks/useQueryParams';
import { getDestinationNameBySlug } from '../../../utils/getSlugName';

const Destination = () => {
  const params = useQueryParams();

  const breadCrumbPaths = [
    {
      label: 'Destination',
      href: '',
    },
    {
      label: getDestinationNameBySlug(params.destination),
      href: '',
    },
  ];
  return (
    <>
      <Breadcrumbs paths={breadCrumbPaths} />
      <DestinationPage />
    </>
  );
};

export default Destination;
