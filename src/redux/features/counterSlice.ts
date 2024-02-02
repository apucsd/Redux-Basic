import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CounterType = {
  count: number;
};
type IncrementByValueType = {
  value: number;
};
const initialState: CounterType = { count: 0 };
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByValue: (state, action: PayloadAction<IncrementByValueType>) => {
      state.count = state.count + action.payload.value;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});
export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
