import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '~react-pages';
import PageLayout from './components/shared/PageLayout/PageLayout';
import ErrorTemplate from './components/shared/Error/Error';

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    path: '/',
    errorElement: <ErrorTemplate />,
    children: routes,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
