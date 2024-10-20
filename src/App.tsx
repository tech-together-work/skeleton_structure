import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '~react-pages';
import PageLayout from './components/shared/PageLayout/PageLayout';
import { Suspense } from 'react';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <PageLayout>
        <RouterProvider router={router} />;
      </PageLayout>
    </Suspense>
  );
};

export default App;
