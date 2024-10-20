import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '~react-pages';
import PageLayout from './components/shared/PageLayout/PageLayout';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <PageLayout>
      <RouterProvider router={router} />;
    </PageLayout>
  );
};

export default App;
