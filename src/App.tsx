import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incremntByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  // const count = useSelector((state) => state.counter.count);
  const count = useAppSelector((state) => state.counter.count);
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
        className="font-bold text-2xl text-green-900"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(incremntByValue(5))}
        className="font-bold text-2xl text-green-900"
      >
        Increment by 5
      </button>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(decrement())}
        className="font-bold text-2xl text-red-900"
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
