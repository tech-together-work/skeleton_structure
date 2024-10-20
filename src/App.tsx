import { useDispatch, useSelector } from "react-redux";
import styles from "./App.module.scss";
import { RootState } from "./store/store";
import { increment } from "./store/counterSlice";

function App() {
  //Redux usage
  const counterValue = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const increaseCounter = () => {
    dispatch(increment());
  };

  return (
    <div className={styles.bg}>
      <h2>Swagatam!!!</h2>
      <button onClick={increaseCounter}>Click me</button>
      <h3> {counterValue.value}</h3>
    </div>
  );
}

export default App;
