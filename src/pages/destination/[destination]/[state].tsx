import Breadcrumbs from '../../../components/shared/common/Breadcrumbs/Breadcrumbs';
import useQueryParams from '../../../hooks/useQueryParams';
import {
  getDestinationNameBySlug,
  getStateNameBySlug,
} from '../../../utils/getSlugName';

const State = () => {
  const params = useQueryParams();

  const breadCrumbPaths = [
    {
      label: 'Destination',
      href: '',
    },
    {
      label: getDestinationNameBySlug(params.destination),
      href: `/destination/${params.destination}`,
    },
    {
      label: getStateNameBySlug(params.state),
      href: '',
    },
  ];
  return (
    <>
      <Breadcrumbs paths={breadCrumbPaths} />
    </>
  );
};

export default State;
