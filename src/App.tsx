import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '~react-pages';
import PageLayout from './components/shared/PageLayout/PageLayout';
import ErrorTemplate from './components/shared/Error/Error';
import { useGetCountryStates } from './hooks/useGetCountryStates';

import Loader from './components/shared/common/Loader/Loader';

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    path: '/',
    errorElement: <ErrorTemplate />,
    children: routes,
  },
]);
const App = () => {
  const { isLoading: countriesStatesLoading } = useGetCountryStates();

  if (countriesStatesLoading) return <Loader />;

  return <RouterProvider router={router} />;
};

export default App;
