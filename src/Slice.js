import { createSlice } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counterSlice",
  initialState: 0,

  reducers: {
    increment: (state, action) => state + 1,
    decrement: (state, action) => state - 1,
    valueby20: (state, action) => state + action.payload,
  },
});

console.log("counterSlice", counterSlice);

export const { increment, decrement, valueby20 } = counterSlice.actions;
export default counterSlice.reducer;
