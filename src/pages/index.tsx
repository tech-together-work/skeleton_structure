import { useSelector } from 'react-redux';
import Landing from '../components/Landing/Landing';
import { RootState } from '../store/store';

const Home = () => {
  // Redux usage
  const counterValue = useSelector((state: RootState) => state.counter.value);
  console.log(counterValue);

  return <Landing />;
};

export default Home;
