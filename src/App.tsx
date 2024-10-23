import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '~react-pages';
import PageLayout from './components/shared/PageLayout/PageLayout';
import ErrorTemplate from './components/shared/Error/Error';

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: routes,
    errorElement: <ErrorTemplate />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
