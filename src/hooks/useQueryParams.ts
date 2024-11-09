import { useLocation, useParams } from 'react-router-dom';

const useQueryParams = () => {
  const location = useLocation();
  const params = useParams();

  // Split the pathname into segments
  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => segment);

  // Create a key-value map
  const keyValueMap = pathSegments.reduce<Record<string, string>>(
    (acc, segment) => {
      const paramKey = Object.keys(params).find(
        (key) => params[key] === segment
      );
      acc[paramKey || segment] = segment; // Use param key if available, else use the segment as key
      return acc;
    },
    {}
  );

  return keyValueMap;
};

export default useQueryParams;
