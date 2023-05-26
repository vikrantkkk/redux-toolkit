import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, valueby20 } from "./Slice";

const App = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  const handleIncby20 = () => {
    dispatch(valueby20(30));
  };

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={handleInc}>incerese</button>
      <button onClick={handleDec}>decerese</button>
      <button onClick={handleIncby20}>valuincby20</button>
    </div>
  );
};

export default App;
