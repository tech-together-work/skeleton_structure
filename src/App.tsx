import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '~react-pages';
import PageLayout from './components/shared/PageLayout/PageLayout';
import { Suspense } from 'react';

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: routes,
  },
]);
const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
