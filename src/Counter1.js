import React, { useState } from "react";
import CustomHook from "./CustomHook";

const Counter1 = () => {
  const [count, setCount] = useState(0);
  CustomHook(count);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter is {count}</button>
    </div>
  );
};

export default Counter1;
