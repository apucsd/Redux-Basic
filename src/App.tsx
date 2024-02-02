import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-5 border-b-2 p-5">
        React Redux
      </h1>

      <div className="flex flex-col justify-start text-center gap-5">
        <h1 className="text-4xl font-black">{count}</h1>
        <div className="flex justify-center items-center gap-5">
          <button onClick={() => dispatch(increment())} className="btn1">
            Increment
          </button>
          <button
            onClick={() => dispatch(incrementByValue({ value: 5 }))}
            className="btn1"
          >
            Increment by value
          </button>
          <button onClick={() => dispatch(decrement())} className="btn2">
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
