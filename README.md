## Redux

# What is redux?
- Ans: Redux is an open-source JavaScript library for managing the state of an application. It is commonly used with libraries or frameworks like React for building user interfaces

# Installation

```bash
   # NPM
   npm install @reduxjs/toolkit react-redux

   # Yarn
   yarn add @reduxjs/toolkit react-redux
```
# Connect Redux With React Application

 ## Steps 
 ------------------------------------------------------------------------------------------------
 1. Create a redux folder under src
 2. Create a store named store.js

 ``` bash
 import { configureStore } from '@reduxjs/toolkit'

 export const store = configureStore({
  reducer: {},
})

```

3. Connect with react with provider
```
<Provider store={store}>
    <App />
</Provider>
```
4. Create a slice under src/features/counterSlice.ts
 ```

 import { createSlice } from "@reduxjs/toolkit";
const initialState: CounterType = { count: 0 };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByValue: (state, action) => {
      state.count = state.count + action.payload.value;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});
export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
```
5. Now add the reducers function with store
```bash

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

});
```
6.For use In <App/>
```
import {decrement,increment,incrementByValue} from "./redux/features/counterSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
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
```

