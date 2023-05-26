import { configureStore } from "@reduxjs/toolkit";
import counter from './Slice'

const Store = configureStore({
  reducer: {
    counter : counter
  },
});
export default Store