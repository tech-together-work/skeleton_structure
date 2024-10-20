import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { increment } from './store/counterSlice';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '~react-pages';

const router = createBrowserRouter(routes);

function App() {
  // Redux usage
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch(increment());
  };

  console.log(counterValue, increaseCounter());

  return <RouterProvider router={router} />;
}

export default App;
